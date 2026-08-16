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
var mergeKLists = function(lists) {
    // time complexity = O(n.k + n.logn + n) = O(n.logn)
    // space complexity = O(n) for values array
    const values = [];
    for(let list of lists){
        while(list !== null){
            values.push(list.val);
            list = list.next;
        }
    }
    values.sort((a,b) => a-b);
    let dummy = new ListNode(0);
    let current = dummy;
    for(let val of values){
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};