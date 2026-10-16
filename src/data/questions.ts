export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  type: 'mcq';
}

export interface DescriptiveQuestion {
  id: number;
  question: string;
  type: 'descriptive';
}

export type Question = MCQQuestion | DescriptiveQuestion;

export const questions: Question[] = [
  {
    id: 1,
    type: 'mcq',
    question: 'Which keyword is used to declare a variable in Go?',
    options: ['var', 'let', 'dim', 'declare'],
  },
  {
    id: 2,
    type: 'mcq',
    question: 'What is the correct way to create a goroutine?',
    options: ['go functionName()', 'goroutine functionName()', 'create functionName()', 'new functionName()'],
  },
  {
    id: 3,
    type: 'mcq',
    question: 'Which package is imported for input/output operations in Go?',
    options: ['fmt', 'io', 'stdio', 'input'],
  },
  {
    id: 4,
    type: 'mcq',
    question: 'What does the "defer" keyword do in Go?',
    options: ['Deletes a variable', 'Schedules a function call to run after the surrounding function returns', 'Defers compilation', 'Creates a delay'],
  },
  {
    id: 5,
    type: 'mcq',
    question: 'Which data type is used to represent a true/false value in Go?',
    options: ['int', 'bool', 'bit', 'flag'],
  },
  {
    id: 6,
    type: 'mcq',
    question: 'What is the zero value of an int in Go?',
    options: ['1', '-1', '0', 'nil'],
  },
  {
    id: 7,
    type: 'mcq',
    question: 'How do you define a struct in Go?',
    options: ['struct Name {}', 'type Name struct {}', 'define struct Name {}', 'class Name {}'],
  },
  {
    id: 8,
    type: 'mcq',
    question: 'Which operator is used to get the memory address of a variable?',
    options: ['*', '&', '@', '#'],
  },
  {
    id: 9,
    type: 'mcq',
    question: 'What is the correct syntax for a for loop in Go?',
    options: ['for i := 0; i < 10; i++ {}', 'for (i = 0; i < 10; i++) {}', 'loop i from 0 to 10 {}', 'foreach i in 0..10 {}'],
  },
  {
    id: 10,
    type: 'mcq',
    question: 'Which function is used to find the length of a slice?',
    options: ['size()', 'len()', 'count()', 'length()'],
  },
  {
    id: 11,
    type: 'mcq',
    question: 'What is the default package name for executable programs in Go?',
    options: ['exec', 'run', 'main', 'program'],
  },
  {
    id: 12,
    type: 'mcq',
    question: 'How do you handle errors in Go?',
    options: ['try-catch block', 'if err != nil', 'onError callback', 'exception handling'],
  },
  {
    id: 13,
    type: 'mcq',
    question: 'Which of the following is used to create a channel in Go?',
    options: ['chan int', 'channel int', 'pipe int', 'queue int'],
  },
  {
    id: 14,
    type: 'mcq',
    question: 'What is the purpose of the "go mod init" command?',
    options: ['Creates a new Go file', 'Initializes a new Go module', 'Installs Go packages', 'Runs Go tests'],
  },
  {
    id: 15,
    type: 'mcq',
    question: 'Which keyword is used to define an interface in Go?',
    options: ['implements', 'interface', 'abstract', 'contract'],
  },
  {
    id: 16,
    type: 'descriptive',
    question: 'Explain the difference between goroutines and threads in Go. How does Go manage concurrency?',
  },
  {
    id: 17,
    type: 'descriptive',
    question: 'Describe how error handling works in Go. Why does Go not have try-catch blocks? Provide an example.',
  },
  {
    id: 18,
    type: 'descriptive',
    question: 'What are interfaces in Go? Explain how they differ from interfaces in other languages like Java. Give a code example.',
  },
  {
    id: 19,
    type: 'descriptive',
    question: 'Explain the concept of slices in Go. How are they different from arrays? Describe their internal structure.',
  },
  {
    id: 20,
    type: 'descriptive',
    question: 'What is the Go module system? Explain how dependency management works in Go using go.mod and go.sum files.',
  },
];
