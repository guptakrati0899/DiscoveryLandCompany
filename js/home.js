window.onload = home_images();

function home_images(){
    images = [
        {
            id: 1,
            src: "/Assets/home/c1.jpg",
            text: "Madison",
            subtext: "La Quinta, California"
        },
        {
            id: 2,
            src:"/Assets/home/c2.jpg",
            text: "Baker's Bay",
            subtext: "Great Guana Cay, Bahamas"
        },
        {
            id: 3,
            src:"/Assets/home/c3.jpg",
            text: "Hideaway",
            subtext: "La Quinta, California"
        },
        {
            id: 4,
            src:"/Assets/home/c4.jpg",
            text: "Mountaintop",
            subtext: "Cashiers, North Carolina"
        },
        {
            id: 5,
            src:"/Assets/home/c5.jpg",
            text: "Mirabel",
            subtext: "Scottsdale, Arizona"
        },
        {
            id: 6,
            src:"/Assets/home/c6.jpg",
            text: "Kūki'o",
            subtext: "Kohala, Hawaii"
        },
        {
            id: 7,
            src:"/Assets/home/c7.jpg",
            text: "Vaquero",
            subtext: "Westlake, Texas"
        },
        {
            id: 8,
            src:"/Assets/home/c8.jpg",
            text: "Iron Horse",
            subtext: "Whitefish, Montana"
        },
        {
            id: 9,
            src:"/Assets/home/c9.jpg",
            text: "CordeValle",
            subtext: "Silicon Valley, California"
        },
        {
            id: 10,
            src:"/Assets/home/c10.jpg",
            text: "Estancia",
            subtext: "Scottsdale, Arizona"
        },
        {
            id: 11,
            src:"/Assets/home/c11.jpg",
            text: "North Shore Reserve",
            subtext: "Kaua'i, Hawaii"
        },
        {
            id: 12,
            src:"/Assets/home/c12.jpg",
            text: "James Island",
            subtext: "Southern Gulf Islands, British Columbia, Canada"
        },
        {
            id: 13,
            src:"/Assets/home/c13.jpg",
            text: "CostaTerra",
            subtext: "Comporta, Portugal"
        },
        {
            id: 14,
            src:"/Assets/home/c14.jpg",
            text: "Barbuda Ocean Club",
            subtext: "Barbuda, West Indies"
        },
        {
            id: 15,
            src:"/Assets/home/c15.jpg",
            text: "Driftwood",
            subtext: "Austin, Texas"
        
        },
        {
            id: 16,
            src:"/Assets/home/c16.jpg",
            text: "Troubadour",
            subtext: "Nashville, Tennessee"
        },
        {
            id: 17,
            src:"/Assets/home/c17.jpg",
            text: "Playa Grande",
            subtext: "Rio San Juan, Dominican Republic"
        },
        {
            id: 18,
            src:"/Assets/home/c18.jpg",
            text: "Chileno Bay",
            subtext: "Cabo San Lucas, Mexico"
        
        },
        {
            id: 19,
            src:"/Assets/home/c19.jpg",
            text: "The Summit",
            subtext: "Las Vegas, Nevada"
        },
        {
            id: 20,
            src:"/Assets/home/c20.jpg",
            text: "Dune Deck",
            subtext: "Westhampton Beach, NY"
        },
        {
            id: 21,
            src:"/Assets/home/c21.jpg",
            text: "Silo Ridge",
            subtext: "Amenia, New York"
        },
        {
            id: 22,
            src:"/Assets/home/c22.jpeg",
            text: "Makena",
            subtext: "Maui, Hawaii"
        },
        {
            id: 23,
            src:"/Assets/home/c23.jpg",
            text: "YellowStone Club",
            subtext: "Big Sky, Montana"
        },
        {
            id: 24,
            src:"/Assets/home/c24.jpg",
            text: "Gozzer Ranch",
            subtext: "Coeur d’Alene, Idaho"
        },
        {
            id: 25,
            src:"/Assets/home/c25.jpg",
            text: "El Dorado",
            subtext: "Los Cabos, Mexico"
        }
    ]

    var content = '';
    
    images.forEach(element => {
        content += `<div class="slide">
        <img  src="${element.src}"  alt="" />
        <div class="slider-text-home">
            <h1 class="text-home">${element.text}</h1>
            <p class="sub-home">${element.subtext}</p>
        </div>
    </div>`
    });
    
    document.querySelector('.slide-track').innerHTML = content;
}





