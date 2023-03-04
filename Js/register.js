document.addEventListener('DOMContentLoaded', init)
const form = document.getElementById('register-form')

function init(){
form.addEventListener('submit', register);

// uplod image 
document.getElementById('upload-image').addEventListener('change', uploadImage);

}

function uploadImage(e) {
   const file =  console.log(e.target.files[0]);
   if (file) {
    
   }
}

 function register(e) {
    e.preventDefault()
    const formData = new FormData(form);

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const picture = formData.get('picture');

    console.log(username, email, password, picture );
 }

