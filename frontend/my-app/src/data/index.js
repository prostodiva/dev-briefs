import { day1, day2, day3, day4 } from "../assets/images";

export const navLinks = [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "about",
        title: "About"
    },
    {
        id: "quick_tips",
        title: "Quick Tips"
    },
    {
        id: "interview_questions",
        title: "Interview Questions"
    },
    {
        id: "tutorials",
        title: "Tutorials"
    },
    {
        id: "practice",
        title: "Practice"
    },
    {
        id: "quizzes",
        title: "Quizzes"
    },
    {
        id: "challenge",
        title: "#100DaysOfCode"
    },
    {
        id: "subscribe",
        title: "Subscribe"
    }
];

export const SinglyLLInsertAtFront = [
    "create struct Node: data, next, constructor(assign data with value, next to nullptr)",
    "InsertNodeAtFront:",
    "      - create a newNode",
    "      - make this node a head(deferencing)",
    "      - now head is at the beginning",
    "PrintList:",
    "      - create a temp pointer to traverse the list from head",
    "      - traverse the list untill temp hit nullptr",
    "      - print the values",
    "      - update a nullptr when we reached the end of the list(move to the next node)",
    "Main:",
    "      - create an empty list",
    "test the functions:",
    "      - add values, print result"
];

export const SinglyLLInsertAtFrontCode = [
    "#include <string>",
    "#include <iostream>",
    "using namespace std;",
    "struct Node {",
    "  int data;",
    "  Node* next;",
    "  Node(int value) : data(value), next(nullptr) {};",
    "};",
    "void InsertNodeAtFront(Node*& head, int value) {",
    "  Node* newNode = new Node(value);",
    "  newNode->next = head;",
    "  head = newNode;",
    "}",
    "void PrintListForward(Node*& head) {",
    " Node* temp = head;",
    " while (temp != nullptr) {",
    "   cout <<temp->data << \" -> \";",
    "   temp = temp->next;",
    " }",
    " cout << \"nullptr\"<<endl;",
    "}",
    "int main() {",
    "  Node* singlyLL = nullptr;",
    "  InsertNodeAtFront(singlyLL, 1);",
    "  PrintListForward(singlyLL);",
    "  return 0;",
    "}"
];

export const SinglyLLInsertAtEnd = [
    "create struct Node: data, next, constructor(assign data with value, next to nullptr)",
    "InsertNodeAtEnd:",
    "      - create a new Node",
    "      - assign the next pointer of new Node to nullptr",
    "      - check if the list is empty",
    "      - if true, make a new Node the head, return",
    "      - if not, make a temp pointer to traverse the list from head",
    "      - loop through the list until it hit nullptr",
    "      - move to the next node",
    "      - assign the last node next with nullptr",
    "PrintListForward:",
    "      - create a temp pointer to traverse the list from head",
    "      - traverse the list untill temp hit nullptr",
    "      - print the values",
    "      - update a nullptr when we reached the end of the list(move to the next node)",
    "ReverseList:",
   "       - create a temp pointer",
   "       - assign the pointer with the same address as a head",
   "       - create prev and next pointers, assign with nullptr",
   "       - traverse the list while temp != nullptr",
   "       - assign next with pointer of temp",
   "       - assign prev with pointer of temp",
   "       - make prev a new head(point to nullptr)",
   "       - traverse the list again(opposite direction) until tem != nullptr",
   "       - print the data value",
   "       - move temp to the next node",
    "main:",
    "test the functions in main:",
    "create an empty list in main",
    "      add values from the end, print result, reverse, print again"
];

