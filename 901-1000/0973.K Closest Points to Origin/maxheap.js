/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

class MaxHeaps{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        let idx = this.heap.length - 1;
        while(idx > 0){
            const parentIdx = Math.floor((idx-1)/2);
            if(this.heap[parentIdx][0] >= this.heap[idx][0]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    remove(){
        if(this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        let idx = 0;
        while(true){
            const left = (2*idx)+1;
            const right = (2*idx)+2;
            let largest = idx;
            if(left < this.heap.length && this.heap[left][0] > this.heap[largest][0]){
                largest = left;
            }
            if(right < this.heap.length && this.heap[right][0] > this.heap[largest][0]){
                largest = right;
            }
            if(largest === idx) break;
            [this.heap[largest], this.heap[idx]] = [this.heap[idx], this.heap[largest]];
            idx = largest;
        }
        return root;
    }

    size(){
        return this.heap.length;
    }

    returnCoordinates(){
        return this.heap.map(hp => hp[1]);
    }
}

var kClosest = function(points, k) { 
    // time complexity = O(n.logk)
    // space complexity = O(k)
    const heap = new MaxHeaps();
    for(let i=0; i<points.length; i++){
        const distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);
        heap.insert([distance, points[i]]);
        if(heap.size() > k) heap.remove();
    }
    return heap.returnCoordinates();
};