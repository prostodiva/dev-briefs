import { day36,day35,day34, day33, day32, day31, day30,day29,day28, day1, day10, day11, day12, day13, day14, day15, day2, day3, day4, day5, day6, day7, day8, day9, day16, day19, day20, day21, day22, day23, day24, day25, day26, day27} from "../assets/images";

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
    "void PrintListForward(Node* head) {",
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
    "      - loop through the list until it hits nullptr",
    "      - move to the next node",
    "      - assign the last node next with nullptr",
    "PrintListForward:",
    "      - create a temp pointer to traverse the list from head",
    "      - traverse the list untill temp hit nullptr",
    "      - print the values",
    "      - update a nullptr when we reached the end of the list(move to the next node)",
    "ReverseList:",
   "       - create a next pointer, assign with a head",
   "       - create prev and temp pointers, assign with nullptr",
   "       - traverse the list while next != nullptr",
   "       - move three pointers forward",
   "       - relink the middle pointer - reverse (temp->next to prev)",
   "       - make temp a new head",
    "      - traverse again(in opposite direction using temp)",
    "      - print the values",
    "DeleteList:",
    "      - traverse head till the end",
    "      - create temp pointer, assign with a head",
    "      - move head forward",
    "      - delete temp",
    "      - update head with nullptr",
    "main:",
    "Create an empty list in main",
    "      add values from the end, print result, reverse, print again",
    "DeleteList"
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
    "void PrintListForward(Node* head) {",
    " Node* temp = head;",
    " while (temp != nullptr) {",
    "   cout <<temp->data << \" -> \";",
    "   temp = temp->next;",
    " }",
    " cout << \"nullptr\"<<endl;",
    "}",
    "void PrintListBackwards(Node* head) {",
    "  Node* next = head;",
    "  Node* prev = nullptr;",
    "  Node* temp = nullptr;",
    "  while (next != nullptr) {",
    "    prev = temp;",
    "    temp = next;",
    "    next = next->next;",
    "    temp->next = prev",
    "  }",
    "  head = temp;",
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

export const FindMinMaxPseudocode = [
    "1.Find max:",
    " - create a reference variable x with min int value: -32768",
    " - 1.create temp pointer, assign with a head",
    " - 1.traverse temp through the list until the end",
    " - if temp->data > x, assign x with a new value",
    " - 1.if not, move temp to the next node",
    " - 1.print x",
    "2.Find min:",
    " - create a reference variable x with max int value: 32768",
    " - 2.create temp pointer, assign with a head",
    " - 2.traverse temp through the list until the end",
    " - if temp->data < x, assign x with a new value",
    " - 2.if not, move temp to the next node",
    " - 2.print x",
];

export const FindMinMaxCode = [
    "void FindMax(Node* head) { ",
    "   int x = -32768;",
    "   Node* temp = head;      //first func",
    "   while(temp != nullptr) {    //first func",
        "   if (temp->data > x) {",
        "       x = temp->data;     //first func",
        "   }",
        "temp = temp->next;     //first func",
    "   }",
    "   cout << x <<endl;       //first func",
    "}",
    "void FindMin(Node* head) {",
    "   int x = 32768;",
    "   Node* temp = head;",
    "   while(temp != nullptr) {",
    "   if (temp->data < x) {",
    "       x = temp->data;",
    "   }",
    "temp = temp->next;",
    "   }",
    "   cout << x <<endl;",
    "}"
];

export const InsertInSortedListPseudocode = [
    "InsertInSortedList In Sorted position:",
    "if the list is empty, insertAtFront, return",
    "handle the case if key is less than data in the first node:" +
    "   - InsertAtFront, return",
    "otherwise:",
    "   - create two pointers: prev(start with nullptr), temp(start with head)",
    "   - traverse the list with temp until the end && temp->data < key",
    "   - move both pointers forward",
    "at this point we found the correct position to insert a new node",
    "   - create a new node",
    "   - connect prev's next with new Node",
    "   - connect new Node's next with temp's",
];

export const InsertInSortedListCode = [
    "void InsertInSortedList(Node*& head, int key) {\n",
    "  if (head == nullptr) {\n",
    "    InsertAtFront(head, key); return; //1",
    "  }\n",
    "  if (key < temp->data) {\n",
    "    InsertAtFront(head, key); return;\n",
    "  }\n",
    "  Node* prev = nullptr;\n",
    "  Node* temp = head;\n",
    "  while (temp != nullptr && temp->data < key) {\n",
    "    prev = temp;\n",
    "    temp = temp->next;\n",
    "  }\n",
    "  Node* newNode = new Node(key);\n",
    "  prev->next = newNode;\n",
    "  newNode->next = temp;\n",
    "}"
];

