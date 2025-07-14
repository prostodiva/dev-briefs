import { day1, day10, day11, day12, day13, day14, day15, day2, day3, day4, day5, day6, day7, day8, day9, day16, day19, day20, day21, day22, day23, day24, day25} from "../assets/images";

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
    }
];

export const SinglyLLInsertAtFront = [
    "create struct Node: data, next, constructor(assign data with value, next to nullptr)",
    "InsertNodeAtFront:",
    "      - create a newNode",
    "      - point newNode's next to head",
    "      - update head to point to newNode",
    "PrintList:",
    "      - create a temp pointer to traverse the list from head",
    "      - traverse the list until temp hits nullptr",
    "      - print the values",
    "      - move temp pointer forward",
    "DeleteList:",
    "      - traverse head till the end",
    "      - create temp pointer, assign with a head",
    "      - move head forward",
    "      - delete temp",
    "      - update head with nullptr",
    "Main:",
    "      - create an empty list and initialize it with nullptr",
    "      - add values, print result",
    "      - deallocate the list"
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
    "void DeleteList(Node*& head) {",
    "  while(head != nullptr) {",
    "    Node* temp = head;",
    "    head = head->next;",
    "    delete temp;",
    "  }",
    "  head = nullptr;  // ← This modifies the original head",
    "}",
    "int main() {",
    "  Node* singlyLL = nullptr;",
    "  InsertNodeAtFront(singlyLL, 1);",
    "  PrintListForward(singlyLL);",
    "  DeleteList(singlyLL);",
    "  singlyLL = nullptr;",
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
    "Test the functions in main:",
    "Create an empty list in main",
    "      add values from the end, print result, reverse, print again",
    "DeleteList",
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
    "void DeleteList(Node*& head) {",
    "  while(head != nullptr) {",
    "    Node* temp = head;",
    "    head = head->next;",
    "    delete temp;",
    "  }",
    "  head = nullptr;  // ← This modifies the original head",
    "}",
    "int main() {",
    "  Node* singlyLL = nullptr;",
    "  InsertNodeAtFront(singlyLL, 1);",
    "  PrintListForward(singlyLL);",
    "  InsertNodeAtEnd(singlyLL, 2);",
    "  PrintListForward(singlyLL);",
    "  InsertNodeAtEnd(singlyLL, 5);",
    "  PrintListBackwards(singlyLL);",
    "  DeleteList(singlyLL);",
    "  return 0;",
    "}"
];

export const SinglyLLInsertAtIndex = [
"InsertAtIndex:",
"    - if index < 0 - return. Don't work with negative indexes",
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
    },
    {
        day: 5,
        content: "Added snippet to the tips section. Setup a basic full-stack project with react, vite, express.",
        timestamp: "2025-06-03 11:00:00",
        image: day5
    },
    {
        day: 6,
        content: "Practiced Linear Search + FindMax Key in a Linked List. (with while and recursively). Solved hackerrank PlusMinus Problem. ",
        timestamp: "2025-06-04 9:22:00",
        image: day6
    },
    {
        day: 7,
        content: "Solved hackerrank Min Max Sum problem using sort(arr.begin(), arr.end())",
        timestamp: "2025-06-05 6:00:00",
        image: day7
    },
    {
        day: 8,
        content: "Solved hackerrank problem. Time conversion: from 12-hour format to 24-hour format. ",
        timestamp: "2025-06-06 10:14:00",
        image: day8
    },
    {
        day: 9,
        content: "Add Data Structures Card to dev-briefs project for practicing the Interview Questions.",
        timestamp: "2025-06-09 8:05:00",
        image: day9
    },
    {
        day: 10,
        content: "Setup a SOG project with docker. Practice git commands to switch branches for team collaboration",
        timestamp: "2025-06-10 7:22:00",
        image: day10
    },
    {
        day: 11,
        content: "Was assigned to be a team lead for a volunteer web-app project. Practiced assign tasks to a team (frontend and backend)",
        timestamp: "2025-06-11 10:05:00",
        image: day11
    },
    {
        day: 12,
        content: "Add Tutorials scrolling feature on the dev-briefs. Add Quick Tips",
        timestamp: "2025-06-12 10:28:00",
        image: day12
    },
    {
        day: 13,
        content: "Practiced DeleteNode and InsertInSortedList functions in Singly Linked List",
        timestamp: "2025-06-13 9:22:00",
        image: day13
    },
    {
        day: 14,
        content: "Practiced CheckIfListIsSorted and RemoveDuplicates from a Linked List",
        timestamp: "2025-06-14 9:00:00",
        image: day14
    },
    {
        day: 15,
        content: "Practiced Reverse List with Sliding three pointers && Append two lists",
        timestamp: "2025-06-15 11:00:00",
        image: day15
    },
    {
        day: 16,
        content: "Whiteboard Interview Practice",
        timestamp: "2025-06-16 11:00:00",
        image: day16
    },
    {
        day: 17,
        content: "Whiteboard Interview Practice",
        timestamp: "2025-06-17 10:00:00",
    },
    {
        day: 18,
        content: "Whiteboard Interview Practice(Find min/max\n" +
            "Check if list is sorted\n" +
            "Insert in Sorted List\n" +
            "Remove dublicates from sorted linked list(check for false)\n" +
            "Append two lists\n" +
            "Search a Key and move at front)",
        timestamp: "2025-06-18 10:00:00",
    },
    {
        day: 19,
        content: "Merge two sorted Linked Lists(combine)",
        timestamp: "2025-06-19 10:00:00",
        image: day19
    },
    {
        day: 20,
        content: "Practice get Intersection Node (Singly-linked List). LeetCodeProblem",
        timestamp: "2025-06-20 10:00:00",
        image: day20
    },
    {
        day: 21,
        content: "Practice the difference between remove dups in sorted vs unsorted lists.",
        timestamp: "2025-06-21 10:00:00",
        image: day21
    },
    {
        day: 22,
        content: "Practice whiteboard interview questions",
        timestamp: "2025-06-23 10:00:00",
        image: day22
    },
    {
        day: 23,
        content: "Practice str reversal && simple calc impl. in C++",
        timestamp: "2025-06-26 10:00:00",
        image: day23
    },
    {
        day: 24,
        content: "Practice isPalindrome function in Google Docs.",
        timestamp: "2025-07-09 7:00:00",
        image: day24
    },
    {
        day: 25,
        content: "Practice a Circular Linked List(Create Print, CleanUp)",
        timestamp: "2025-07-13 7:00:00",
        image: day25
    }
];

