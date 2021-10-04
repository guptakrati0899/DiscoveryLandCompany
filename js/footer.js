window.onload = footerContent();

function footerContent(){
    const footerhtml = ` <div class="footer-list">
    <img class ="fimg" src="/assets/logo-head.ico" alt="" srcset="">
        <div class="list-1">
            <div class="element"><a href="#">GET IN TOUCH</a></div>
            <div class="element"><a href="#">(480)624-5200</a></div>
            <div class="element"><a href="mailto:mail@discoverylandco.com">mail@discoverylandoco.com</a></div>
        </div>
        <div class="footer-main">
        <div class ="list-2">
        <div class="element"><a href="#">About DLC</a></div>
        <div class="element"><a href="../pages/OurWorlds.html">Our Worlds</a></div>
        <div class="element"><a href="#">Experiences</a></div>
        <div class="element"><a href="../pages/gallery.html">Gallery</a></div>
        <div class="element"><a href="#">Press</a></div>
        </div>
        <div class="list-3">
            <div class="element"><a href="#">Magazine</a></div>
            <div class="element"><a href="#">Careers</a></div>
            <div class="element"><a href="#">Foundation</a></div>
            <div class="element"><a href="#">Company</a></div>
            <div class="element"><a href="#">Privacy</a></div>
        </div>
    </div>
    </div>
    <p class="copyright">© Discovery Land Company.All rights reserved.</p> `

    document.querySelector('#footer-content').innerHTML = footerhtml;
}