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

The line is a serial process, not a picture of one. Each station holds
one part for a process time that belongs to the work — a weld longer
than a dock — stretched by the age of the plant, and further on a
day when air or coolant has failed and nobody is in the cell. Two
parts may wait behind it. Demand sets the takt. The slowest live
station is the constraint; a due safety or power failure replaces it,
because a serial line cannot pass that station. Good pieces per minute
cannot exceed the constraint. WIP on the belt is counted, and
checked against departures times sojourn time. OEE is availability
times performance times quality. Availability is the share of the
recent window the line was not stopped. Performance is the share of
that window the constraint was actually cycling, times its nameplate
divided by its worn cycle.
Quality is good pieces over good plus scrap, and the scrap risk grows
with age. The balance row is each station's process time against the
takt line. Run advances the duty day; Hold stops the calendar and
leaves the stations working. Export is the line after a fixed warm-up,
named `line-board_seed-NNNN.png`.

The same seed, the same plant, the same day, the same crew: the same
sheet, exactly. Reroll does not stir the drawing; it only chooses the
next integer to stand in the doorway. The export is an edition of that
sheet, named with its seed, the way a work order is named with the
plant it belongs to.

Controls: stations, plant age, duty day, horizon, demand, crew,
service shift (air, power, coolant, safety), preventive marks, station
names, seed. Export at 2× as `line-board_seed-NNNN.png`.
