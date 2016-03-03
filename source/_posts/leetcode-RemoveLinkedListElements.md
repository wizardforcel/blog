---
title: leetcode 新题 RemoveLinkedListElements
categories:
  - 编程
date: 2015-04-24 22:47:00
---

leetcode上面新出了一道题，序号是203，看到后花了几分钟一次性写出来并AC了。好在难度不大，就是略有麻烦。

题目是，给定一个链表和一个值，移除所有带这个值的节点，并返回链表头。

[https://leetcode.com/problems/remove-linked-list-elements/](https://leetcode.com/problems/remove-linked-list-elements/)

<!-- more -->

这道题的难度在于：

+ 删除某个节点时候，需要把它的前向连接到它的后向。如果用一个变量保存next指针，那么通过它找不到它的前向节点。
+ 上面那个问题可以通过两种方法解决，一种是每次都操作所指向节点的后一个，另一种是保存next指针的地址。我在这里用的是后一种，可想而知二重指针操作有些费劲。
+ 删除节点的时候，要判断他是不是head。

代码（该注释的都注释了）：

<pre>
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) 
    {
        // p保存head或者next的地址
        ListNode **p = &head;
        while(*p)
        {
            // tmp变量缓存当前的next指针
            ListNode *tmp = *p;
            if(tmp->val == val)
            {
                // 节点需要移除的情况
                // 首先把*p的前向连接到后向
                *p = (*p)->next;
                // 如果要删的是head，把head往后挪一个
                if(tmp == head)
                    head = *p;
                delete tmp;
            }
            else
                // 节点不需要移除，则把*p往后挪一个
                p = &((*p)->next);
        }
        return head;
        
    }
};
</pre>