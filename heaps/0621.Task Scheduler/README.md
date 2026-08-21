# Task Scheduler

Given a list of tasks represented by characters and a non-negative integer `n`, return the minimum number of intervals needed to execute all tasks.

The same task must have at least `n` intervals between two executions of that task. During an interval, either a task can be executed or the CPU can remain idle.

## Example

```text
tasks = ["A", "A", "A", "B", "B", "B"]
n = 2

Output: 8
```

A valid schedule is:

```text
A B idle A B idle A B
```

The answer is `8` intervals.

## Approach 1: Max-Heap

Always execute the tasks with the highest remaining frequency first. Store task frequencies in a max-heap and process them in cycles of `n + 1` intervals:

1. Remove up to `n + 1` frequencies from the heap and execute each task once.
2. Decrease each frequency and temporarily store tasks that still have work left.
3. Reinsert those frequencies after the cycle.
4. Add idle intervals if the cycle is incomplete and tasks remain.

The `n + 1` cycle ensures that the same task is not repeated before its cooldown ends.

## Approach 2: Greedy Formula

Let `maxFreq` be the largest frequency and `maxFreqChars` be the number of tasks with that frequency. The most frequent tasks force this minimum layout:

```text
(maxFreq - 1) * (n + 1) + maxFreqChars
```

If other tasks fill every idle position, the answer is simply `tasks.length`. Therefore:

```text
Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxFreqChars)
```

### Dry Run

```text
tasks = [A, A, A, B, B, B]
n = 2
```

Frequencies:

```text
A: 3, B: 3
maxFreq = 3
maxFreqChars = 2
```

The formula gives:

```text
(3 - 1) * (2 + 1) + 2 = 8
```

Since there are `6` tasks, the result is:

```text
Math.max(6, 8) = 8
```

One valid schedule is `A B idle A B idle A B`.

`Math.max` is needed because available tasks may fill all idle slots, but every task still must be executed.

### Complexity

Let:

- `t` be the total number of tasks.
- `k` be the number of unique task types.

### Time Complexity

- Max-heap: `O(t log k)` time.
- Greedy formula: `O(t + k) = O(t)` time.

### Space Complexity

- Both approaches use `O(k)` space for task frequencies; the heap approach also uses `O(k)` heap and temporary storage.

## Implementation

- The max-heap solution is implemented in [maxHeap.js](maxHeap.js).
- The greedy formula solution is implemented in [greedy.js](greedy.js).
