window.onload = headerContent();

function headerContent() {
    const headerHtml = `   <div class = "item-container">
    <div class="logo-content">
        <img class="logo" src="../Assets/images/logo-final.svg" alt="">
    </div>
        <div class="nav-content">
           <div class="div-items"><a href="../pages/AboutDLC.html">About DLC</a></div>
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
 </div>`

    
    document.querySelector('#header-content').innerHTML = headerHtml;
}

function navBar(){
    const content = `<div class=navbar>
        <div class="logo-nav">
            <img class="nlogo" src="../Assets/images/logo-final.svg" alt="">
            <img class="cross" src="../Assets/cross.svg" alt="" onclick="document.querySelector('#menu-bar').innerHTML=''">
        </div>
        <div class="nav">
            <div class="nav1-content">
                <div class="nav1-items"><a style="font-size:35px;" href="../pages/AboutDLC.html">About DLC</a></div>
                <div class="nav1-items"><a style="font-size:35px;" href="../pages/OurWorlds.html">Our Worlds</a></div>
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