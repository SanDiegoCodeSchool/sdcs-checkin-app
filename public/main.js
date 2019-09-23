function getLocation() {
  let loc = [];
  if (navigator.geolocation) {
    let coord = navigator.geolocation.getCurrentPosition((Position) => Position.coords.latitude);
    loc.push(coord);
    console.log(loc);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function handleCheckin() {
  const attendeeInfo = {
    email: document.getElementById('email').value,
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    phoneNumber: document.getElementById('phone-number').value,
  };

  fetch('/jscheckin', {
    method: 'POST',
    body: JSON.stringify(attendeeInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => {
      console.error('Error:', error);
    });

}
