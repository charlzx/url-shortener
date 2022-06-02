const form = document.querySelector('#form')
const label = document.querySelector('#label')
const input = document.querySelector('#form > div > input[type="text"]')
const error = document.querySelector('#error')
const shortLinks = document.querySelector('#short-links')
const loader = document.querySelector('#loader')

let inputLink;

input.style.border = '3px solid transparent'


class Link {
   async sendInput (url){
      loader.style.display = "block";

      let request = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)


      let response = await request.json()

      return response;
   }
}

form.addEventListener('submit', (e) => {
   inputLink = input.value

   input.value = ""

   let newLink = new Link

   if (inputLink.length > 0) {

      newLink.sendInput(inputLink)
      .then(data => {
         // console.log(data)
         loader.style.display = "none";


         if (data.ok === true){
            shortLinks.innerHTML += `
            <div class="shortLinks">
               <p>${data.result.original_link}</p>
               
               <hr>
               
               <div>
                  <a href="https://${data.result.short_link}" target="_blank">${data.result.short_link}</a>
                  <button class="copy-link">Copy</button>
               </div>
            </div>
            `

            storeLinks(data)
         }

         // display errors
         if (data.ok === false && data.error_code === 2){
            error.innerHTML = "This is not a valid URL"
            
            error.style.display = "block"
         } else if (data.ok === false && data.error_code === 3){
            error.innerHTML = "Rate limit reached. Wait a second and try again"
            
            error.style.display = "block"
         } else if (data.ok === false && data.error_code === 6){
            error.innerHTML = "Unknown Error."
            
            error.style.display = "block"
         } else if (data.ok === false && data.error_code === 10){
            error.innerHTML = "You are trying to shorten a <a href='https://shrtco.de/disallowed' target='_blank'>disallowed Link.</a>"
            
            error.style.display = "block"
         } else if (data.ok === false) {
            error.innerHTML = "Unknown Error."
            
            error.style.display = "block"
         }

         // display the error for only 3 secs
         if (data.ok === false){
            setTimeout(function(){
               error.innerHTML = ""
               error.style.display = "none"
            }, 5000)
         }

      })
      .catch(err => {
         loader.style.display = "none";

         console.log(err)

         error.innerHTML = "Error: You're not connected to the Internet"
         error.style.display = "block"


         setTimeout(function(){
            error.innerHTML = ""
            error.style.display = "none"
         }, 5000)
      })
      
   } else {
      input.style.border = '3px solid red'
      label.innerHTML = 'The Input field is empty'

      setTimeout(function (){
         input.style.border = '3px solid transparent'
         label.innerHTML = ''
      }, 5000)
   }

   e.preventDefault();
})

document.body.addEventListener('click', (e) => {
   if(e.target.classList.contains("copy-link")){
      
      let copyText = e.target.previousElementSibling.href

      // copy the short link to clipboard
      navigator.clipboard.writeText(copyText)

      e.target.innerHTML = "Copied!"
      e.target.style.backgroundColor = "hsl(257, 27%, 26%)"

      setTimeout(() => {
         e.target.innerHTML = "Copy"
         e.target.style.backgroundColor = ""
      }, 1500)
   }
})

function storeLinks (link){
   let linksInLS; // tasks in session storage

   if (sessionStorage.getItem('links') === null) {
      linksInLS = []
   } else {
      linksInLS = JSON.parse(sessionStorage.getItem('links'))
   }

   linksInLS.push(link)

   sessionStorage.setItem('links', JSON.stringify(linksInLS))
}

// display links in session storage
document.addEventListener('DOMContentLoaded', () => {
   let linksInLS; // tasks in session storage

   if (sessionStorage.getItem('links') === null) {
      linksInLS = [];
   } else {
      linksInLS = JSON.parse(sessionStorage.getItem('links'))
   }

   linksInLS.forEach(function(link){
      shortLinks.innerHTML += `
      <div class="shortLinks">
         <p>${link.result.original_link}</p>
         
         <hr>
         
         <div>
            <a href="https://${link.result.short_link}" target="_blank">${link.result.short_link}</a>
            <button class="copy-link">Copy</button>
         </div>
      </div>
      `
   })
})
