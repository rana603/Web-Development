import getData from "./util.js"
// let getData = async (url) => {
//     let res = await fetch(url);
//     let data = await res.json();
//     return data;
// }
let initData = async () => {
    let data = await getData("http://localhost:3000/blogs");
    displayData(data);
}
let savestorage=(key,value) => {
    localStorage.setItem(key,JSON.stringify(value));
}
let displayData = (blogs) => {
    let tablebody = document.getElementById("table-body");
    blogs.forEach((blog) => {
        let tr = document.createElement("tr");
        let userid = document.createElement("td");
        userid.textContent = blog.id;
        let title = document.createElement("td");
        title.textContent = blog.title;
        let body = document.createElement("td");
        body.textContent = blog.body;
        let author = document.createElement("td");
        author.textContent = blog.author;
        let catagory = document.createElement("td");
        catagory.textContent = blog.category;
        let tags = document.createElement("td");
        tags.textContent = blog.tags;
        let date = document.createElement("td");
        date.textContent = blog.created_date;
        let td1=document.createElement("td");
        let viewbtn = document.createElement("button");
        viewbtn.textContent = "VIEW";
        td1.append(viewbtn);
        viewbtn.addEventListener("click",()=>{
            savestorage("id",blog.id)
            window.location.href="view.html"
        })
        let td2=document.createElement("td");
        let delbtn = document.createElement("button");
        td2.append(delbtn);
        delbtn.textContent = "DELETE";
        delbtn.addEventListener("click",async()=>{
            let response=await fetch(`http://localhost:3000/blogs/${blog.id}`,{
                method:"DELETE",
            }) 
        })
        let td3=document.createElement("td");
        let editbtn = document.createElement("button");
        editbtn.textContent = "EDIT"; 
        td3.append(editbtn);
        editbtn.addEventListener("click",()=>{
            savestorage("id",blog.id);
            window.location.href="./edit.html"; 
        })
        tr.append(userid,title, author, body, catagory, tags, date, td1, td2,td3);
        tablebody.append(tr);
    })
}
initData();  