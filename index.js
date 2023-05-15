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
    res.json({"data":[
        {
          questoin: "what is the correct answer?",
          A:"first answer",
          B:"second answer",
          C:"third answer",
          D:"fourth answer",
          correct:"A"
        },
        {
          questoin: "what is the correct answer for the second question?",
          A:"first answer",
          B:"second answer",
          C:"third answer",
          D:"fourth answer",
          correct:"C"
        },
        {
          questoin: "what is the correct answer for the third question?",
          A:"first answer",
          B:"second answer",
          C:"third answer",
          D:"fourth answer",
          correct:"D"
        },{
          questoin: "what is the correct answer for the fourth question?",
          A:"first answer",
          B:"second answer",
          C:"third answer",
          D:"fourth answer",
          correct:"D"
        },{
          questoin: "what is the correct answer for the fifth question?",
          A:"first answer",
          B:"second answer",
          C:"third answer",
          D:"fourth answer",
          correct:"D"
        },{
          questoin: "what is the correct answer for the sixth question?",
          A:"first answer",
          B:"second answer",
          C:"third answer",
          D:"fourth answer",
          correct:"D"
        },{
          questoin: "what is the correct answer for the seventh question?",
          A:"first answer",
          B:"second answer",
          C:"third answer",
          D:"fourth answer",
          correct:"D"
        }
        
      ]})
})


app.listen(5000,()=>{console.log("server started on 5000")})