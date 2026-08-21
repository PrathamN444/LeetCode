# Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

---

## Solution: Min-Heap Approach (heaps.js)

### Idea

Use a min-heap to maintain the k largest elements:

- Create a min-heap and iterate through all numbers
- Insert each number into the heap
- If the heap size exceeds k, remove the smallest element from the heap
- After processing all numbers, the root of the heap is the kth largest element

### Why this works

By keeping only the k largest elements in the heap, the smallest among these k elements (at the root of the min-heap) is the kth largest element overall.

For example, if k=3 and we need the 3rd largest:
- We maintain the 3 largest numbers in the heap
- The minimum of these 3 is exactly the 3rd largest

### Algorithm Steps

1. Initialize an empty min-heap
2. For each number in the array:
   - Insert the number into the heap
   - If heap size > k, remove the root (smallest element)
3. Return the root of the heap (the kth largest element)

### Time Complexity
- **Insertion**: O(n log k) - we iterate through n numbers, each insertion/removal takes O(log k)
- **Total**: O(n log k)

**Why O(n log k) and not O(n log n)?**
- The heap never grows larger than k elements
- Heap operations scale with heap size: O(log k)
- We perform n operations: O(n log k)

This is more efficient than sorting (O(n log n)) when k is much smaller than n.

### Space Complexity
- O(k) - for storing k elements in the heap

---

## Why Min-Heap and not Max-Heap?

- With a **min-heap**, we can efficiently remove the smallest of the k largest elements (when heap size exceeds k)
- A **max-heap** would require different logic and wouldn't be as efficient

---

## Example

**Input:**
```
nums = [3,2,1,5,6,4], k = 2
```

**Process:**
- Insert 3: heap = [3]
- Insert 2: heap = [2, 3]
- Insert 1: heap = [1, 3, 2] → size > 2, remove 1 → heap = [2, 3]
- Insert 5: heap = [2, 3, 5] → size > 2, remove 2 → heap = [3, 5]
- Insert 6: heap = [3, 5, 6] → size > 2, remove 3 → heap = [5, 6]
- Insert 4: heap = [4, 6, 5] → size > 2, remove 4 → heap = [5, 6]

**Output:** `5` (the 2nd largest element)

---

## Best Use Cases

- Finding the kth largest element efficiently when k is small relative to n
- Real-time streaming data where we need the top k elements
- Memory-constrained environments (O(k) space instead of O(n))
