function handleCheckin(e) {
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
    .then(res => window.location.replace("confirmation.html"))
    .catch(error => {
      console.error('Error:', error);
    });

}
