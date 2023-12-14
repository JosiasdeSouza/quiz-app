const quizQuestions = [
    {
      question: 'What is the primary purpose of a functional component in React?',
      choices: ['To manage state', 'To define UI structure', 'To handle user events', 'To perform side effects'],
      correctAnswer: 'To define UI structure',
    },
    {
      question: 'How do you pass data from a parent component to a child component in React?',
      choices: ['Using state', 'Using props', 'Using refs', 'Using context'],
      correctAnswer: 'Using props',
    },
    {
      question: 'In a functional component, where do you typically manage data?',
      choices: ['Inside the render method', 'In a separate JavaScript file', 'Outside the component', 'Inside the component using hooks'],
      correctAnswer: 'Inside the component using hooks',
    },
    {
      question: 'What is the purpose of the "key" prop in React?',
      choices: ['To identify elements uniquely in a list', 'To style elements', 'To set the initial state', 'To create event handlers'],
      correctAnswer: 'To identify elements uniquely in a list',
    },
    {
      question: 'How can you conditionally render content in a React component?',
      choices: ['Using if-else statements', 'Using ternary operators', 'Both A and B', 'None of the above'],
      correctAnswer: 'Both A and B',
    },
    {
      question: 'What is the main difference between functions in plain JavaScript and functions in React components?',
      choices: ['There is no difference', 'React functions can only be arrow functions', 'React functions are always asynchronous', 'React functions can return JSX'],
      correctAnswer: 'React functions can return JSX',
    },
    {
      question: 'What is the purpose of the "children" prop in React?',
      choices: ['To pass data from parent to child', 'To define the structure of a component', 'To access and render child components', 'To render the content between the opening and closing tags of a component'],
      correctAnswer: 'To render the content between the opening and closing tags of a component',
    },
    {
      question: 'Which hook is used for performing side effects in a functional component?',
      choices: ['useEffect', 'useState', 'useCallback', 'useContext'],
      correctAnswer: 'useEffect',
    },
    {
      question: 'How do you update data in a functional component?',
      choices: ['By directly modifying data', 'Data cannot be updated in functional components', 'Using the updateData function', 'Using callback functions'],
      correctAnswer: 'By directly modifying data',
    },
    {
      question: 'What is the purpose of the "defaultProps" property in a functional component?',
      choices: ['To set default values for props', 'To define the structure of the component', 'To create default state values', 'To configure event handlers'],
      correctAnswer: 'To set default values for props',
    },
  ];
  
  export default quizQuestions;