export const SearchKeyAndMovePseudocode = [
    "SearchKeyAndMove:",
    "   check if the list is empty",
    "   - create two pointers(prev, temp)",
    "   - traverse through the list with temp",
    "   if the key is found:",
    "       - relink prev's next to temp's next",
    "       - relink temp's next to head(making this node a new head)",
    "   otherwise: - move both pointers forward",
    "   return head"
];

export const SearchKeyAndMoveCode = [
    "Node* SearchKeyAndMove(Node*& head, int key) {",
    "   if (head == nullptr) return nullptr;",
    "   Node* temp = head;",
    "   Node* prev = nullptr",
    "   while(temp != nullptr) {",
    "       if (key == temp->data) {",
    "           prev->next = temp->next;",
    "           temp->next = head;",
    "           head = temp;",
    "       }",
            "prev = temp;",
            "temp = temp->next;",
    "   }",
    "   return head;",
    "}",
];

export const DeleteNodePseudocode = [
    "DeleteNode:",
    "   - create two pointers(prev, temp)",
    "create a flag to track if the deletion was occurred(-1)",
    "check if the list is empty",
    "check if it is first node to delete(pos 1)",
    "move head, save value, delete temp",
    "deleteAtPosition: use for loop to find the place",
    "move pointers forward",
    "if temp is not at the end:",
    "- relink prev's next",
    "- save data",
    "delete temp",
    "return saved value"
];

export const DeleteNodeCode = [
    "int DeleteNode(Node*& head, int position) {",
    "   Node* prev = nullptr;",
    "   Node* temp = head;",
    "   int x = -1;",
    "   if (head == nullptr) return x;",
    "   if (position == 1) {",
    "       head = head->next;",
    "       x = temp->data;",
    "       delete temp;",
    "   }",
    "   for (int i = 0; i < position - 1; i++) {",
    "       prev = temp;",
    "       temp = temp->next;",
    "   }",
    "   prev->next = temp->next;",
    "   x = temp->data;",
    "   delete temp;",
    "}",
    "return x;",
    "}"
];

export const CheckIfSortedPseudocode = [
    "CheckIfSorted:",
    "   - create temp",
    "   - create reference var(-32768)",
    "   - traverse through the list with temp",
    "       - check if data is less than ref var - if so, the list is unsorted",
    "   - save data into x",
    "   - move temp forward",
    "   - return true"
];

export const CheckIfSortedCode = [
    "bool isSorted(Node* head) {",
    "   Node* temp = head; ",
    "   int x = -32768;",
    "   while (temp != nullptr) {",
    "       if (temp->data < x) {",
    "           return false;",
    "       }",
    "       x = temp->next;",
    "       temp = temp->next;",
        "}",
    "return true;",
    "}"
];

export const RemoveDuplicatesFromSortedListPseudocode = [
    "RemoveDupsFromSortedList:",
    "check if list is empty",
"create two pointers(prev starts from head, temp from head next)",
"traverse until temp != nullptr",
"compare the data and move pointers forward if not equal",
"if equal - delete the second node(relink prev->next to temp->next)",
"delete temp",
"reassign temp with prev's next",
"return head"
];

export const RemoveDuplicatesFromSortedCode = [
    "Node* RemoveDups(Node*& head) {",
    "   if (head == nullptr) return nullptr;",
    "   Node* prev = head;",
    "   Node* temp = head->next;",
    "   while (temp != nullptr) {",
    "       if (prev->data != temp->data) {",
    "           prev = temp;",
    "           temp = temp->next;",
    "       } else {",
    "           prev->next = temp->next;",
    "           delete temp;",
    "           temp = prev->next;",
    "       }",
    "   }",
    "return head",
    "}"
];

export const RemoveDuplicatesFromUnSortedListPseudocode = [
    "RemoveDupsFromUnSortedList:",
    "- check if list is empty",
    "- create outer pointer, assign with a head",
    "- traverse outer until the end of the list",
    "       - create inner pointer, assign with an outer",
    "       traverse inner->next until the end",
    "           - compare outer data with inner next data",
    "               - if equals, create temp, move inner->next, delete temp",
    "           else: move inner forward",
    "move outer forward",
    "return head"
];

