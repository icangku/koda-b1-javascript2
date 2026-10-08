# Minitask JS2

## Edition: Finding Max, Min, and Avg of an array of numbers

### Find Max

```mermaid
flowchart TD

A@{shape: circle, label: 'Start'}
B@{shape: lean-r, label: 'numbers1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];<br>numbers2 = [10, 8, 8, 7, 6, 5, 4, 3, 2, 1];<br>i = 0'}
C@{shape: rectangle, label: 'nums = [...numbers1, ...numbers2];<br>min = nums[0]; <br>max = nums[0]'}
D@{shape: diamond, label: 'i <= nums.length'}
E@{shape: diamond, label: 'nums[i] > max'}
F@{shape: diamond, label: 'nums[i] < min'}
G@{shape: rectangle, label: 'min = nums[i]'}
H@{shape: rectangle, label: 'max = nums[i]'}
I@{shape: lean-r, label: 'print(min, max)'}
Y@{shape: rectangle, label: 'i++'}
Z@{shape: dbl-circ, label: 'Finish'}

A-->B-->C-->D
D-->|YES|E
D-->|NO|Z
E-->|YES|H
H-->E
E-->|NO|F
F-->|YES|G
G-->F
F-->|NO|I
I-->Y
Y-->D

```
