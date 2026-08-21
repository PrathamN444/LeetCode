/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

class MaxHeaps{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        let idx = this.heap.length - 1;
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            if(this.heap[parentIdx] >= this.heap[idx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    remove(){
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
            if(left < this.heap.length && this.heap[smallest] < this.heap[left]){
                smallest = left;
            }
            if(right < this.heap.length && this.heap[smallest] < this.heap[right]){
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
}

var leastInterval = function(tasks, n) {
    // time complexity = O(t + k.logk + tlogk) = O(tlogk) = O(t)
    // where t is no of tasks and k is no of unique tasks. unique tasks can be from A to Z so O(26*t) = O(t)
    // space complexity = O(k) for heap
    const taskFreq = new Map();
    for(const task of tasks){
        taskFreq.set(task, (taskFreq.get(task) || 0) + 1);
    }

    const mxHeap = new MaxHeaps();
    for(const freq of taskFreq.values()){
        mxHeap.insert(freq);
    }

    let intervals = 0;
    while(mxHeap.size() > 0){
        let executed = 0;
        const temp = [];
        while(executed < n+1 && mxHeap.size() > 0){
            const currCount = mxHeap.remove();
            if(currCount > 1) temp.push(currCount-1);
            executed++; intervals++;
        }
        for(const count of temp){
            mxHeap.insert(count);
        }
        if(mxHeap.size() > 0) intervals += (n+1) - executed;
    }

    return intervals;
};