const express=require('express')
const app=express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/api/automata",(req,res)=>{
    res.json({"dat":[
        {
          title: "25th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1vnl2EpZThqLCGYq7qVV2zx0x7_8POx0_/preview"
        },
        {
          title: "25th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1ScPk_uOZm2nHIg7TRdW-8CEM2GwcD_Ln/preview"
        },
        {
          title: "24th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1vnl2EpZThqLCGYq7qVV2zx0x7_8POx0_/preview"
        },
        {
          title: "24th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1vnl2EpZThqLCGYq7qVV2zx0x7_8POx0_/preview"
        },
        {
          title: "23th batch final",
          description: false,
          link: "https://drive.google.com/file/d/17w6nJBRmAok_-MyD6rdhZmXXo8h2QpAU/preview"
        },
        {
          title: "23th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1KvBjZmdD5h9r2TIoqIQ8YmIY_RSTD2b_/preview"
        }
      ]})
})
app.get("/api/linear",(req,res)=>{
    res.json({"dat":[
        {
          title: "25th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1VOFgs1V9C_Ja-CXHdM5FcxVizgvSw24c/preview"
        },
        {
          title: "25th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1zbj3pOw-ndmDlKcP_ObsuHf5TnLvH3Xz/preview"
        },
        {
          title: "24th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1Uw6nXHMCawv922kMvjbNy7GvGw4OeoiG/preview"
        },
        {
          title: "24th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1_vBCWSz_nDaukZXZCpcoTXYj6iehRlLe/preview"
        },
        {
          title: "23th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1KiAACD-eU9-YasjWcqgrr9tb2MnwyIxD/preview"
        },
        {
          title: "23th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1zsYeqCDTWaD5Ar71K9EQ9_eCPnxx5_lu/preview"
        }
      ]})
})
app.get("/api/microcontroller",(req,res)=>{
    res.json({"dat":[
        {
          title: "24th batch final",
          description: false,
          link: "https://drive.google.com/file/d/15wX6zyl9Z9-UgiX0TK__mLYEI9a5ZV_S/preview"
        },
        {
          title: "24th batch incourse",
          description: false,
          link: ""
        },
        {
          title: "23th batch final",
          description: false,
          link: "https://drive.google.com/file/d/16rIa_Z5fk3wxQnm0P9vJ2C_7KwuwrhlJ/preview"
        },
        {
          title: "23th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1-228o-OkkgoMFP7fH_7O2E8Mm8XK3fkv/preview"
        }
      ]})
})
app.get("/api/datastructure",(req,res)=>{
    res.json({"dat":[
        {
          title: "25th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1SzaCZJxVb06Er7bhjq6VnYNbqnUAiGy9/preview"
        },
        {
          title: "25th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1OjH9eMxsoOrZZBaUAXemddAbkcuv0kYi/preview"
        },
        {
          title: "24th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1PgUKrvNM-lAkMDTC-bPn5JMT8ug5-9_b/preview"
        },
        {
          title: "24th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1Okh6stllUP_Pc2-zmPpK7KRIc6-3lTIT/preview"
        },
        {
          title: "23th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1u4UUBwVyj8lcvxqjG1woWYwM8-T6koD0/preview"
        },
        {
          title: "23th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1nMwprg7acwRGOZqnpQSyz_yc9ypR8pQV/preview"
        }
      ]})
})
app.get("/api/multivariable",(req,res)=>{
    res.json({"dat":[
    
        {
          title: "24th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1B4O9k1kx-5JSrzxOz5Lpc0sgAcNLAcW8/preview"
        },
        {
          title: "24th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/1tNR8KdbKENsRywFVTLCIe2HW2befzfSA/preview"
        },
        {
          title: "23th batch final",
          description: false,
          link: "https://drive.google.com/file/d/1qHjA5rQT1-VW3at2BW0_jh4BFeUvRhCJ/preview"
        },
        {
          title: "23th batch incourse",
          description: false,
          link: "https://drive.google.com/file/d/14GVc5yLgQgE4-5DUawBrrxW2GOF2PdLO/preview"
        }
      ]})
})
app.get("/api/mcq/automata",(req,res)=>{
  res.json({"data":[{
    "question": "Which of the following is not a type of automaton?",
    "A": "Finite Automaton (FA)",
    "B": "Pushdown Automaton (PDA)",
    "C": "Turing Machine (TM)",
    "D": "Deterministic Finite Automaton (DFA)",
    "correct": "D"
  },
  {
    "question": "What is the language accepted by a Finite Automaton (FA) called?",
    "A": "Deterministic Language",
    "B": "Regular Language",
    "C": "Context-Free Language",
    "D": "Unrestricted Language",
    "correct": "B"
  },
  {
    "question": "Which of the following automata can recognize context-free languages?",
    "A": "Deterministic Pushdown Automaton (DPDA)",
    "B": "Nondeterministic Finite Automaton (NFA)",
    "C": "Turing Machine (TM)",
    "D": "Deterministic Finite Automaton (DFA)",
    "correct": "A"
  },
  {
    "question": "Which of the following is true about non-deterministic automata?",
    "A": "They have a unique transition for each input symbol and state",
    "B": "They can be simulated by deterministic automata",
    "C": "They accept a proper subset of the languages accepted by deterministic automata",
    "D": "They cannot recognize regular languages",
    "correct": "C"
  },
  {
    "question": "What is the equivalent computational power of a Turing Machine (TM)?",
    "A": "DFA",
    "B": "PDA",
    "C": "NFA",
    "D": "All of the above",
    "correct": "D"
  },
  {
    "question": "Which of the following is true about regular languages?",
    "A": "They can be recognized by Turing Machines",
    "B": "They are closed under union, concatenation, and Kleene star operations",
    "C": "They can only accept finite languages",
    "D": "They require a stack for recognition",
    "correct": "B"
  },
  {
    "question": "Which of the following is a characteristic of a context-free language?",
    "A": "They can be recognized by deterministic pushdown automata",
    "B": "They require a two-dimensional tape for computation",
    "C": "They have a linear amount of memory",
    "D": "They are closed under complementation",
    "correct": "A"
  },
  {
    "question": "What is the result of concatenating two regular languages?",
    "A": "A context-free language",
    "B": "An unrestricted language",
    "C": "A non-regular language",
    "D": "Another regular language",
    "correct": "D"
  },
  {
    "question": "Which of the following is not a property of a regular language?",
    "A": "Closed under complementation",
    "B": "Closed under intersection",
    "C": "Closed under union",
    "D": "Closed under reversal",
    "correct": "A"
  }]
})
})
app.get("/api/mcq/datastructure",(req,res)=>{
  res.json({"data":[  {    "question": "Which data structure operates in a First-In-First-Out (FIFO) manner?",    "A": "Stack",    "B": "Queue",    "C": "Tree",    "D": "Heap",    "correct": "B"  },  {    "question": "Which data structure allows efficient insertion and deletion at both ends?",    "A": "Queue",    "B": "LinkedList",    "C": "Array",    "D": "Tree",    "correct": "B"  },  {    "question": "Which data structure uses LIFO (Last-In-First-Out) ordering?",    "A": "Queue",    "B": "Heap",    "C": "LinkedList",    "D": "Stack",    "correct": "D"  },  {    "question": "Which data structure is based on the principle of 'divide and conquer'?",    "A": "Queue",    "B": "Tree",    "C": "Stack",    "D": "Heap",    "correct": "B"  },  {    "question": "Which data structure allows efficient search, insertion, and deletion in average and worst-case time complexity of O(log n)?",    "A": "Array",    "B": "LinkedList",    "C": "Stack",    "D": "Binary Search Tree",    "correct": "D"  },  {    "question": "Which data structure is typically implemented using an array or linked list and follows the LIFO principle?",    "A": "Stack",    "B": "Queue",    "C": "Tree",    "D": "Heap",    "correct": "A"  },  {    "question": "Which data structure is suitable for implementing a priority queue?",    "A": "Array",    "B": "LinkedList",    "C": "Heap",    "D": "Stack",    "correct": "C"  },  {    "question": "Which data structure organizes elements in a hierarchical structure with parent-child relationships?",    "A": "LinkedList",    "B": "Queue",    "C": "Stack",    "D": "Tree",    "correct": "D"  },  {    "question": "Which data structure is used to efficiently maintain a sorted collection of elements?",    "A": "Array",    "B": "Heap",    "C": "Tree",    "D": "Queue",    "correct": "C"  },  {    "question": "Which data structure is suitable for implementing a cache with a fast lookup operation?",    "A": "LinkedList",    "B": "Stack",    "C": "Queue",    "D": "HashMap",    "correct": "D"  }]

})
})

