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
app.get("/api/automatamcq",(req,res)=>{
    res.json({"data":[  {    "question": "Which of the following represents a scalar quantity?",    "A": "Vector",    "B": "Matrix",    "C": "Scalar",    "D": "Tensor",    "correct": "C"  },  {    "question": "What is the determinant of the 2x2 matrix [[3, 4], [2, -1]]?",    "A": "5",    "B": "7",    "C": "-7",    "D": "-5",    "correct": "D"  },  {    "question": "Which of the following is a valid dot product of two vectors?",    "A": "Vector × Scalar",    "B": "Matrix × Vector",    "C": "Vector × Vector",    "D": "Scalar × Matrix",    "correct": "C"  },  {    "question": "What is the rank of a 3x3 identity matrix?",    "A": "1",    "B": "2",    "C": "3",    "D": "0",    "correct": "C"  },  {    "question": "Which of the following is a valid eigenvalue of a symmetric matrix?",    "A": "Complex number",    "B": "Negative number",    "C": "Positive number",    "D": "All eigenvalues can be any real number",    "correct": "D"  },  {    "question": "What is the null space of a matrix?",    "A": "The set of all row vectors in the matrix",    "B": "The set of all column vectors in the matrix",    "C": "The set of all vectors orthogonal to the rows of the matrix",    "D": "The set of all vectors that satisfy Ax = 0",    "correct": "D"  },  {    "question": "Which of the following matrices is orthogonal?",    "A": "[[1, 0], [0, 1]]",    "B": "[[1, 1], [-1, 1]]",    "C": "[[2, 0], [0, 2]]",    "D": "[[0, 1], [-1, 0]]",    "correct": "A"  }]
})
})


app.listen(5000,()=>{console.log("server started on 5000")})