window.onload = headerContent();

function headerContent() {
    const headerHtml = `  <div class = "item-container">
    <div class="logo-content">
        <img class="logo" src="../Assets/images/logo-final.svg" alt="">
    </div>
        <div class="nav-content">
           <div class="div-items"><a href="#">About DLC</a></div>
            <div class="div-items"><a href="../pages/OurWorlds.html"">Our Worlds</a></div>
            <div class="div-items"><a href="#">Experiences</a></div>
            <div class="div-items"><a href="../pages/gallery.html">Gallery</a></div>
            <div class="div-items"><a href="#">Press</a></div>
    <div class="container">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
 </div>
 </div>`
    
    document.querySelector('#header-content').innerHTML = headerHtml;
}