export const tips = [
    {
        title: "Compile and Run on MAC Snippet",
        url: "https://snippets.cacher.io/snippet/cf974c837e412dc446b4"
    },
    {
        title: "A full-Stack Project. Basic setup instructions. ",
        url: "https://snippets.cacher.io/snippet/26b106e2032386165e59"
    },
    {
        title: "Git Manipulations",
        url: "https://snippets.cacher.io/snippet/34f2e3974f576f7a9d75"
    },
    {
        title: "Setup a Full-Stack App with Docker",
        url: "https://snippets.cacher.io/snippet/9ae78b50bcdaaba8fceb"
    },
    {
        title: "Video Scrolling Feature",
        url: "https://snippets.cacher.io/snippet/d228ca0edf81692f23c1"
    }
];

export const questions = [
    {
        question: "Explain what an API endpoint is?",
        answer: "An API endpoint is a specific URL that acts as an entry point into a specific service or a functionality within a service.\n" +
                "\n" +
                "Through an API endpoint, client applications can interact with the server sending requests (sometimes even with data in the form of payload) and receive a response from it.\n" +
                "\n" +
                "Usually, each endpoint can be mapped to a single feature inside the server.",
        category: "Backend"
    },
    {
        question: "Can you explain the difference between SQL and NoSQL databases?",
        answer: "SQL databases (or relational databases as they're also known) rely on a predefined schema (or structure) for their data. Whenever you describe a record, or table inside the database, you do so through its format (name and fields).\n" +
                "\n" +
                "In NoSQL databases, there is no schema, so there is no predefined structure to the data. You usually have collections of records that are not obligated to have the same structure, even if they represent conceptually the same thing.",
        category: "Backend"
    },
    {
        question: "What's the base of the log?",
        answer: "Logs of different bases are only off by a constant factor. For this reason, we ignore what the base of a log within a big O expression. It doesn't matter since we drop constants.",
        category: "Data Structure"
    },
    {
        question: "What is a Linked List and what are its advantages?",
        answer: "A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.\n\n" +
                "Advantages:\n" +
                "1. Dynamic size - can grow or shrink as needed\n" +
                "2. Efficient insertions and deletions - O(1) at the beginning\n" +
                "3. No wasted memory - only allocates space for elements that are actually stored\n" +
                "4. No need to pre-allocate space",
        category: "Data Structure"
    },
    {
        question: "What is the time complexity of searching in a Binary Search Tree?",
        answer: "The time complexity of searching in a Binary Search Tree (BST) is O(h), where h is the height of the tree.\n\n" +
                "In a balanced BST (like AVL or Red-Black trees), the height is O(log n), making search operations O(log n).\n\n" +
                "However, in the worst case (when the tree becomes a linear chain), the height becomes O(n), making search operations O(n).",
        category: "Data Structure"
    },
    {
        question: "What is the difference between a Stack and a Queue?",
        answer: "Stack and Queue are both linear data structures, but they differ in how elements are accessed:\n\n" +
                "Stack:\n" +
                "- LIFO (Last In First Out) structure\n" +
                "- Elements are added and removed from the same end (top)\n" +
                "- Common operations: push, pop, peek\n\n" +
                "Queue:\n" +
                "- FIFO (First In First Out) structure\n" +
                "- Elements are added at one end (rear) and removed from the other end (front)\n" +
                "- Common operations: enqueue, dequeue, peek",
        category: "Data Structure"
    }
];

