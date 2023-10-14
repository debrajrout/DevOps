//This code explains with a example how to reverse a Linked List
public class reverselinked {
    static Node head;
   static class Node{
 
int data;
Node next;
Node(int root){
    data=root;
    next=null;
}

} 
 public static void traverse(Node root){
    while(root!=null){
        System.out.println(root.data);
        root=root.next;
    }
 }
 public static Node reverse(Node root){
   
    Node prev = null;
    Node curr=root;
    
    while(curr!=null){
       Node  nnext=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nnext;
        
        

    }
    root =prev;
    return root;
    

    

    

    
 }
 public static void main(String args[]){
    reverselinked List = new reverselinked();
  List.head = new Node(1);
  List.head.next=  new Node(2);
  List.head.next.next = new Node(3);
  head=reverse(head);
  traverse(head);
  

    
    

 }   
    
}
