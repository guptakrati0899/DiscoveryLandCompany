
Window.onload = gallery_Images();
Window.onload = header_gallery();

function gallery_Images(){

gallery = [

    {
        id: 1,
        src :"../Assets/gallery/img2.jpg",
        title: "Outdoor Pursuits"
    },{
        
        id: 2,
        src :"../assets/gallery/img3.jpg",
        title: "Golf"
    },{
        
        id: 3,
        src :"../assets/gallery/img4.jpeg",
        title: "Lifestyle"
    },{
        
        id: 4,
        src :"../Assets/gallery/img5.jpg",
        title: "Landscapes"
    },{
        
        id: 5,
        src :"../Assets/gallery/img6.jpg",
        title: "Clubhouses"
    },{
       
        id: 6,
        src :"../Assets/gallery/img7.jpg",
        title: "Wellness"
    }
]

var content = '';

gallery.forEach(element => {
    content += `<div class="gitem">
    <img  src="${element.src}" class="image" alt="">
    <h1 class="title">${element.title}</h1>
</div>`
});

document.querySelector('#main-gallery').innerHTML = content;
}

function header_gallery(){
    var content = ` <img class="image1" src="../Assets/gallery/img1.jpg"  alt="" style="width:100%;">
    <div class = "item-container">
    <div class="logo-content">
        <img class="logo" src="../Assets/images/logo-final.svg" alt="">
    </div>
        <div class="nav-content">
           <div class="div-items"><a href="#">About DLC</a></div>
            <div class="div-items"><a href="../pages/OurWorlds.html"">Our Worlds</a></div>
            <div class="div-items"><a href="#">Experiences</a></div>
            <div class="div-items"><a href="../pages/gallery.html">Gallery</a></div>
            <div class="div-items"><a href="#">Press</a></div>
    <div class="container" onclick="navBar()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
 </div>
 <div class="gallery-item">
    <p>Gallery</p>
</div>
</div>`

document.querySelector('#header-content').innerHTML = content;
}


function navBar(){
    const content = `<div class=navbar>
        <div class="logo-nav">
            <img class="nlogo" src="../Assets/images/logo-final.svg" alt="">
            <img class="cross" src="../Assets/cross.svg" alt="" onclick="document.querySelector('#menu-bar').innerHTML=''">
        </div>
        <div class="nav">
            <div class="nav1-content">
                <div class="nav1-items"><a style="font-size:35px;" href="#">About DLC</a></div>
                <div class="nav1-items"><a style="font-size:35px;" href="../pages/OurWorlds.html"">Our Worlds</a></div>
                <div class=" nav1-items"><a style="font-size:35px;" href="#">Experiences</a></div>
                <div class="nav1-items"><a style="font-size:35px;" href="../pages/gallery.html">Gallery</a></div>
                <div class="nav1-items"><a style="font-size:35px;" href="#">Press</a></div>
            </div>
            <div class="nav2-content">
                <div class="nav2-items"><a style="color:grey; font-size: 19px;" href="#">Magazine</a></div>
                <div class="nav2-items""><a style= " color:grey; font-size: 19px;" href="#">Careers</a></div>
                <div class="nav2-items""><a style= " color:grey; font-size: 19px;" href="#">Foundation</a></div>
                <div class="nav2-items""><a style= " color:grey; font-size: 19px;" href="#">Company</a></div>
                <div class="nav2-items""><a style= " color:grey; font-size: 19px;" href="#">Privacy</a></div>
            </div>
        </div>
    </div>`

    document.querySelector('#menu-bar').innerHTML = content;


}