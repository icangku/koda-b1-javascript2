# Callback

## Area and Circumference Edition

```mermaid
flowchart TD
A@{shape: circle, label: 'Start'}
B@{ shape: process, label: "Call circle(4, calculateAreaAndCircumference)" }
C@{ shape: process, label: "Execute circle(radius, callback)" }
D@{ shape: process, label: "Invoke callback(radius)" }

subgraph CB [Callback: calculateAreaAndCircumference]
    E@{ shape: process, label: "Calculate Area: PI * radius * radius" }
    F@{ shape: process, label: "Calculate Circumference: 2 * PI * radius" }
    G@{ shape: lean-r, label: "Print Area & Circumference" }

    E --> F --> G
end
Z@{shape: dbl-circ, label: 'Finish'}


A --> B --> C --> D --> E
    G --> Z
```

```
1. Create a main function called 'circle' with 2 parameters, radius and callback function which receives argument of the radius.
2. Create a callback function called 'calculateAreaAndCircumference'. In it there is a calculation for the area and circumference.
3. 'calculateAreaAndCircumference' function will also console the result of both area and cicumference of the cirlce.
```
