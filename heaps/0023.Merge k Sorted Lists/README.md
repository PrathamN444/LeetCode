# Merge k Sorted Lists

Given an array of k linked-lists lists, each linked list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.

---

## Approach 1: Min-Heap Solution (minHeap.js)

### Idea

Use a min-heap to efficiently merge k sorted linked lists:

- Extract all values from all k linked lists and insert them into a min-heap
- The min-heap automatically maintains the smallest element at the root
- Pop elements from the heap one by one and construct a new sorted linked list

### Why this works

A min-heap keeps the smallest element at the top. By continuously removing the smallest element and building a new linked list, we get a sorted result.

### Time Complexity
- **Insertion**: O(n log n) - we insert n total nodes, each taking O(log n) time
- **Extraction**: O(n log n) - we remove n nodes, each taking O(log n) time
- **Total**: O(n log n), where n is the total number of nodes across all lists

### Space Complexity
- O(n) - for storing all node values in the heap

---

## Approach 2: Sorting Solution (sort.js)

### Idea

Extract all node values from the k linked lists into an array, sort the array, and then construct a new sorted linked list from the sorted values.

### Why this works

After collecting all values and sorting them, we can reconstruct the linked list in sorted order.

### Time Complexity
- **Collection**: O(n) - traverse all k linked lists
- **Sorting**: O(n log n) - sort all n values
- **Reconstruction**: O(n) - create new linked list
- **Total**: O(n log n)

### Space Complexity
- O(n) - for the values array

---

## Comparison

Both approaches have similar time complexity of **O(n log n)**, but:

- **Min-Heap approach**: More elegant and demonstrates heap manipulation
- **Sorting approach**: Simpler to implement and understand

For this problem, both are equally efficient in terms of asymptotic complexity. The heap approach is more conceptually aligned with the heap data structure problems.

---

## Example

**Input:**
```
lists = [[1,4,5],[1,3,4],[2,6]]
```

**Output:**
```
[1,1,2,1,3,4,4,5,6]
```

**Explanation:**
The three linked lists are merged into a single sorted linked list with all values in ascending order.
