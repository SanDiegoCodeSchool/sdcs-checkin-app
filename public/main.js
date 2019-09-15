function handleCheckin(e) {
  console.log('Form was submitted.');
  // e.preventDefault();
  const url = '/jscheckin';
  const data = {
    email: document.getElementById('email').value,
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    phoneNumber: document.getElementById('phone-number').value,
  };
  console.log(`about to send ${JSON.stringify(data)}`);
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
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