export const exercises = [
    {
        id: 1,
        title: "InsertAtFront/Display Pseudocode Exercise",
        description: "Create and Display Singly Linked List. Insert Nodes At Front.",
        type: "pseudocode",
        data: SinglyLLInsertAtFront
    },
    {
        id: 2,
        title: "InsertAtFront/Display Code Exercise",
        description: "Create and Display Singly Linked List. Insert Nodes At Front.",
        type: "code",
        data: SinglyLLInsertAtFrontCode
    },
    {
        id: 3,
        title: "InsertAtEnd/Reverse Pseudocode Exercise",
        description: "Insert Node At End of Linked List and display in reverse order",
        type: "pseudocode",
        data: SinglyLLInsertAtEnd
    },
    {
        id: 4,
        title: "InsertAtEnd/Reverse Code Exercise",
        description: "Insert Node At End of Linked List and display in reverse order",
        type: "code",
        data: SinglyLLInsertAtEndCode
    },
    {
        id: 5,
        title: "InsertAtIndex Function Pseudocode Exercise",
        description: "Create a Function to insert node at Nth index",
        type: "pseudocode",
        data: SinglyLLInsertAtIndex
    },
    {
        id: 6,
        title: "InsertAtIndex Code Exercise",
        description: "Using a template create: InsertAtFront/InsertAtIndex/Print Code Exercise",
        type: "code",
        data: SinglyLLInsertAtIndexCode
    },
    {
        id: 7,
        title: "Display Linked List forward and in reversed order, using recursion",
        type: "code",
        data: SinglyLLDisplayRecursively
    }
];

export const video = [
    {
        id: 1,
        title: "InsertAtFront, PrintList.",
        category: "Singly Linked List",
        src: "https://www.youtube.com/embed/94INxxBhz0g"
    },
    {
        id: 2,
        title: "InsertAtBack, ReverseList.",
        category: "Singly Linked List",
        src: "https://www.youtube.com/embed/AIAhIu0lqnw"
    },
    {
        id: 3,
        title: "InsertAtIndex.",
        category: "Singly Linked List",
        src: "https://www.youtube.com/embed/jtvX2VcWw4A"
    },
    {
        id: 4,
        title: "Search and Move to Front in a Sorted Linked List",
        category: "Singly Linked List",
        src:"https://www.youtube.com/embed/1A5Xn2YBeek"
    },
    {
        id: 5,
        title: "Insert a Node in a Sorted Linked List",
        category: "Singly Linked List",
        src: "https://www.youtube.com/embed/IDblyEv--kc"
    },
    {
        id: 6,
        title: "Delete a Node in a Sorted Linked List",
        category: "Singly Linked List",
        src: "https://www.youtube.com/embed/jYcNJff2Iyc"
    },
    {
        id: 7,
        title: "Check If a Singly Linked List Is Sorted ",
        category: "Singly Linked List",
        src: "https://www.youtube.com/embed/ppCDmiLTJHw"
    },
    {
        id: 8,
        title: "Check if a Singly Linked List Is Palindrome",
        category: "Singly Linked List",
        src: "https://www.youtube.com/embed/eU6lU8hErfQ"
    }
];

export const whiteBoard = [
    {
        id: 1,
        title: "Whiteboard Interview Practice: Singly Linked List in C++ | Insert Front, Insert End, and Print",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/hOZT8kxD_OU"
    },
    {
        id: 2,
        title: "Reverse a Singly Linked List in C++ | Sliding Pointers Technique Explained",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/_QiePSgqr3w"
    },
    {
        id: 3,
        title: "InsertAtIndex.",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/im0p1v6uwBM"
    },
    {
        id: 4,
        title: "Whiteboard Interview Practice: Delete Node from Front & Specific Position | Singly Linked List in C++",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/NQVGv9pl1LA"
    },
    {
        id: 5,
        title: "Whiteboard Interview Practice: Find Min/Max in a Singly-Linked List",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/XX45rK0DrNE"
    },
    {
        id: 6,
        title: "Whiteboard Interview Practice: Insert a Node into a Sorted Singly Linked List",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/HG-1XNkAiSY"
    },
    {
        id: 7,
        title: "Whiteboard Interview Practice: Search & Move-to-Front in a Singly Linked List (C++)",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/sOs3pU-HsLU"
    },
    {
        id: 8,
        title: "Whiteboard Interview Practice: Check if a Singly Linked List is Sorted (C++)",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/8nVMgUOQq-4"
    },
    {
        id: 9,
        title: "Whiteboard Interview Practice: Append Two Singly Linked Lists in C++",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/AhwBObNCODw"
    },
    {
        id: 10,
        title: "Whiteboard Interview Practice: Merge Two Unsorted Singly Linked Lists in C++",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/whU-LsN8qMI"
    },
    {
        id: 11,
        title: "Whiteboard Interview Practice: Detect a Loop in a Singly Linked List (C++)",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/TIHFvg05O7M"
    },
    {
        id: 12,
        title: "Whiteboard Interview Practice: Find the Intersection Node of Two Singly Linked Lists (C++)",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/X0bBqSXQgqQ"
    },
    {
        id: 13,
        title: "Remove Duplicates from Sorted Linked List | C++",
        category: "Whiteboard",
        src: "https://www.youtube.com/embed/RQrRi0kYgQ4"
    }
    ];