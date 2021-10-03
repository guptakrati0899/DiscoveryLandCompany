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





function videoImage1() {
    const content = `<div video1">
    <video class="img_v1" src="https://dxaurk9yhilm4.cloudfront.net/experiences_190722_093236.mp4?mtime=20190722023236"  data-length=""  muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video1').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Experiences</h1>
  <p class="p_text">
    Experience the ultimate round of golf on championship courses designed by the world’s most highly acclaimed architects or take a thrilling adventure with limitless activities for everyone to enjoy.
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video1').innerHTML = content;

}

function videoImage2() {
    const content = `<div video1">
    <video class="img_v2"../Assets/home/video2.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video2').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Lifestyle</h1>
  <p class="p_text">
  Relish the very best times of your life with the ones you love in our bespoke communities that cater to a family orientated lifestyle through unparalleled amenities and inspired experiences. 
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video2').innerHTML = content;

}

function videoImage3() {
    const content = `<div video1">
    <video class="img_v3" src="../Assets/home/video3.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video3').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Wellness</h1>
  <p class="p_text">
  Relax and refresh your body and your mind in exquisite surroundings. Escape to our stunning pools, unwind in relaxing spas and explore innovative international culinary offerings.
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video3').innerHTML = content;

}
