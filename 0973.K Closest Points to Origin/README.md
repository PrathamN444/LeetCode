# K Closest Points to Origin

Given an array of points, where each point is represented as [x, y], we need to return the k points closest to the origin (0, 0).

The distance from a point to the origin is:

sqrt(x^2 + y^2)

But for comparison, we can skip the square root because:

- sqrt(a) < sqrt(b) is the same as a < b
- so we compare x^2 + y^2 directly

This keeps the logic efficient and avoids unnecessary square root calculations.

## Problem idea

For each point:

- compute its squared distance from origin
- keep the k points with the smallest distances
- return those points

---

## Approach 1: Max-Heap Solution (maxheap.js)

### Idea

Use a max-heap to keep only the smallest k distances seen so far.

- The heap stores pairs: [distance, point]
- The root of the max-heap is the largest distance currently in the heap
- As we scan through all points:
  - insert the current point into the heap
  - if heap size becomes greater than k, remove the largest distance from the heap

This ensures the heap always contains the k closest points.

### Why this works

A max-heap keeps the current largest among the selected points at the top. If a new point is closer than the current farthest one, it should replace it. Once the heap size exceeds k, the farthest point is removed.

### Time complexity

- Each insertion and removal takes O(log k)
- For n points, total time is O(n log k)
- Extra space is O(k)

### Best use case

This is useful when the number of points is large and we only need to keep the top k results in memory.

---

## Approach 2: Sorting Solution (sort.js)

### Idea

Compute the squared distance for every point, sort the points by that distance, and then return the first k points.

### Why this works

The points are ordered from closest to farthest based on their distance from the origin. Taking the first k entries gives exactly the required answer.

### Time complexity

- Sorting n points takes O(n log n)
- Space complexity is O(1) extra if sorting is done in place, or O(n) depending on the environment

### Best use case

This is simpler and easier to read when you do not need the more optimized heap-based approach.

---

## Comparison

- Max-heap approach: O(n log k)
- Sorting approach: O(n log n)

For this problem, the heap solution is usually more efficient when k is much smaller than n.

---

## Example

Input:

points = [[1, 3], [-2, 2], [2, -2]], k = 2

Distances:

- [1, 3] -> 1^2 + 3^2 = 10
- [-2, 2] -> 4 + 4 = 8
- [2, -2] -> 4 + 4 = 8

The two closest points are:

[[-2, 2], [2, -2]]

---

## Summary

Both solutions solve the same problem, but they do it in different ways:

- maxheap.js: keeps only the best k candidates using a max-heap
- sort.js: sorts all points by distance and picks the first k

The heap solution is more memory-efficient for large inputs when k is small, while the sorting solution is simpler and often easier to understand.
