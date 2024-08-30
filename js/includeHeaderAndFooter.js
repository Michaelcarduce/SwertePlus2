class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="special-header">
        <div class="navigation">
          <div class="alignment">
            <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
          </div>
          <div class="alignment navigationlinks">
            <nav>
              <ul id="menu-new" class="colibri-menu topnav">
                <li><a href="index.html" id="home-link">HOME</a></li>
                <li><a href="onlineslots.html" id="onlineslots-link">ONLINE SLOTS</a></li>
                <li><a href="fishinggames.html" id="fishinggames-link">FISHING GAMES</a></li>
                <li><a href="livecasino.html" id="livecasino-link">LIVE CASINO</a></li>
                <li><a href="sports.html" id="sports-link">SPORTS</a></li>
                <li><a href="deposit.html" id="deposit-link">DEPOSIT</a></li>
                <li><a href="withdrawal.html" id="withdrawal-link">WITHDRAWAL</a></li>
                <li><a href="promotion.html" id="promotion-link">PROMOTIONS</a></li>
                <li><a href="downloads.html" id="downloads-link">DOWNLOADS</a></li>
                <li><a href="news.html" id="news-link">NEWS</a></li>
              </ul>
            </nav>
          </div>        
          <div class="alignment">
            <a class="ctaButton" href="#" target="_blank"><span class="ctaButtonMes">Login</span></a>
            <a class="ctaButton" href="#" target="_blank"><span class="ctaButtonMes">Signup</span></a>
          </div>
          <div id="nav-icon"><span></span><span></span><span></span></div>
        </div>
      </header>
    `;
    this.initHamburgerMenu();
    this.setActiveLink();
  }

  initHamburgerMenu() {
    const navIcon = this.querySelector('#nav-icon');
    const topNav = this.querySelector('.topnav');
    const navigationLinks = this.querySelector('.navigationlinks');
    
    navIcon.addEventListener('click', function() {
      navIcon.classList.toggle('active');
      topNav.classList.toggle('active');
      navigationLinks.classList.toggle('active');
      document.body.classList.toggle('scroll_fix');
    });
  }

  setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const links = this.querySelectorAll('.topnav li a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
}





class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <section class="dualCompartmentStackedLayout"> 
          <div class="singleCompartmentFlexContainerLayout">
            <div class="childElement">
              <p class="footerdescriptions2 mtb20"><span class="colorSec">SwertePlus Overview</span></p>
              <p class="footermetadescriptions">At the heart of our endeavor is a dedication to upholding core values that guide us in creating unmatched and innovative games. Our specialization lies in designing captivating online video slots and immersive fishing games. Our consistent release of groundbreaking titles sets us ahead of the curve, supported by our substantial and respected technical expertise acquired through our success story in the Philippine industry.</p>
            </div>
            <div class="childElement">
              <p class="footerdescriptions2 mtb20"><span class="colorSec">Quick Links</span></p>
              <div class="alignment2">
                <nav>
                  <ul class="colibri-menu2 topnav2">
                    <li><a href="index.html" id="home-link">HOME</a></li>
                    <li><a href="onlineslots.html" id="onlineslots-link">ONLINE SLOTS</a></li>
                    <li><a href="fishinggames.html" id="fishinggames-link">FISHING GAMES</a></li>
                    <li><a href="livecasino.html" id="livecasino-link">LIVE CASINO</a></li>
                    <li><a href="sports.html" id="sports-link">SPORTS</a></li>
                    <li><a href="deposit.html" id="deposit-link">DEPOSIT</a></li>
                    <li><a href="withdrawal.html" id="withdrawal-link">WITHDRAWAL</a></li>
                    <li><a href="promotion.html" id="promotion-link">PROMOTIONS</a></li>
                    <li><a href="downloads.html" id="downloads-link">DOWNLOADS</a></li>
                    <li><a href="news.html" id="news-link">NEWS</a></li>
                  </ul>
                </nav>
              </div>        
            </div>
            <div class="childElement">
              <p class="footerdescriptions2 mtb20"><span class="colorSec">Game Providers</span></p>
                <div class="logo-carousel2">
                  <img src="img/homepageProviderImages1.webp" alt="PANALOBET" title="PANALOBET" class="img_fit">
                  <img src="img/homepageProviderImages2.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                  <img src="img/homepageProviderImages3.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                  <img src="img/homepageProviderImages4.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                  <img src="img/homepageProviderImages5.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                  <img src="img/homepageProviderImages6.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
                </div>
              <p class="footerdescriptions2 mtb20"><span class="colorSec">Social Media Accounts</span></p>
              <div class="logo-carousel2 mtb10">
                <img src="img/safe2.png" alt="PANALOBET" title="PANALOBET">
                <img src="img/safe2.png" alt="PANALOBET" title="PANALOBET">
                <img src="img/safe3.png" alt="PANALOBET" title="PANALOBET">
              </div>
              <p class="footerdescriptions2 mtb20"><span class="colorSec">Gaming License</span></p>
              <div class="logo-carousel2">
                <img src="img/gaming-license.png" alt="PANALOBET" title="PANALOBET" class="img_fit">
              </div>
            </div>
          </div>
          <div class="solidDivider"></div>
          <div class="dualCompartment mtb20">
            <div class="alignment2">
              <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
            </div>
            <div class="dualCompartmentContainerStackedLayoutContents">
              <p class="footermetadescriptions">©2024 SwertePlus licensed by Philippine Amusement and Gaming Corporation</p>
            </div>  
          </div>

       
        </section>      
      </footer>
    `;
    
    this.setActiveLink();

  }
  setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const links = this.querySelectorAll('.topnav2 li a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }
}




customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
