/* ATELIER GENERATIVE KIT — inline these into the piece's single file.
   The reproducibility contract: composition code never calls Math.random();
   everything flows from one seed so the same seed yields the same frame. */

/* Seeded PRNG — mulberry32. Returns a () => float in [0,1). */
function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/* Convenience wrappers around a PRNG instance r = mulberry32(seed). */
const rng = {
    range: (r, lo, hi) => lo + r() * (hi - lo),
    int:   (r, lo, hi) => Math.floor(lo + r() * (hi - lo + 1)),
    pick:  (r, arr) => arr[Math.floor(r() * arr.length)],
    /* Fisher–Yates, seeded. Mutates and returns arr. */
    shuffle: (r, arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(r() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    /* Gaussian via Box–Muller, seeded. */
    gaussian: (r, mean = 0, sd = 1) => {
        let u = 0, v = 0;
        while (u === 0) u = r();
        while (v === 0) v = r();
        return mean + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    },
};

/* Poisson-disk sampling — Bridson's algorithm.
   Blue-noise spacing: refuses both the clumping of pure randomness and the
   deadness of a grid. Returns an array of {x, y} within w × h, no two closer
   than minDist. `r` is a seeded PRNG. Optional densityFn(x, y) in [0,1]
   locally scales minDist (1 = sparsest) for luminance- or field-driven density. */
function poissonDisk(r, w, h, minDist, k = 30, densityFn = null) {
    const cell = minDist / Math.SQRT2;
    const gw = Math.ceil(w / cell), gh = Math.ceil(h / cell);
    const grid = new Array(gw * gh).fill(-1);
    const pts = [], active = [];

    const localDist = (x, y) => densityFn
        ? minDist * (0.35 + 0.65 * densityFn(x, y))
        : minDist;

    const fits = (x, y) => {
        if (x < 0 || y < 0 || x >= w || y >= h) return false;
        const d = localDist(x, y);
        const gx = Math.floor(x / cell), gy = Math.floor(y / cell);
        const reach = Math.ceil(d / cell) + 1;
        for (let j = Math.max(0, gy - reach); j <= Math.min(gh - 1, gy + reach); j++) {
            for (let i = Math.max(0, gx - reach); i <= Math.min(gw - 1, gx + reach); i++) {
                const idx = grid[j * gw + i];
                if (idx !== -1) {
                    const p = pts[idx];
                    if ((p.x - x) ** 2 + (p.y - y) ** 2 < d * d) return false;
                }
            }
        }
        return true;
    };

    const add = (x, y) => {
        const p = { x, y };
        pts.push(p);
        active.push(pts.length - 1);
        grid[Math.floor(y / cell) * gw + Math.floor(x / cell)] = pts.length - 1;
    };

    add(rng.range(r, 0, w), rng.range(r, 0, h));

    while (active.length) {
        const ai = Math.floor(r() * active.length);
        const p = pts[active[ai]];
        let placed = false;
        for (let n = 0; n < k; n++) {
            const d = localDist(p.x, p.y);
            const ang = r() * Math.PI * 2;
            const rad = d * (1 + r());
            const x = p.x + Math.cos(ang) * rad, y = p.y + Math.sin(ang) * rad;
            if (fits(x, y)) { add(x, y); placed = true; break; }
        }
        if (!placed) active.splice(ai, 1);
    }
    return pts;
}

/* Export helper — filename carries the work's identity per the canon:
   title, seed, and date belong in the artifact's name. */
function exportName(title, seed) {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${slug}_seed-${seed}.png`;
}
