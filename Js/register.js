document.addEventListener('DOMContentLoaded', init)
const form = document.getElementById('register-form');
const alert = document.querySelector('.alert')

function init() {
   form.addEventListener('submit', register);

   // uplod image 
   document.getElementById('upload-image').addEventListener('change', uploadImage);

}

uploadImage = (e) => {
   const label = document.querySelector('form .upload-image')
   const file = e.target.files[0];
   if (file) {
      const imageUrl = URL.createObjectURL(file);
      label.style.backgroundImage = `url(${imageUrl})`
   } else {
      label.style.backgroundImage = `url(../images/bg/avatar.jpg)`

   }
}

register = (e) => {
   e.preventDefault()
   const formData = new FormData(form);

   const username = formData.get('username');
   const email = formData.get('email');
   const password = formData.get('password');
   const picture = formData.get('picture');

   //  check inputs 
   if (validator.isEmpty(picture.name, { ignore_whitespace: true })) {
      showAlert("please choose a profile picture");
      return
   }

   if (validator.isEmpty(username, { ignore_whitespace: true })) {
      showAlert("please Enter your username");
      return
   }

   if (!validator.isLength(username, { min: 3, max: 40 })) {
      showAlert("Username should be atleast 3 characters");
      return;
   }

   if (validator.isEmpty(email, { ignore_whitespace: true })) {
      showAlert("please Enter your email");
      return
   }
   // Email validation 

   if (!validator.isEmail(email)) {
      showAlert('Enter a valid Email');
      return;
   }

   if (validator.isEmpty(password, { ignore_whitespace: true })) {
      showAlert("please Enter your password");
      return
   }
   if (!validator.isLength(password, { min: 5, max: 40 })) {
      showAlert("password should be atleast 5 characters");
      return;
   }

   const data = Object.fromEntries(formData);
   console.log(data)

   /**
   * ! Convert Image to base64 string
   */
   const reader = new FileReader();
   let image = null;
   reader.addEventListener('load', () => {
      image = reader.result;
      localStorage.setItem('user', JSON.stringify({...data, picture: image}));
   })
   reader.readAsDataURL(picture);
   setTimeout(() => {
      window.location = "login.html";
   }, 500);

}



showAlert = (message) => {
   alert.classList.add('error');
   alert.textContent = message;
   setTimeout(() => {
      alert.classList.remove('error');
   }, 3000)
}




