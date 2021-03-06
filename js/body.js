document.body.innerHTML = `
   <header>
   <img src="images/logo.svg" alt="logo of company">

   <a class="toggle">
   <span class="bar"></span>
   <span class="bar"></span>
   <span class="bar"></span>
   </a>

   <div class="nav">
   <ul>
      <li>Features</li>
      <li>Pricing</li>
      <li>Resources</li>
   </ul>

   <div>
      <button>Login</button> <br>
      <button>Sign Up</button>
   </div>
   </div>
   </header>

   <section id="one">
   <div>
   <h1>More than just <br> shorter links</h1>
   <p>
      Build your brand’s recognition and get detailed insights on how your links are performing.
   </p>
   <button>Get Started</button>
   </div>

   <div>
   <img src="images/illustration-working.svg" alt="illustration of someone working with a computer">
   </div>
   </section>

   <section id="two">
   <div>
   <form id="form">
      <p id="label"></p>
      <div>
         <input type="text" id="link-input" placeholder="Shorten a link here...">
         <button type="submit">Shorten It!</button>
      </div>
   </form>

   <div id="error"></div>
   <div id="loader">
      <img src="images/loading.svg" draggable="false">
   </div>
   <div id="short-links"></div>

   <div class="heading">
      <h1>Advanced Statistics</h1>
      <p>Track how your links are performing across the web with <br> our advanced statistics dashboard.</p>
   </div>

   <div class="about">
      <div>
         <div class="imageDiv"><img src="images/icon-brand-recognition.svg" alt="brand recognition icon"></div>

         <div class="textDiv">
         <h3>Brand Recognition</h3>
         <p>
            Boost your brand recognition with each click. 
            Generic links don’t mean a thing. 
            Branded links help instil confidence in your content.
         </p>
         </div>
      </div>

      <span></span>

      <div>
         <div class="imageDiv"><img src="images/icon-detailed-records.svg" alt="detailed records icon"></div>

         <div class="textDiv">
         <h3>Detailed Records</h3>
         <p>
            Gain insights into who is clicking your links. 
            Knowing when and where people engage with your content helps inform better decisions.
         </p>
         </div>
      </div>

      <span></span>

      <div>
         <div class="imageDiv"><img src="images/icon-fully-customizable.svg" alt="fully customizable icon"></div>

         <div class="textDiv">
         <h3>Fully Customizable</h3>
         <p>
            Improve brand awareness and content discoverability through customizable links, 
            supercharging audience engagement.
         </p>
         </div>
      </div>
   </div>
   </div>
   </section>

   <section id="three">
   <h1>Boost your links today</h1>
   <button>Get Started</button>
   </section>

   <footer>
   <div>
   
   <img src="images/logo.svg" alt="">

   <ul>
      <h4>Features</h4>
      <li>Link Shortening</li>
      <li>Branded Links</li>
      <li>Analytics</li>
   </ul>

   <ul>
      <h4>Resources</h4>
      <li>Blog</li>
      <li>Developers</li>
      <li>Support</li>
   </ul>

   <ul>
      <h4>Company</h4>
      <li>About</li>
      <li>Our Team</li>
      <li>Careers</li>
      <li>Contact</li>
   </ul>

   <ul>
      <li><img src="images/icon-facebook.svg" alt="facebook logo"></li>
      <li><img src="images/icon-twitter.svg" alt="twitter logo"></li>
      <li><img src="images/icon-pinterest.svg" alt="pinterest logo"></li>
      <li><img src="images/icon-instagram.svg" alt="instagram logo"></li>
   </ul>
   </div>
   </footer>


`