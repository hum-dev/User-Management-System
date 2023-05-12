// Select the form element
// const form = document.querySelector('form');
// const table = document.createElement("table");


// Add an event listener to the form submit button
// form.addEventListener('submit', function(event) {
  // Prevent the default form submission
//   event.preventDefault();


    // class User {
    //     constructor(username, idnumber, country, languages, password) {
    //         this.username = username;
    //         this.idnumber = idnumber;
    //         this.country = country;
    //         this.languages = languages;
    //         this.password = password;
    //     }
    // }

  // Select the form input fields
    // const username = document.getElementById('username').value;
    // const idnumber = document.getElementById('idnumber').value;
    // const country = document.getElementById('country').value;
    // const languages = document.getElementById('languages').value;
    // const password = document.getElementById('password').value;

    //create user
    // function createUser() {
    //     const username = username.value;
    //     const idnumber = idnumber.value;
    //     const country = country.value;
    //     const languages = languages.value;
    //     const password = password.value;

    //     if (username == "" || idNumber == "" || country == "" || languages == "" || password == "") {
    //         alert("Please fill all the inputs provided")
    //         return;
    //     }
    //     const user = new User(username, idnumber, country, languages, password);

    // }

    //create a new user
//     function createUser() {
//         const user = new User(username, idnumber, country, languages, password);
//         return user;
//     }

    


//   const formData = {
//     username,
//     idnumber,
//     country,
//     languages,
//     password
//   };


//   localStorage.setItem('formData', JSON.stringify(formData));

 
//   window.location.href = 'catl.html';
// });


  // Get the form and table elements
const form = document.querySelector('.form');
const table = document.querySelector('#table-container tbody');

// Add event listener to the form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form input values
  const username = document.querySelector('#username').value;
  const idNumber = document.querySelector('#idnumber').value;
  const country = document.querySelector('#country').value;
  const language = document.querySelector('#languages').value;

  // Create a new row in the table
  const newRow = table.insertRow(-1);

  // Insert the form input values into the new row
  const usernameCell = newRow.insertCell(0);
  usernameCell.textContent = username;

  const idNumberCell = newRow.insertCell(1);
  idNumberCell.textContent = idNumber;

  const countryCell = newRow.insertCell(2);
  countryCell.textContent = country;

  const languageCell = newRow.insertCell(3);
  languageCell.textContent = language;

  // Reset the form
  form.reset();
});

  