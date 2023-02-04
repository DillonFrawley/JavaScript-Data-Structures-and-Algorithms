/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//  runtime 76ms, beats 72.49%, memory 44mb, beats 77.15%
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let list = new ListNode();
  let head = list;
  while (list1 !== null && list2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (list1.val < list2.val) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    list = list.next;
  }
  list.next = list1 != null ? list1 : list.next;
  list.next = list2 != null ? list2 : list.next;
  return head.next;
};
