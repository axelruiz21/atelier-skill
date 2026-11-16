# Duty Cycle — concept note

Axel Ruiz studio · 2026

A plant is a calendar with walls. Maintenance OS opens that calendar as
a sheet for an advanced automation floor: robotics, machining, and the
utilities that keep a line running. One seed cuts a main aisle through
a plan, partitions the wings into cells by recursive binary space
division, and hangs a door tree back onto the aisle so every cell has
a way to the spine. The mechanical room is the cell nearest the
centroid. Plant air, servo power, coolant, and safety leave the aisle
as parallel risers and reach each served cell along that door tree.

The register is a work-order board, not a mood. At the opening of the
duty year every asset draws a residual life from a Weibull distribution
— shape by service, scale shortened by age and by utilization — from
its own mulberry32 stream. A failure is repaired, not replaced. The
asset returns at seventy-two percent of the virtual age it failed at,
Kijima's Type I, and the next residual is drawn from that younger age.
The duty year is the sequence of those repairs. The day control slides
the horizon across it. The soonest failure inside the window is the
corrective order. A crew, sized by the operator, takes the highest
priority first: criticality of the cell divided by days remaining. A
robot, a welder, a laser, or the PLC cabinet outranks a dock or a tool
crib. What the crew cannot take stays open, and only the open orders
carry the accent. Preventive marks are a second, quieter cadence,
phased on each service interval.

The services run square, and they run. A display clock, outside the
seed, drives the sheet: current dashes along plant air, power, coolant,
and safety; an accent call travels the door tree toward every open
order; a crew mark walks out to the cell and back. Open stamps pulse.
Run advances the duty day through the year and wraps; Hold stops the
calendar and leaves the current moving. From each served cell a stub
leaves the door, the path follows the door tree doorway to doorway, and
a single elbow joins the riser in the aisle. Names sit on a paper plate,
so a filament never strikes the type. Export is taken at phase zero, so
the edition stays a function of seed and parameters alone.

The same seed, the same plant, the same day, the same crew: the same
sheet, exactly. Reroll does not stir the drawing; it only chooses the
next integer to stand in the doorway. The export is an edition of that
sheet, named with its seed, the way a work order is named with the
plant it belongs to.

Controls: cells, plant age, duty day, horizon, utilization, crew,
service shift (air, power, coolant, safety), preventive marks, cell
names, seed. Export at 2× as `duty-cycle_seed-NNNN.png`.