export const RemoveDuplicatesFromUnSortedCode = [
    "Node* RemoveDups(Node*& head) {",
    "   if (head == nullptr) return nullptr;",
    "   Node* outer = head;",
    "   while (outer != nullptr) {",
    "       Node* inner = outer;",
    "       while (inner->next != nullptr) {",
    "           if (outer->data == inner->next->data) {",
    "               Node* temp = inner->next;",
    "               inner->next = inner->next->next;",
    "               delete temp;",
    "           } else {",
    "               inner = inner->next;",
    "           }",
    "       }",
    "   outer = outer->next;",
    "   }",
    "return head",
    "}",
];

export const DetectALoopPseudocode = [
    "hasCycle:",
    "- check if list is empty(an empty list doesn't have cycle)",
    "- create two pointers(slow, fast). start with head",
    "traverse until fast && fast->next",
    "move pointers forward",
    "compare pointers. if met - return true, otherwise - false",
];
export const DetectALoopCode = [
    "bool HasCycle(Node* head) {",
    "   if (head == nullptr) return false;",
    "   Node* slow = head;",
    "   Node* fast = head;",
    "   while (fast != nullptr && fast->next != nullptr) {",
    "       slow = slow->next;",
    "       fast = fast->next->next;",
    "       if (slow == fast) {",
    "           return true;",
    "       }",
    "   return false;",
    "   }",
    "}"
];

export const SumListPseudocode = [];
export const SumListCode = [];

export const FindMiddlePseudocode = [
    "findMiddleNode:",
    "   check if the list is empty",
    "   create two pointers(slow,fast)",
    "   traverse both until fast->next and fast->next->next !- nullptr",
    "   when it is - return slow",
];
export const FindMiddleCodeCode = [
    "Node* FindMiddleNode(Node* head) {",
    "   if (head == nullptr) return nullptr;",
    "   Node* slow = head;",
    "   Node* fast = head;",
    "   while (fast->next != nullptr && fast->next->next != nullptr) {",
    "       slow = slow->next;",
    "       fast = fast->next->next;",
    "   }",
    "return slow;",
    "}",
];

export const AppendListsPseudocode = [

];

export const AppendListCode = [

];

export const MergeSortedListPseudocode = [

];

export const MergeSortedListsCode = [

];

export const GetIntersectionNodePseudocode = [];

export const GetIntersectionNodeCode = [];

export const IsPalindromePseudocode = [];

