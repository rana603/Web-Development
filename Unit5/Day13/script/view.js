import getData from "./util.js"
let selectedId=localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "";  
console.log(selectedId); 
let initData= async ()=>{
    let data = await getData(`http://localhost:3000/blogs/${selectedId}`);
    // console.log(data);
    displayData(data);
}
let  blog_body =document.getElementById("blog-body");
let displayData=(data)=>{
    blog_body.innerHTML = "";
    let title=document.createElement("h2");
    title.textContent= "Title: "+data.title;
    let body=document.createElement("h4");
    body.textContent= "Body: "+ data.body;
    let author=document.createElement("p");
    author.textContent="Author: "+ data.author;
    let  tags=document.createElement("p");
    tags.textContent="Tags: "+ data.tags; 
    blog_body.append(title,body,author,tags);
    
}
initData();