app.get("/api/mcq/microcontroller",(req,res)=>{
  res.json({"data":[
    {
      "question": "What is the primary function of a microprocessor?",
      "A": "Execute instructions and perform calculations",
      "B": "Control external devices and systems",
      "C": "Store and retrieve data",
      "D": "Interface with the operating system",
      "correct": "A"
    },
    {
      "question": "Which of the following is a characteristic of a microcontroller?",
      "A": "High clock speed and complex instruction set",
      "B": "Integrated CPU, memory, and peripherals on a single chip",
      "C": "Designed for general-purpose computing",
      "D": "Used in large-scale server systems",
      "correct": "B"
    },
    {
      "question": "What is the purpose of an instruction set in a microprocessor or microcontroller?",
      "A": "Store and execute programs",
      "B": "Provide clock signal for synchronization",
      "C": "Interface with external memory",
      "D": "Implement arithmetic and logic operations",
      "correct": "A"
    },
    {
      "question": "Which component of a microcontroller is responsible for storing program instructions?",
      "A": "ALU (Arithmetic Logic Unit)",
      "B": "Registers",
      "C": "Memory",
      "D": "Timers",
      "correct": "C"
    },
    {
      "question": "What is the purpose of the UART (Universal Asynchronous Receiver-Transmitter) module in a microcontroller?",
      "A": "Perform analog-to-digital conversions",
      "B": "Handle input/output operations with external devices",
      "C": "Execute arithmetic and logic operations",
      "D": "Control the clock signal",
      "correct": "B"
    },
    {
      "question": "Which type of memory is typically used for storing program instructions in a microcontroller?",
      "A": "RAM (Random Access Memory)",
      "B": "Flash Memory",
      "C": "Cache Memory",
      "D": "Registers",
      "correct": "B"
    },
    {
      "question": "What is the purpose of a watchdog timer in a microcontroller?",
      "A": "Measure the execution time of a program",
      "B": "Prevent unauthorized access to the system",
      "C": "Reset the microcontroller if it becomes unresponsive",
      "D": "Perform analog-to-digital conversions",
      "correct": "C"
    },
    {
      "question": "Which of the following is an example of a microcontroller architecture?",
      "A": "x86",
      "B": "ARM",
      "C": "RISC-V",
      "D": "MIPS",
      "correct": "B"
    },
    {
      "question": "What is the purpose of the I/O ports in a microcontroller?",
      "A": "Perform arithmetic and logic operations",
      "B": "Interface with external devices",
      "C": "Store program instructions",
      "D": "Control the clock signal",
      "correct": "B"
    },
    {
      "question": "Which of the following is a commonly used programming language for microcontrollers?",
      "A": "C++",
      "B": "Java",
      "C": "Python",
      "D": "C",
      "correct": "D"
    }
  ]
  
})
})

