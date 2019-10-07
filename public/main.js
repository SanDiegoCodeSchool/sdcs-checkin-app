function handleCheckin(e) {
  var eventId = document.getElementById('event_dropdown').value;
  const attendeeInfo = {
    email: document.getElementById('email').value,
    first_name: document.getElementById('first-name').value,
    last_name: document.getElementById('last-name').value,
    phone_number: document.getElementById('phone-number').value,
    event: {
      id: eventId,
      title: document.getElementById('event_dropdown')[eventId].textContent,
    },
  };

  fetch('/api/Attendees', {
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
