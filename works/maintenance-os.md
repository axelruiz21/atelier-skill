# Duty Cycle — concept note

Axel Ruiz studio · 2026

A line is a calendar with stations. Maintenance OS opens that calendar
as a board for an advanced automation floor. One seed still grows the
plant — aisle, cells, door tree, plant air, servo power, coolant, and
safety — and then sets the cells in process order: dock, kitting,
press, weld, robot, assembly, test, pack. Parts travel that sequence.
An order inside the horizon is a forecast: it stays on the register
and does not touch the belt. The station stops on the day a safety or
power failure is due, and while a crew is in the cell repairing that
failure. Work then piles upstream and the stations downstream starve.
Air or coolant, due the same day and unattended, only lengthens the
cycle.

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

The line is a lean serial process, not a picture of one. Parts enter
as a mixed model (SKU A, B, C) leveled by batch size — Heijunka at
batch one, or grouped batches up to six. Under CONWIP pull, a release
at the dock requires a free kanban card and each station keeps a
single-piece supermarket lane; under push, the dock releases at takt
until its two-part queue fills. Every tooling cell incurs a SMED
changeover when the SKU switches, visibly docking its end-of-arm
tooling to swap before processing. When Jidoka is enabled, a defect
pulls the Andon on that cell, pausing flow briefly to contain the root
cause and cutting repeat scrap across the next six parts.

Every processing cell runs a 6-axis articulated manipulator solved
with closed-form Pieper inverse kinematics (J1 waist, J2 shoulder, J3
elbow, J4–J6 spherical wrist) across process-specific 3D toolpaths —
serpentine HVLP spray passes, MIG weld seams, fiber laser contours,
nutrunner bolt patterns, press die tending, and palletizing. Gravity
and inertial joint torques (N·m), joint angular velocities (°/s), and
kinematic manipulability (|sin J3 · sin J5|) are computed directly
from the live pose and cell cycle time. Clicking any station on the
process strip opens that cell in the 6-axis orthographic bay (R–Z
elevation, X–Y plan, and J1–J6 telemetry) without altering exported
editions.

Demand sets the takt. The slowest live station is the constraint; a
due safety or power failure, a crew repair, or an active Andon
replaces it. Good pieces per minute cannot exceed the constraint. WIP
on the belt is checked against Little's law (departures times sojourn)
and Hopp & Spearman's critical WIP W0 (raw process time over the
bottleneck cycle). OEE is availability times performance times
quality, tracked over a rolling window. The Yamazumi chart stacks
each station's value-add processing, non-value-add robot transfer, and
amortized SMED changeover against the takt line, alongside the rolling
flow trace, lead time, first-pass yield, and value-add ratio. Run
advances the duty day; Hold stops the calendar and leaves the stations
working. Export is the line after a fixed 480-second warm-up, named
`line-board_seed-NNNN.png`.

The same seed, the same plant, the same day, the same parameters: the
same sheet, exactly. Reroll does not stir the drawing; it only chooses
the next integer to stand in the doorway. The export is an edition of
that sheet, named with its seed, the way a work order is named with
the plant it belongs to.

Controls: stations, plant age, duty day, horizon, demand, crew,
CONWIP pull, kanban cap, batch/Heijunka level, SMED setup, Jidoka
Andon, service shift (air, power, coolant, safety), preventive marks,
station names, seed. Export at 2× as `line-board_seed-NNNN.png`.
