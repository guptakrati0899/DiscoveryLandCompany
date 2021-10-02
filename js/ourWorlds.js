Window.onload = ourWorlds_Images();



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function ourWorlds_Images(){

images = [

    {
        id: 1,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/8812/DJI_0265_RET_2_210405_212842_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "NORTH SHORE PRESERVE",
         item2: "Kaua'i, Hawaii"
    },{
        id: 2,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/6965/DJI_0374-copy-2_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "JAMES ISLAND",
         item2: "Southern Gulf Islands, British Columbia, Canada"
    },{
        id: 3,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "COSTATERRA",
         item2: "Comporta, Portugal"
    },{
        id: 4,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/6473/LM-Coco-Point-Barbuda-0920_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "BARBUDA OCEAN CLUB",
         item2: "Barbuda,West Indies"
    },{
        id: 5,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/352/driftwood3-carousel_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "DRIFTWOOD",
         item2: "Austin,Texas"
    },{
        id: 6,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/702/Troubadour_carousel6_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "TROUBADOUR",
         item2: "Nashville,Tennessee"
    },{
        id: 7,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/350/playa4-carousel_bab59bdddd9759d14006fbf9d95d20c9.jpg",
         item1: "PLAYA GRANDE",
         item2: "Rio San Juan,Dominican Republic"
    },{
        id: 8,
        src :"../Assets/images/chilenobay.jpeg",
         item1: "CHILENO BAY",
         item2: "Cabo San Lucas, Mexico"
    },{
        id: 9,
        src :"../Assets/images/The Summit.jpg",
        item1: "THE SUMMIT",
        item2: "Las Vegas, Nevada"
       
    },{
        id: 10,
        src :"../Assets/images/DUNEDECK.jpeg",
        item1: "DUNE DECK",
        item2: "Westhampton Beach, NY"
    },{
        id: 11,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/6658/Silo_Andy-Carlson_golf_October-2019_DJI_0024-copysmall_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "SILO RIDGE",
         item2: "Amenia, New York"
    },{
        id: 12,
        src :"../Assets/images/MAKENA.jpeg",
         item1: "MAKENA",
         item2: "Amenia, New York"
    },{
        id: 13,
        src :"../Assets/images/Yellowstone.jpg",
         item1: "YELLOWSTONE CLUB",
         item2: "Big Sky,Montana"
    },{
        id: 14,
        src :"../Assets/images/ranch.jpeg",
         item1: "GOZZER RANCH",
         item2: "Coeur d'Alene, Idaho"
    },{
        id: 15,
        src :"../Assets/images/el dorelado.jpeg",
         item1: "EL DORADO",
         item2: "Los Cabos,Mexico"
    },{
        id: 16,
        src :"../Assets/images/MADISON.jpeg",
         item1: "MADISON",
         item2: "La Quinta,California"
    },{
        id: 17,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/291/Bakers-hero_c7e067ed03eb23b2d1e6333b4c154b30.jpg",
         item1: "BAKER'S BAY",
         item2: "Los Cabos,Mexico"
    },{
        id: 18,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/366/hidwaway-carousel_33673e98fbdc931fea174e355972d2a5.jpg",
         item1: "HIDEWAY",
         item2: "La Quinta, California"
    },{
        id: 19,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/361/mountaintop4-carousel_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "MOUNTAINTOP",
         item2: "Cashiers, North Carolina"
    },{
        id: 20,
        src :"../Assets/images/Mirabel.jpeg",
         item1: "MIRABEL",
         item2: "Scorrsdale,Arizona"
    },{
        id: 21,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/480/Kukio-OurWorlds_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "KUKI'O<",
         item2: "Kohala,Hawaii"
    },{
        id: 22,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/359/vaquero-carousel_190704_093940_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "VAQUERO",
         item2: "Westlake, Texas"
    },{
        id: 23,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/261/ironhouse-carousel_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "RON HORSE",
         item2: "Whitefish, Montana"
    },{
        id: 24,
        src :"https://dxaurk9yhilm4.cloudfront.net/images/262/cordevalle2-carousel_d169f13de117664acdaa1543841b7c16.jpg",
         item1: "CORDEVALLE",
         item2: "Silicon Valley, California"
    }
]
var content = '';

images.forEach(element => {
    content += `<div class="item">
    <img class="image" src="${element.src}" alt="">
    <p class="item1">${element.item1}</p>
    <p class="item2">${element.item2}</p>
</div>`
});

document.querySelector('#main').innerHTML = content;
}