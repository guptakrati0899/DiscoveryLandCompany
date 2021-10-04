window.onload = dlc_content();

function dlc_content() {
  dlc_images = [
        {
            id: 1,
            image: "../Assets/AboutDLC/img3.jpg",
            title: "Focus on family",
            para: "Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive."
        },
        {
            id: 2,
            image: "../Assets/AboutDLC/img4.jpg",
            title: "Incomparable experiences",
            para: "World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service."
        },
        {
            id: 3,
            image: "../Assets/AboutDLC/img5.jpg",
            title: "Inspired by land",
            para: "Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience."
        },
        {
            id: 4,
            image: "../Assets/AboutDLC/img6.jpg",
            title: "Sustainable future",
            para: "Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability."
        },
        {
            id: 5,
            image: "../Assets/AboutDLC/img7.jpg",
            title: "Luxury bespoke homes",
            para: "Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles."
        },
        {
            id: 6,
            image: "../Assets/AboutDLC/img3.jpg",
            title: "Focus on family",
            para: "Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive."
        },
        {
            id: 7,
            image: "../Assets/AboutDLC/img4.jpg",
            title: "Incomparable experiences",
            para: "World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service."
        },
        {
            id: 8,
            image: "../Assets/AboutDLC/img5.jpg",
            title: "Inspired by land",
            para: "Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience."
        },
        {
            id: 9,
            image: "../Assets/AboutDLC/img6.jpg",
            title: "Sustainable future",
            para: "Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability."
        },
        {
            id: 10,
            image: "../Assets/AboutDLC/img7.jpg",
            title: "Luxury bespoke homes",
            para: "Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles."
        }
    ];

    var content = '';
    
    dlc_images.forEach(element => {
        content += `<div class="track">
        <img  src="${element.image}"  alt="" />
        <div class="track_main">
            <h1 class="track_title">${element.title}</h1>
            <p class="track_sub">${element.para}</p>
        </div>
    </div>`
    });
    
    document.querySelector('.img_track').innerHTML = content;
}