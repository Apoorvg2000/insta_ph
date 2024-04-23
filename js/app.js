let screenIndex = 0

function SwitchScreen() {

  const screens = document.querySelectorAll('.screen')
  // const submitButton = document.getElementById('submitButton');

  for (i = 0; i < screens.length; i++) {
    screens[i].style.display = "none"
  }
  
  screenIndex++

  if (screenIndex > screens.length) {
      screenIndex = 1
    }

  screens[screenIndex-1].style.display = "block"
  setTimeout(SwitchScreen, 2500)

  // // Handle form submission
  // submitButton.addEventListener('click', function(event) {
  //   // event.preventDefault(); // Prevent default form submission behavior

  //   // Get values from form inputs
  //   const username = document.getElementById('username').value;
  //   const password = document.getElementById('password').value;

  //   // Create an object with the data to be sent to the server
  //   const formData = {
  //       username: username,
  //       password: password
  //   };

  //   console.log("1111111hereeeeeeeeeeeeeeee")

  //   // Send data to the server using AJAX (Assuming you have a server-side endpoint)
  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //   .then(response => {
  //       if (response.ok) {
  //           console.log('Data sent successfully');
  //           window.location.href = 'https://www.instagram.com/reel/C4TCwGfv1WO/?utm_source=ig_web_copy_link';
  //       } else {
  //           console.error('Error occurred while sending data');
  //       }
  //   })
  //   .catch(error => {
  //       console.error('Error:', error);
  //   });
  // });

}