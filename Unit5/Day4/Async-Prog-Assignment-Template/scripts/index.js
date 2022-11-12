// var moviesArr = JSON.parse(localStorage.getItem("movies")) || [];
// var movies = document.getElementById("movies");

// display(moviesArr);

// function display(moviesArr) {
//   movies.innerHTML = "";
//   moviesArr.map(function (ele) {
//     var div = document.createElement("div");
//     var img = document.createElement("img");
//     var name = document.createElement("h2");
//     var date = document.createElement("h5");
//     var rating = document.createElement("h5");
//     img.setAttribute("src", ele.image);
//     name.innerText = ele.name;
//     date.innerText = "Release year : " + ele.date;
//     rating.innerText = "IMDB Rating : " + ele.rating;
//     div.append(img, name, date, rating);
//     movies.append(div);
//   });
// }
// var slideImg = document.getElementById("slideImg");
// setInterval(slideshow, 5000);
// var i = 0;
// var n = moviesArr.length;
// slideImg.src = moviesArr[0].image;
// function slideshow() {
//   slideImg.src = moviesArr[i % n].image;
//   i = i + 1;
// }
// document.getElementById("sort-lh").addEventListener("click", sortlh);
// document.getElementById("sort-hl").addEventListener("click", sorthl);

// function sortlh() {
//   moviesArr.sort((a, b) => a.rating - b.rating);
//   display(moviesArr);
// }
// function sorthl() {
//   moviesArr.sort((a, b) => b.rating - a.rating);
//   display(moviesArr);
// }

let images_arr = {
  0 : "https://static.toiimg.com/photo/93181601.cms?width=150&resizemode=4",
  1 : "https://i.ytimg.com/vi/iP15KdeVXN8/maxresdefault.jpg", 
  2 : "https://i.ytimg.com/vi/HKN6FAKjFPU/maxresdefault.jpg",
  3 : "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/10/25/207126-kantara11200x768.jpg?itok=7or3TZxr&c=9a8fe7f2d88f06f3425267da6bd3e3db",
  4 : "https://highlightsindia.com/wp-content/uploads/2017/03/Bahubali-family-tree-banner.jpg",
  5 : "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/04/beast-movie-review-003.jpg",
  6 : "https://image.telanganatoday.com/wp-content/uploads/2022/09/SitaRamamHindi-trends-on-Twitter-as-moviegoers-heap-praises-on-the-film_V_jpg--816x480-4g.webp?sw=1366&dsz=816x480&iw=659&p=false&r=1",
};

  //reference of that image

  let slideshow_img = document.getElementById('slideshow_images')

 let i = 0
  x = setInterval(function (){

      if(i === 7){
          i = 0
      }

     slideshow_img.src = images_arr[i]
     i = i +1
 }, 2000)



 var movies = [
    {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTg0ZTE2MTktNmJiNS00NWUyLWJjZDYtZjMwMzg2M2VmN2JjXkEyXkFqcGdeQXVyMTUzMDA3Mjc2._V1_FMjpg_UX850_.jpg",
        name: "Emergency Declaration",
        rating: "7",
        date: "4 August 2022",
           
    },
    {
        imageUrl: "https://media-cache.cinematerial.com/p/500x/v22l7wq1/the-witch-part-2-movie-poster.jpg?v=1656670080",
        name: "The Witch Part2",
        rating: "6.2",
        date: "15 June 2022",   
    },
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVv0UiBSpZ6adO8C0HBUO6RAe7FnzeU6LydfBi6sj4BjuQfpvgyAN4kSh43uDf3qx8r6NXbl2qbA94WVXpTwstRqvM1J9S6rQWAlyRNVWNhbPEMjnzQMbDu4UdANKwNj358RlsIqLFWKdl0Wl8ZCkggVeayUdxORfO6jtCoQs3rHSOUwd1Zs2CIILJ/s674/20th%20Century%20Girl%20Hindi.jpeg",
        name: "20th Centuary Girl",
        rating: "7.3",
        date: "6 October 2022",   
    },
    {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BODc0MjJhMDYtZjYwNy00NTc2LWJjYzYtMTQ2ODY3YjEyZTZjXkEyXkFqcGdeQXVyNDcyMjQ4MzU@._V1_.jpg",
        name: "The Witch: Part 1 - The Subversion",
        rating: "7.1",
        date: "2 July 2018",   
    },
    {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTJkNjgxZGItOGUyNC00NDQ5LWIzOTAtNTgwZTNmMmY5MjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        name: "Enola Holmes 2",
        rating: "6.8",
        date: "4 November 2022 ",    
    },
    {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
        name: "Avtar",
        rating: "7.8",
        date: "18 December 2009",  
    },
    {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        name: "Avengers Endgame",
        rating: "7.8",
        date: "26 April 2019",    
    },
    {
        imageUrl: "https://assets.mubicdn.net/images/notebook/post_images/29836/images-w1400.jpg?1579571205",
        name: "Parasite",
        rating: "8.5",
        date: "30 May 2019",
    },
    {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        name: "Interstellar",
        rating: "8.6",
        date: "7 November 2014",  
    },
  
];

  localStorage.setItem("movies" , JSON.stringify(movies))
  var newMovie = JSON.parse(localStorage.getItem("")) || [];
 
     var newMovie = JSON.parse(localStorage.getItem("cartitems"))||[];

     movies.map(function(item){
      var div1 = document.createElement("div");
      div1.setAttribute("class" , "div1")
      
      var image = document.createElement("img");  
      image.setAttribute("src", item.imageUrl);
      image.setAttribute("class" , "image")

      var Name = document.createElement("p"); 
      Name.textContent = item.name;
      Name.setAttribute("class", "Name")

      var div2 = document.createElement("div");
      div2.setAttribute("class" , "div2")

      var ratings = document.createElement("p");
      ratings.textContent = `${item.rating} ★★★`;

      var Date = document.createElement("p");
      Date.textContent = item.date;

      div2.append(ratings, Date);

      div1.append(image , Name, div2);
      document.querySelector("#Container").append(div1)
   
  })

document.getElementById("ltoh").addEventListener("click", lth);
document.getElementById("htol").addEventListener("click", htl);

function lth() {
  newMovie.sort((a, b) => a.rating - b.rating);
  // display(moviesArr);
  console.log(newMovie );
}
function htl() {
  newMovie.sort((a, b) => b.rating - a.rating);
  // display(moviesArr);
  console.log(newMovie );
}
