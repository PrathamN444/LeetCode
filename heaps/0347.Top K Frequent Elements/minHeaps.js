/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MinHeaps{
    constructor(){
        this.heap = [];
    }

    insert(val, key){
        // push the value
        // idx = last index and parent = (i-1)/2
        // check if the parent is greater than the child if yes then swap and do this until to the root if not then break 
        this.heap.push([val,key]);
        let idx = this.heap.length - 1;
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            if(this.heap[parentIdx][0] <= this.heap[idx][0]) break;
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
            if(left < this.heap.length && this.heap[smallest][0] > this.heap[left][0]){
                smallest = left;
            }
            if(right < this.heap.length && this.heap[smallest][0] > this.heap[right][0]){
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
    
    returnArray(){
        return this.heap.map(e => e[1]);
    }
}

var topKFrequent = function(nums, k) {
    const freq = new Map();
    for(let i=0; i<nums.length; i++){
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    const heap = new MinHeaps();
    for(const [key,val] of freq){
        heap.insert(val, key);
        if(heap.size() > k){
            heap.remove();
        }
    }
    return heap.returnArray();
};