const express = require('express');
const path =require('path');
const fileupload = require('express-fileupload');

//create public folder path 
let initial_path = path.join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));
app.use(fileupload());

// get method to get the path to home page (index.html)
app.get('/', (req,res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.listen("3000", () => {
    console.log('listening............');
})

// // get method to the path to the editor.html
// app.get('/editor', (req, res) => {
//     res.sendFile(path.join(initial_path, "editor.html"));
// })

// // the POST to upload files , create the file path 

// app.post('/upload', (req, res) => {
//     let file = req.files.image;
//     let date = new Date();

//     //image name
//     let imagename = date.getDate() + date.getTime() + file.name;

//     //image upload path 
//     let path = 'public/uploads' + imagename;

//     //create the uplood method

//     file.mv(path, (err, result) =>{
//         if(err){
//             throw err;
//         }
//         //if not error upload image
//         res.json(`uploads/${imagename}`)
//     })
// })

// // get the blog page 
// app.get("/:blog", (req,res) => {
//     res.sendFile(path.join(initial_path, "blog.html"));
// })

// // 404 

// app.use((req, res) =>{
//     res.json("404")
// })
