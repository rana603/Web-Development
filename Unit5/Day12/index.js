
    // document.getElementById("title").addEventListener("oninput", searchMovie)
    function searchgithub() {
        var title = document.getElementById("search-input").value
        var url = fetch("https://api.github.com/users/" + title);
        url.then((res)=> {
            return res.json()
        }).then((res) =>{
            console.log(res)
                displaygithub(res)
        }).catch(() => {
            console.log("catch")
        })

    }
    function displaygithub(res) {
        document.getElementById("github-container").innerHTML="";
        var div = document.createElement("div");
        let h1=document.createElement("h1");
        h1.textContent=res.name;
        let img=document.createElement("img");
        img.src=res.avatar_url;
        let h3=document.createElement("h3");
        h3.textContent=res.bio;
        let followers=document.createElement("p");
        followers.textContent=res.followers;
        let following=document.createElement("p");
        textContent=res.following;
        let company=document.createElement("p");
        company.textContent=res.company;
        
        div.append(h1,img,h3,followers,following,company);
        document.getElementById("github-container").append(div);

    }
    var i;
    function debounce() {
        if (i) {
            clearTimeout(i)
        }
        i = setTimeout(() => {
            searchgithub()
        }, 1000)
    }

