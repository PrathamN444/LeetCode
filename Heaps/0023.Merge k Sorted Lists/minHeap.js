/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeaps{
    constructor(){
        this.heap = [];
    }

    insert(val){
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

    returnLinkedList(){
        let dummy = new ListNode(0);
        let current = dummy;
        while(this.heap.length > 0){
            current.next = new ListNode(this.peek());
            current = current.next;
            this.remove();
        }
        return dummy.next;
    }
}

var mergeKLists = function(lists) {
    // time complexity = O(n.logn)
    // space complexity = O(n) for values array
    const values = new MinHeaps();
    for(let list of lists){
        while(list !== null){
            values.insert(list.val);
            list = list.next;
        }
    }
    return values.returnLinkedList();
};