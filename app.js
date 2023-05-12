// Select the form element
const form = document.querySelector('form');


// Add an event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();


    class User {
        constructor(username, idnumber, country, languages, password) {
            this.username = username;
            this.idnumber = idnumber;
            this.country = country;
            this.languages = languages;
            this.password = password;
        }
    }

  // Select the form input fields
    const username = document.getElementById('username').value;
    const idnumber = document.getElementById('idnumber').value;
    const country = document.getElementById('country').value;
    const languages = document.getElementById('languages').value;
    const password = document.getElementById('password').value;

    //create user
    function createUser() {
        const username = username.value;
        const idnumber = idnumber.value;
        const country = country.value;
        const languages = languages.value;
        const password = password.value;

    }

    //create a new user
    function createUser() {
        const user = new User(username, idnumber, country, languages, password);
        return user;
    }



  const formData = {
    username,
    idnumber,
    country,
    languages,
    password
  };


  localStorage.setItem('formData', JSON.stringify(formData));

 
  window.location.href = 'catl.html';
});