app.get("/api/mcq/mvc",(req,res)=>{
  res.json({"data":[
    {
      "question": "What is the partial derivative of f(x, y) with respect to x?",
      "A": "∂f/∂y",
      "B": "∂f/∂x",
      "C": "∇f",
      "D": "df/dx",
      "correct": "B"
    },
    {
      "question": "What does the gradient of a function represent?",
      "A": "Rate of change of the function",
      "B": "Magnitude of the function",
      "C": "Direction of steepest increase of the function",
      "D": "Curvature of the function",
      "correct": "C"
    },
    {
      "question": "What is the divergence of a vector field?",
      "A": "Rate of expansion of the field",
      "B": "Rate of change of the field in the direction of greatest increase",
      "C": "Curl of the field",
      "D": "Rate of change of the field in the direction perpendicular to the surface",
      "correct": "A"
    },
    {
      "question": "What is the curl of a vector field in three dimensions?",
      "A": "Rate of change of the field in the direction perpendicular to the surface",
      "B": "Rate of expansion of the field",
      "C": "Rate of change of the field in the direction of greatest increase",
      "D": "Rotational behavior of the field",
      "correct": "D"
    },
    {
      "question": "What does the Hessian matrix represent?",
      "A": "Second partial derivatives of a function",
      "B": "Gradient of a function",
      "C": "Jacobian matrix",
      "D": "Divergence of a vector field",
      "correct": "A"
    },
    {
      "question": "What is the line integral of a vector field along a curve?",
      "A": "Surface integral",
      "B": "Volume integral",
      "C": "Double integral",
      "D": "Path integral",
      "correct": "D"
    },
    {
      "question": "What is the divergence theorem also known as?",
      "A": "Green's theorem",
      "B": "Stokes' theorem",
      "C": "Gauss's theorem",
      "D": "Fundamental theorem of calculus",
      "correct": "C"
    },
    {
      "question": "What is the surface integral of a vector field over a closed surface called?",
      "A": "Line integral",
      "B": "Volume integral",
      "C": "Double integral",
      "D": "Flux integral",
      "correct": "D"
    },
    {
      "question": "What is the Jacobian matrix used for?",
      "A": "Finding the line integral",
      "B": "Calculating the divergence of a vector field",
      "C": "Evaluating the surface integral",
      "D": "Change of variables in multiple integrals",
      "correct": "D"
    }
  ]
})
})


