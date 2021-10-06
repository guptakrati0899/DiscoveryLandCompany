window.onload = press_matter();

function press_matter() {
    press = [
        {
            id: 1,
            h1tag: "10 Fairways to Tee Off on Now",
            ptag: "Vegas Magazine I September 2021",
            h2tag: "Read Article"
        },
        {
            id: 2,
            h1tag: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
            ptag: "Bloomberg I September 2021",
            h2tag: "Read Article"

        },
        {
            id: 3,
            h1tag: "Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",
            ptag: "Telegraph UK | August 20, 2021",
            h2tag: "Read Article"
        },
        {
            id: 4,
            h1tag: "This Property Company Ups the Ante with  Luxury and Sustainability",
            ptag: "Sunset Magazine | August 13, 2021",
            h2tag: "Read Article"
        }
    ];

    var content= '';

    press.forEach(element=> {
        content += `<div class="press_items">
        <h1>${element.h1tag}</h1>
        <p>${element.ptag}</p>
        <h3>${element.h2tag}</h3>
    </div> `
    });
    
    document.querySelector('#main').innerHTML=content;
    
}