export const IsPalindromeCode = [];


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
    },
    {
        day: 26,
        content: "Practice a Circular Linked List: InsertAtFront/atPosition",
        timestamp: "2025-07-14 3:00:00",
        image: day26
    },
    {
        day: 27,
        content: "Practice identifying Error in C++ programs. Debug with lldb on MAC. Add reference snippet.",
        timestamp: "2025-07-15 7:00:00",
        image: day27
    },
    {
        day: 28,
        content: "Practiced modular programming(coffeeShop); Understood the difference between static and instance variables; Used modern C++ Features: constexpr",
        timestamp: "2025-07-16 9:00:00",
        image: day28
    },
    {
        day: 29,
        content: "Worked on NFT Marketplace projects. Fixed several bugs, and practiced debugging with lldb.",
        timestamp: "2025-07-18 10:00:00",
        image: day29
    },
    {
        day: 30,
        content: "Practiced InsertNode in DoublyLL. Successfully set up a C++ backend environment for a task management system using Crow framework, including installing and configuring all necessary dependencies (Boost, spdlog, fmt, libpq) and creating a functional Makefile with sanitizer support. Designed and implemented comprehensive class headers for the core entities: created a custom V template class as a vector replacement with full memory management, built a complete User class with project/team relationships and authentication methods, developed a comprehensive Task class with file/comment/tag management and status workflow, and designed a Project class with member/task collections and access control. Established proper C++ development practices including header guards, const correctness, proper parameter passing with references, constructor initialization lists, enum classes for status management, and organized the codebase with clear separation between declarations (headers) and implementations (source files) while maintaining consistent naming conventions and project structure.",
        timestamp: "2025-07-19 6:00:00",
        image: day30
    },
    {
        day: 31,
        content: "Task Management Project: Add logging script; implement the constructors for user.",
        timestamp: "2025-07-23 6:30:00",
        image: day31
    },
    {
        day: 32,
        content: "Implemented task.cpp tor Task Management Project. Add UML Diagrams",
        timestamp: "2025-07-24 10:30:00",
        image: day32
    },
    {
        day: 33,
        content: "Created a modern fullstack application template featuring a React 19 + TypeScript + Vite frontend with Tailwind CSS for styling, ESLint/Prettier for code quality, and a Node.js + Express backend with MongoDB database integration using Mongoose ODM. The template includes CORS configuration, error handling middleware, JWT authentication setup, and comprehensive development tools with hot reloading. It's structured as a monorepo with separate frontend/backend directories, includes detailed README documentation with setup instructions, and is production-ready with proper environment variable support, making it perfect for building scalable web applications with modern development practices.",
        timestamp: "2025-07-25 2:30:00",
        image: day33
    },
    {
        day: 34,
        content: "Practice: created dual-backend(auth and proxy; main-backend) with NodeJs, express, JavaScript. + Postgres db.",
        timestamp: "2025-07-28 2:30:00",
        image: day34
    },
    {
        day: 35,
        content: "Setup a Frontend React project with required libraries. Created login, registration components; Set up API with Axios; Optimized performance.",
        timestamp: "2025-07-29 7:30:00",
        image: day35
    },
    {
        day: 36,
        content: "TanStack Router: File-based routing with lazy loading (/past route); TanStack Query: Fetches paginated past orders with 30-second cache; Fetches individual order details with 24-hour cache; Handles loading states for both queries; Modal System: Portal-based modal implementation; Clean DOM management with useEffect; Conditional rendering based on focusedOrder state",
        timestamp: "2025-07-30 6:00:00",
        image: day36
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
    },
    {
        title: "Debugging C++ on MAC(lldb)",
        url: "https://snippets.cacher.io/snippet/9878b6b681577ab2d235"
    },
    {
        title: "Development Logs",
        url: "https://snippets.cacher.io/snippet/cc81c42291fc04cd6cc4"
    },
    {
        title: "JavaScript vs TypeScript",
        url: "https://snippets.cacher.io/snippet/c7f6bcf78fc2131a35e7"
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
    },
    {
        question: "How do you architect a layered application?",
        answer: "I separate the application into layers - presentation for UI, business logic for rules, and data access for database operations - with each layer having one responsibility and communicating through interfaces. ",
        category: "Full-Stack"
    },
    {
        question: "Walk me through the process of creating a web page from scratch",
        answer: "I will start with going through the requirements. If the project requires a backend implementation I would start with building UML diagrams. If it is only static page I would start with a wireframe and design in Figma. After that I would create a new repo a github,  setup a simple structure, and install all required libraries and dependencies like React, Vite. I would also add a logging script to make sure I track errors for debugging.",
        category: "Full-Stack",
    },
    {
        question: "What user interface and security principles do you consider when building a website or online application",
        answer: "For UI principles, I make sure the website looks good and is easy to use by keeping the design simple and consistent, making sure it works on phones and on computers, and adding clear buttons and menus so users know where to click.\n" +
            "For security, I use JWT tokens for authentication to keep users logged in securely, validate user inputs to prevent bad data, and make sure only the right people can access different parts of the app by checking their JWT token permissions and using HTTPS to keep the data safe.\n",
        category: "Full-Stack"
    },
    {
        question: "Explain how a REST API works.",
        answer: "REST APIs work by using HTTP methods for CRUD operations (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs, where GET retrieves data, POST creates new resources, PUT updates existing resources, and DELETE removes resources, with each request being stateless and containing all necessary information for the server to process it. The API returns data in formats like JSON , and uses standard HTTP status codes (200 for success, 404 for not found, 500 for server error) to communicate the result of each operation.",
        category: "Full-Stack"
    },
    {
        question: "How do you secure an API?",
        answer: "I secure an API by implementing authentication using JWT tokens, validating and sanitizing all inputs to prevent injection attacks, using HTTPS encryption for data transmission, setting up proper CORS policies, implementing rate limiting to prevent abuse, using security headers , and regularly updating dependencies and monitoring for vulnerabilities.",
        category: "Full-Stack"
    },
    {
        question: "What happens when a user logs in? ",
        answer: "When a user logs in, the server validates their credentials (username/password) against the database, and if valid, creates a session or generates a JWT token containing user information and permissions, which is then sent back to the client and stored (usually in localStorage, sessionStorage, or cookies) so the client can include this token in subsequent API requests to prove the user is authenticated and access protected resources.",
        category: "Full-Stack"
    },
    {
        question: "How do you handle bugs or failed deployments?",
        answer: "I handle bugs and failed deployments by first quickly rolling back to the previous working version, then investigating the issue using logs tools to identify the root cause, fixing the bug in a separate branch, testing, and deploying again with proper monitoring to ensure the issue is resolved while documenting what went wrong to prevent similar problems in the future.",
        category: "Full-Stack"
    },
    {
        question: "How do you check other people code for bugs",
        answer: "I would use analytic tools like Eslint, that could catch syntax issues and potential bugs.\n" +
            "Also, I could review the structure of the projects and read a code line by line to understand the flow.\n" +
            "I would use a testing approach - Check if individual functions work correctly.\n" +
            "I would add  logging/print statements to trace execution flow.\n" +
            "I would use git to track recent changes\n",
        category: "Full-Stack"
    },
    {
        question: "Tell me about yourself.",
        answer: "My name is Margarita, but I go by Rita.  I’m currently a Computer Science and Web Development student at GCC and Saddleback College, specializing in full-stack development. Starting this fall, I will begin working as a CS tutor, which I’m excited about as an opportunity to both learn and help others. I’ve built several projects using React, Node.js, and JavaScript, and I’m passionate about AI and automation and I am excited about the opportunity to contribute in that field. ",
        category: "Basic"
    },
    {
        question: "What do you know about the company?",
        answer: "___ is an AI-powered platform that helps real estate professionals automate sales and customer communication through AI assistants, improving efficiency and responsiveness across channels like chat, text, and email.",
        category: "Basic"
    },
    {
        question: "How your skills align with our mission.",
        answer: "With experience building full-stack web projects across different environments and a strong dedication to continuous learning, I’m confident I can contribute to ___’s mission of empowering real estate professionals through scalable, intelligent automation.",
        category: "Basic"
    },
    {
        question: "What do you like to do outside of work?",
        answer: "I enjoy listening to CS podcasts, working on my developer blog, I also like going to the ocean, dance, because I am a professional dancer in the past.",
        category: "Basic"
    },
    {
        question: "Describe your most recent development project.",
        answer: "Over the past two weeks, I’ve worked on multiple projects, including a C++ full-stack Task Management System with advanced features for managing users, teams, and projects. Currently, I’m developing a full-stack web application that integrates AI tools, allowing me to combine my backend and frontend skills with emerging AI technologies.",
        category: "Basic"
    },
    {
        question: "What languages do you program in?",
        answer: "I’m comfortable programming in Java, C++, JavaScript, and currently working on a project using TypeScript. I also have experience building projects across different environments using libraries and frameworks like React, Node.js, Spring Boot, and Express.",
        category: "Basic"
    },
    {
        question: "What are your strengths as a developer?",
        answer: "When I commit to a deadline, I do whatever it takes to deliver. I am extremely responsible and devoted. ",
        category: "Basic"
    },
    {
        question: "What's the most challenging project that you have worked on?",
        answer: "One of the most challenging projects I worked on was a full-stack NFT Marketplace. It involved a complex backend built in C++ using the Crow framework for APIs, along with integration of the Solana Blockchain, which required deep understanding of smart contracts and secure transaction handling.",
        category: "Basic"
    },
    {
        question: "What is your ideal work environment?",
        answer: "I enjoy working in a collaborative environment where people are open to sharing their knowledge.",
        category: "Basic"
    },
    {
        question: "How to run a clean, scalable code",
        answer: "I write clean and scalable code by following consistent naming conventions and code style, breaking large functions into smaller, focused functions with single responsibilities, using design patterns and proper separation of concerns, writing comprehensive tests, documenting my code, avoiding code duplication through reusable functions and classes, and planning for future growth by making the code modular and easy to extend without major refactoring.",
        category: "Basic"
    }
];

