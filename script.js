
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container"); 

// sign_up_btn.addEventListener("click", () => {       container.classList.add("sign-up-mode");
// }); 

// sign_in_btn.addEventListener("click", () => {       container.classList.remove("sign-up-mode");
// });


document.addEventListener('DOMContentLoaded', function() {  
  const loginForm = document.querySelector('.sign-in-form');  
  const signupForm = document.querySelector('.sign-up-form');  
  const loginBtn = document.querySelector('#sign-in-btn');  
  const signupBtn = document.querySelector('#sign-up-btn');  
  const container = document.querySelector('.container');  
  
  loginForm.addEventListener('submit', async function(event) {  
    event.preventDefault();  
    const formData = new FormData(loginForm);  
    const username = atob(formData.get('username'));  
    const password = formData.get('password');  
    const passwordHash = await sha256(password);  
  
    try {  
      const response = await fetch('https://api.thinkerrs.com/login/test', {  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({ username, password: passwordHash }),  
      });  
  
      if (response.ok) {  
        const data = await response.json();  
        console.log(data);  
        // Do something with the response data  
      } else {  
        console.error('Error:', response.statusText);  
      }  
    } catch (error) {  
      console.error('Error:', error);  
    }  
  });  
  
  signupForm.addEventListener('submit', function(event) {  
    event.preventDefault();  
    callEndpoint('/register/test');  
  });  
  
  loginBtn.addEventListener('click', function() {  
    container.classList.remove('sign-up-mode');  
  });  
  
  signupBtn.addEventListener('click', function() {  
    container.classList.add('sign-up-mode');  
  });  
  
  async function sha256(message) {  
    const msgBuffer = new TextEncoder().encode(message);  
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);  
    const hashArray = Array.from(new Uint8Array(hashBuffer));  
    const hashHex = hashArray.map((b) => ('00' + b.toString(16)).slice(-2)).join('');  
    return hashHex;  
  }  
  
  function callEndpoint(endpoint) {  
    // Replace this with your actual code to make a network request to the specified endpoint  
    console.log('Calling endpoint:', endpoint); 
    

  }  
});  