app.get("/api/mcq/linearAlgebra",(req,res)=>{
    res.json({"data":[  {    "question": "Which of the following represents a scalar quantity?",    "A": "Vector",    "B": "Matrix",    "C": "Scalar",    "D": "Tensor",    "correct": "C"  },  {    "question": "What is the determinant of the 2x2 matrix [[3, 4], [2, -1]]?",    "A": "5",    "B": "7",    "C": "-7",    "D": "-5",    "correct": "D"  },  {    "question": "Which of the following is a valid dot product of two vectors?",    "A": "Vector × Scalar",    "B": "Matrix × Vector",    "C": "Vector × Vector",    "D": "Scalar × Matrix",    "correct": "C"  },  {    "question": "What is the rank of a 3x3 identity matrix?",    "A": "1",    "B": "2",    "C": "3",    "D": "0",    "correct": "C"  },  {    "question": "Which of the following is a valid eigenvalue of a symmetric matrix?",    "A": "Complex number",    "B": "Negative number",    "C": "Positive number",    "D": "All eigenvalues can be any real number",    "correct": "D"  },  {    "question": "What is the null space of a matrix?",    "A": "The set of all row vectors in the matrix",    "B": "The set of all column vectors in the matrix",    "C": "The set of all vectors orthogonal to the rows of the matrix",    "D": "The set of all vectors that satisfy Ax = 0",    "correct": "D"  },  {    "question": "Which of the following matrices is orthogonal?",    "A": "[[1, 0], [0, 1]]",    "B": "[[1, 1], [-1, 1]]",    "C": "[[2, 0], [0, 2]]",    "D": "[[0, 1], [-1, 0]]",    "correct": "A"  }]
  })
})


app.listen(5000,()=>{console.log("server started on 5000")})
  