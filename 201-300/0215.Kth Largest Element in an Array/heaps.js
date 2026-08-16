/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeaps{
    constructor(){
        this.heap = [];
    }

    insert(val){
        // push the value
        // idx = last index and parent = (i-1)/2
        // check if the parent is greater than the child if yes then swap and do this until to the root if not then break 
        this.heap.push(val);
        let idx = this.heap.length - 1;
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            if(this.heap[parentIdx] <= this.heap[idx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    remove(){
        // if length is 1 then directly pop and break
        // if not then swap the first with the last and pop the last element and heapify down
        // for heapify down - start from the first root and swap with the one which is smaller
        // and update the idx to child root and do this till the end

        if(this.heap.length === 1){
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        let idx = 0;
        while(true){
            let left = 2*idx + 1;
            let right = 2*idx + 2;
            let smallest = idx;
            if(left < this.heap.length && this.heap[smallest] > this.heap[left]){
                smallest = left;
            }
            if(right < this.heap.length && this.heap[smallest] > this.heap[right]){
                smallest = right;
            }
            if(smallest === idx) break;
            [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
            idx = smallest;
        }
        return root;
    }
    
    size(){
        return this.heap.length;
    }

    peek(){
        return this.heap[0];
    }
}

var findKthLargest = function(nums, k) {
    const heap = new MinHeaps();
    for(let i=0; i<nums.length; i++){
        heap.insert(nums[i]);
        if(heap.size() > k){
            heap.remove();
        }
    }
    return heap.peek();
};