# Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

---

## Solution: Min-Heap with Frequency Map (minHeaps.js)

### Idea

Use a combination of a frequency map and a min-heap to find the k most frequent elements:

1. **Count frequencies**: Create a map to store the frequency of each unique number
2. **Use min-heap**: Maintain a min-heap based on frequencies that keeps only k elements
3. **Extract result**: The k elements remaining in the heap are the most frequent

### Algorithm Steps

1. Create a Map to count the frequency of each number
   ```
   Map: {num -> frequency}
   ```

2. Create a min-heap where the comparison is based on frequency
   - Each heap element is a pair: [frequency, number]

3. For each unique number and its frequency:
   - Insert [frequency, number] into the heap
   - If heap size exceeds k, remove the element with minimum frequency
   
4. After processing all unique numbers, the heap contains the k most frequent elements
5. Extract and return just the numbers (skip frequencies)

### Why this works

By maintaining a min-heap of size k:
- The root always contains the element with the smallest frequency among the k most frequent
- When we encounter a number with higher frequency than the minimum in the heap, we remove the minimum and insert the new number
- This ensures we keep the k most frequent elements at all times

### Time Complexity
- **Frequency counting**: O(n) - traverse all n numbers
- **Heap operations**: O(m log k) - m is the number of unique elements, each insertion/removal takes O(log k)
  - In the worst case, m = n, giving us O(n log k)
- **Extracting result**: O(k log k) - remove k elements from heap
- **Total**: O(n log k) where typically m << n

### Space Complexity
- O(m) for the frequency map, where m is the number of unique elements
- O(k) for the min-heap
- **Total**: O(m) = O(n) in the worst case

---

## Comparison with Alternatives

**Approach 1: Min-Heap (this solution)**
- Time: O(n log k)
- Space: O(m + k) where m is unique elements
- Best when k is small

**Approach 2: Sorting**
- Time: O(n log n)
- Space: O(n)
- Simpler but less efficient for small k

---

## Example

**Input:**
```
nums = [1,1,1,2,2,3], k = 2
```

**Process:**
1. Count frequencies: {1: 3, 2: 2, 3: 1}

2. Build min-heap:
   - Insert [3, 1]: heap = [[3, 1]]
   - Insert [2, 2]: heap = [[2, 2], [3, 1]]
   - Insert [1, 3]: heap = [[1, 3], [3, 1], [2, 2]] → size > 2, remove [1, 3] → heap = [[2, 2], [3, 1]]

3. Extract numbers: [2, 1]

**Output:** `[1, 2]` (or `[2, 1]` - any order is valid)

---

## Why Min-Heap?

We use a **min-heap based on frequency**:
- The root always has the minimum frequency among selected k elements
- Easy to decide which element to remove when heap size exceeds k
- The k elements with highest frequencies remain in the heap

---

## Real-World Applications

- **Search engines**: Finding the k most frequently searched queries
- **Trending topics**: Finding top trending hashtags or keywords
- **Recommendation systems**: Finding the most accessed items
- **Caching**: LRU cache with frequency tracking
