/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1Str = "";
    let atual1 = l1;
    while (atual1 !== null) {
        num1Str = String(atual1.val) + num1Str;
        atual1 = atual1.next;
    }

    let num2Str = "";
    let atual2 = l2;
    while (atual2 !== null) {
        num2Str = String(atual2.val) + num2Str; 
        atual2 = atual2.next;
    }

    let somaStr = String(BigInt(num1Str) + BigInt(num2Str));

    let resposta = [];
    for (let i = 0; i < somaStr.length; i++) {
        resposta.push(Number(somaStr[somaStr.length - 1 - i]));
    }

    let dummyHead = new ListNode(0);
    let atual = dummyHead;

    for (let i = 0; i < resposta.length; i++) {
        atual.next = new ListNode(resposta[i]);
        atual = atual.next;
    }

    return dummyHead.next;

    return resposta;
};