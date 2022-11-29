import getData from "./util.js"
let selectedId=localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "";  
console.log(selectedId);
let initData = async () => {
    let data = await getData(`http://localhost:3000/blogs/${selectedId}`);
    // document.getElementById("id").value=data.id;
    document.getElementById("title").value=data.title;
    document.getElementById("body").value=data.body;
    document.getElementById("author").value=data.author;
    document.getElementById("tags").value=data.tags;
}

let updateData=async()=>{
    let dataBody = {
        // id: document.getElementById("id").value,
        author: document.getElementById("author").value,
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
        tags: document.getElementById("tags").value
      }
  
let response=await getData(`http://localhost:3000/blogs/${selectedId}`,{
    method: "PATCH",
    body: JSON.stringify(dataBody),
    headers:{
        "Content-Type": "application/json" 
    }
    
  });
}
document.getElementById("edit").addEventListener("click",updateData);
    

initData();