export const SinglyLLInsertAtEndCode = [
    "#include <string>",
    "#include <iostream>",
    "using namespace std;",
    "struct Node {",
    "  int data;",
    "  Node* next;",
    "  Node(int value) : data(value), next(nullptr) {};",
    "};",
    "void InsertNodeAtEnd(Node*& head, int value) {",
    "  Node* newNode = new Node(value);",
    "  newNode->next = nullptr;",
    "  if (head == nullptr) {",
    "    head = newNode;",
    "    return;",
    "  } else {",
    "    Node* temp = head;",
    "    while (temp->next != nullptr) {",
    "      temp = temp->next;",
    "    }" +
    "    temp->next = newNode;",
    "  }",
    "}",
    "void PrintListForward(Node*& head) {",
    " Node* temp = head;",
    " while (temp != nullptr) {",
    "   cout <<temp->data << \" -> \";",
    "   temp = temp->next;",
    " }",
    " cout << \"nullptr\"<<endl;",
    "}",
    "void PrintListBackwards(Node*& head) {",
    "  Node* temp = head;",
    "  Node* prev = nullptr;",
    "  Node* next = nullptr;",
    "  while (temp != nullptr) {",
    "    next = temp->next;",
    "    temp->next = prev;",
    "    prev = temp;",
    "    temp = next;",
    "  }",
    "  temp = prev;",
    "  while (temp != nullptr) {",
    "    cout << temp->data << \" -> \";",
    "    temp = temp->next;",
    "  }",
    "  cout << \"nullptr\" << endl;",
    "}",
    "int main() {",
    "  Node* singlyLL = nullptr;",
    "  InsertNodeAtFront(singlyLL, 1);",
    "  PrintListForward(singlyLL);",
    "  InsertNodeAtEnd(singlyLL, 2);",
    "  PrintListForward(singlyLL);",
    "  InsertNodeAtEnd(singlyLL, 5);",
    "  PrintListBackwards(singlyLL);",
    "  return 0;",
    "}"
];

export const SinglyLLInsertAtIndex = [
"InsertAtIndex:",
"    - if index < 0 - return. Don't work with negative indices",
"    - if index == 0 - call InsertAtFront and return",
"    - create temp node and set it to head",
"    - traverse through the linked List until we hit the node BEFORE the provided index(use a counter to track position)",
"    - if we reach end of list (temp == nullptr) before reaching index, return",
"    - create a new Node with the given value",
"    - set new node's next pointer to temp's next",
"    - set temp's next pointer to new node"
];

export const SinglyLLInsertAtIndexCode = [
"template <typename T>",
"void InsertAtIndex(Node<T>*& head, int index, T value) {",
"  if(index < 0) return;",
"  if(index == 0) {",
"    InsertNodeAtFront(head, value);",
"    return;",
"  }",
"  Node<T>* temp = head;  //a new temp pointer",
"  for(int i = 0; temp != nullptr && i < index-1; i++) {",
"    temp = temp->next; //reference to another node of nullprt",
"  }",
"  if(temp == nullptr) {",
"    return; ",
"  }",
"  Node<T>* newNode = new Node<T>(value); //create a new node",
"  newNode->next = temp->next;  //new node gets injected into linked list",
"  temp->next = newNode;  //current node now points to a new node",
"}"
];

export const SinglyLLDisplayRecursively = [
    "void DisplayForward(Node*& head) {",
    "  Node* temp = head;",
    "  if (temp != nullptr) {",
    "    cout << temp->data << \" -> \";",
    "    DisplayForward(temp->next);",
    "  }",
    "}",
    "void DisplayReversed(Node*& head) {",
    "  Node* temp = head;",
    "  if (temp != nullptr) {",
    "    DisplayReversed(temp->next);",
    "    cout << temp->data << \" -> \";",
    "  }",
    "}"
];

export const challengeData = [
    {
        day: 1,
        content: "Started the #100DaysOfCode challenge! Practiced data structures by implementing a linked list exercise. Focused on insertion operations.(InsertAtFront/Print)",
        timestamp: "2025-05-30 10:00:00",
        image: day1
    },
    {
        day: 2,
        content: "Practiced a Singly Linked List. Focused on insertion at End, and Reverse the list functions.",
        timestamp: "2025-05-31 11:00:00",
        image: day2
    },
    {
        day: 3,
        content: "Practiced a Singly Linked List. Focused on InsertAtIndex and DetectCycle functions.",
        timestamp: "2025-06-01 9:55:00",
        image: day3
    },
    {
        day: 4,
        content: "Practiced a Singly Linked List. Focused on recursive calls. Display list forward/reversed using recursion. Time and space compexity - O(n)",
        timestamp: "2025-06-2 4:00:00",
        image: day4
    }
];

export const tips = [
    {
        title: "Compile and Run on MAC Snippet",
        url: "https://snippets.cacher.io/snippet/cf974c837e412dc446b4"
    }
];