export const exercises = [
    {
        id: 1,
        title: "PushAtFront/PrintList/DeleteList Pseudocode Exercise",
        description: "Create and Display Singly Linked List. Insert Nodes At Front.",
        type: "pseudocode",
        data: SinglyLLInsertAtFront
    },
    {
        id: 2,
        title: "PushAtFront/PrintList/DeleteList Code Exercise",
        description: "Create and Display Singly Linked List. Insert Nodes At Front.",
        type: "code",
        data: SinglyLLInsertAtFrontCode
    },
    {
        id: 3,
        title: "PushBack/Reverse Pseudocode Exercise",
        description: "Insert Node At End of Linked List and display in reverse order",
        type: "pseudocode",
        data: SinglyLLInsertAtEnd
    },
    {
        id: 4,
        title: "PushBack/Reverse Code Exercise",
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
        title: "FindMax/Min Pseudocode Exercise",
        description: "FindMax/Min Pseudocode Exercise",
        type: "pseudocode",
        data: FindMinMaxPseudocode
    },
    {
        id: 8,
        title: "FindMax/Min code Exercise",
        description: "FindMax/Min code Exercise",
        type: "code",
        data: FindMinMaxCode
    },
    {
        id: 9,
        title: "InsertInSortedList Pseudocode Exercise",
        description: "InsertInSortedList in Sorted Position",
        type: "pseudocode",
        data: InsertInSortedListPseudocode
    },
    {
        id: 10,
        title: "InsertInSortedList in Sorted Position Code Exercise",
        description: "InsertInSortedList in Sorted Position Code Exercise",
        type: "code",
        data: InsertInSortedListCode
    },
    {
        id: 11,
        title: "SearchKeyAndMove Pseudocode Exercise",
        description: "SearchKeyAndMove Pseudocode Exercise",
        type: "pseudocode",
        data: SearchKeyAndMovePseudocode
    },
    {
        id: 12,
        title: "SearchKeyAndMove Code Exercise",
        description: "SearchKeyAndMove to the front Code  Exercise",
        type: "code",
        data: SearchKeyAndMoveCode
    },
    {
        id: 13,
        title: "DeleteNode Pseudocode Exercise",
        description: "DeleteNodeFromFront and AtPosition Pseudocode Exercise",
        type: "pseudocode",
        data: DeleteNodePseudocode
    },
    {
        id: 14,
        title: "DeleteNode Code Exercise",
        description: "DeleteNodeFromFront and AtPosition Code  Exercise",
        type: "code",
        data: DeleteNodeCode
    },
    {
        id: 15,
        title: "CheckIfSorted Pseudocode Exercise",
        description: "Check if the list is Sorted Pseudocode Exercise",
        type: "pseudocode",
        data: CheckIfSortedPseudocode
    },
    {
        id: 16,
        title: "CheckIfSorted Code Exercise",
        description: "CheckIfSorted Code  Exercise",
        type: "code",
        data: CheckIfSortedCode
    },
    {
        id: 17,
        title: "RemoveDupsFromSortedList Pseudocode Exercise",
        description: "RemoveDupsFromSortedList Pseudocode Exercise",
        type: "pseudocode",
        data: RemoveDuplicatesFromSortedListPseudocode
    },
    {
        id: 18,
        title: "RemoveDupsFromSortedList Code Exercise",
        description: "RemoveDupsFromSortedList Code  Exercise",
        type: "code",
        data: RemoveDuplicatesFromSortedCode
    },
    {
        id: 19,
        title: "RemoveDupsFromUnSortedList Pseudocode Exercise",
        description: "RemoveDupsFromSortedList Pseudocode Exercise",
        type: "pseudocode",
        data: RemoveDuplicatesFromUnSortedListPseudocode
    },
    {
        id: 20,
        title: "RemoveDupsFromUnSortedList Code Exercise",
        description: "RemoveDupsFromUnSortedList Code  Exercise",
        type: "code",
        data: RemoveDuplicatesFromUnSortedCode
    },
    {
        id: 21,
        title: "DetectCycle Pseudocode Exercise",
        description: "DetectCycle Pseudocode Exercise",
        type: "pseudocode",
        data: DetectALoopPseudocode
    },
    {
        id: 22,
        title: "DetectCycle Code Exercise",
        description: "DetectCycle Code  Exercise",
        type: "code",
        data: DetectALoopCode
    },
    {
        id: 23,
        title: "FindMiddleNode in a Singly Linked List Pseudocode Exercise",
        description: "FindMiddleNode in a Singly Linked List Pseudocode Exercise",
        type: "pseudocode",
        data: FindMiddlePseudocode
    },
    {
        id: 24,
        title: "FindMiddleNode in a Singly Linked List",
        description: "FindMiddleNode in a Singly Linked List Code  Exercise",
        type: "code",
        data: FindMiddleCodeCode
    },
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

export const debugging = [
    {
        id: 1,
        title: "C++ Runtime Errors: Debugging Undefined Behavior with LLDB on macOS",
        category: "Debugging",
        src: "https://www.youtube.com/embed/Jch5-H4xH0o"
    },
    {
        id: 2,
        title: "C++ Segmentation Fault: Dereferencing Null Pointers - LLDB Debugging Tutorial",
        category: "Debugging",
        src: "https://www.youtube.com/embed/bas1ilcO3C8"
    }
];