function video1(){
    const content = `<img class="cross" src="/Assets/home/close.png" alt="" onclick="noVideo()">
    <div class="video1-text">
        <div class="title">Experiences</div>
        <div class="inner">Experince the ultimate round of golf on championship</div>
        <div class="inner">courses designed by the world’s most highly acclaimed</div>
        <div class="inner">architects or take a thrilling adventure with limitless</div>
        <div class="inner">activities for everyone to enjoy.</div>
        <div class="explore-button">Explore</div>
    </div>
    <video class="video-home" src="https://dxaurk9yhilm4.cloudfront.net/experiences_190722_093236.mp4?mtime=20190722023236" autoplay loop="" muted></video>`
    document.querySelector('.video-div').innerHTML=content;
    document.querySelector('#content-5').classList.remove('content-5');
    document.querySelector('#content-5').innerHTML = ''; 
}

function video2(){
    const content = `<img class="cross" src="/Assets/home/close.png" alt="" onclick="noVideo()">
    <div class="video1-text">
        <div class="title">Lifestyle</div>
        <div class="inner">Relish the very best times of your life with the ones you</div>
        <div class="inner">love in our bespoke communities that cater to a family</div>
        <div class="inner">orientated lifestyle through unparalleled amenities and</div>
        <div class="inner">inspired experiences.</div>
        <div class="explore-button">Explore</div>
    </div>
    <video class="video-home" src="../Assets/home/video2.mp4" autoplay loop="" muted></video>`
    document.querySelector('.video-div').innerHTML=content;
    document.querySelector('#content-5').classList.remove('content-5');
    document.querySelector('#content-5').innerHTML = ''; 
}


function video3(){
    const content = `<img class="cross" src="/Assets/home/close.png" alt="" onclick="noVideo()">
    <div class="video1-text">
        <div class="title">Welness</div>
        <div class="inner">Relax and refresh your body and your mind in exquisite</div>
        <div class="inner">surroundings. Escape to our stunning pools, unwind in</div>
        <div class="inner">relaxing spas and explore innovative international</div>
        <div class="inner">culinary offerings.</div>
        <div class="explore-button">Explore</div>
    </div>
    <video class="video-home" src="../Assets/home/video2.mp4" autoplay loop="" muted></video>`
    document.querySelector('.video-div').innerHTML=content;
    document.querySelector('#content-5').classList.remove('content-5');
    document.querySelector('#content-5').innerHTML = ''; 
}


function noVideo(){
    document.querySelector('.video-div').innerHTML='';
    document.querySelector('#content-5').classList.add('content-5');
    document.querySelector('#content-5').innerHTML = `<div class="img-5">
    <img class="img" src="/assets/home/manexp.jpg"alt="">
        <h1 class="experiences">Experiences</h1>
        <img class="arrow" src="/Assets/home/right.png" alt="" onclick="video1()">
    </div>
    <div class=""img-5"">
        <img class="img" src="/Assets/home/lifestyle.jpg" alt="">
        <h1 class="lifestyle">Lifestyle</h1>
        <img class="arrow" src="/Assets/home/right.png" alt="" onclick="video2()">
    </div>
    <div class=""img-5"">
        <img class="img" src="/Assets/home/wellness.jpg" alt="">
        <h1 class="wellness">Welness</h1>
        <img class="arrow" src="/Assets/home/right.png" alt="" onclick="video3()">
    </div>`; 

}
