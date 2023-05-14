// Select the form element
// const form = document.querySelector('form');
const table = document.createElement("table");
const createUserBtn = document.querySelector(".btn");
const form = document.forms["form"];


// Add an event listener to the form submit button
form.addEventListener('submit', function(event) {
//   Prevent the default form submission
  event.preventDefault();

});

    class User {
        constructor(username, idnumber, country, languages) {
            this.username = username;
            this.idnumber = idnumber;
            this.country = country;
            this.languages = languages;
            
        }
    }

//   Select the form input fields
    const username = document.getElementById('username').value;
    const idnumber = document.getElementById('idnumber').value;
    const country = document.getElementById('country').value;
    const languages = document.getElementById('languages').value;
    

    // create user
    function createUser() {
        const username = username.value;
        const idnumber = idnumber.value;
        const country = country.value;
        const languages = languages.value;
      

        if (username == "" || idNumber == "" || country == "" || languages == "" || password == "") {
            alert("Please fill all the inputs provided")
            return;
        }
        const user = new User(username, idnumber, country, languages, password);

    }

    // create a new user
    function createUser() {
        const user = new User(username, idnumber, country, languages);
        return user;
    }

    


    const users = [
      { username: "User Name", idnumber: "1", country: "Kenya" },
      { username: "Humphrey", idnumber: "2", country: "Uganda" },
      { username: "Henry", idnumber: "3", country: "Tanzania" },
      { username: "Kimathi", idnumber: "4", country: "Rwanda" },

    ]

  localStorage.setItem('users', JSON.stringify(users));
  const clearForm = () => {
    form.elements.username.value = "";
    form.elements.country.value = "";
    form.elements.idnumber.value = "";
    // Redirect
    setTimeout(() => {
      location.href = "Admin.html";
    }, 1000);
  };
  createUserBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username == "" || idNumber == "" || country == "" || languages == "" || password == "") {
      alert("Please fill all the inputs provided")
  } else {
      const username = form.elements.username.value;
      const idnumber = form.elements.idnumber.value;
      const country = form.elements.country.value;
  
      const user = {
        name: username,
        id: idnumber,
        country: country,
      };
      users.push(user);
      const json_data = JSON.stringify(users);
      localStorage.setItem("users", json_data);
  
      clearForm(); //Clear form
    }

 
  window.location.href = 'catl.html';
});


  // Get the form and table elements
// const form = document.querySelector('.form');
// const table = document.querySelector('#table-container tbody');

// Add event listener to the form submission
// form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
//   event.preventDefault();

  // Get the form input values
//   const username = document.querySelector('#username').value;
//   const idNumber = document.querySelector('#idnumber').value;
//   const country = document.querySelector('#country').value;
//   const language = document.querySelector('#languages').value;

  // Create a new row in the table
//   const newRow = table.insertRow(-1);

  // Insert the form input values into the new row
//   const usernameCell = newRow.insertCell(0);
//   usernameCell.textContent = username;

//   const idNumberCell = newRow.insertCell(1);
//   idNumberCell.textContent = idNumber;

//   const countryCell = newRow.insertCell(2);   
//   countryCell.textContent = country;

//   const languageCell = newRow.insertCell(3);
//   languageCell.textContent = language;

  // Reset the form
//   form.reset();
// });

  