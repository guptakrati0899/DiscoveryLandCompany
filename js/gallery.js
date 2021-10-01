
Window.onload = gallery_Images();


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