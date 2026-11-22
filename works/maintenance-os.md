# Duty Cycle — concept note

Axel Ruiz studio · 2026

A line is a calendar with stations. Maintenance OS opens that calendar
as a board for an advanced automation floor. One seed still grows the
plant — aisle, cells, door tree, plant air, servo power, coolant, and
safety — and then sets the cells in process order: dock, kitting,
press, weld, robot, assembly, test, pack. Parts travel that sequence.
An open order stops its station. Work piles upstream and the stations
downstream starve. Crew on a station slows the belt through it.

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

The board under the belt is the dashboard, and it moves with the line.
Rate, takt, WIP, and the down station tick on the sheet and again in
the console. A throughput trace scrolls. Every station column fills and
resets on its cycle, and a down station holds the accent. Run advances
the duty day through the year and wraps; Hold stops the calendar and
leaves the belt moving. Export is the line at release, before the clock
advances, named `line-board_seed-NNNN.png`.

The same seed, the same plant, the same day, the same crew: the same
sheet, exactly. Reroll does not stir the drawing; it only chooses the
next integer to stand in the doorway. The export is an edition of that
sheet, named with its seed, the way a work order is named with the
plant it belongs to.

Controls: stations, plant age, duty day, horizon, utilization, crew,
service shift (air, power, coolant, safety), preventive marks, station
names, seed. Export at 2× as `line-board_seed-NNNN.png`.
