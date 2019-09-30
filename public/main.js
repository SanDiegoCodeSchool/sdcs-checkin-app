function handleCheckin(e) {
  const attendeeInfo = {
    email: document.getElementById("email").value,
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    phoneNumber: document.getElementById("phone-number").value
  };

  // let total=document.getElementById('total-checkins')

  fetch("/api/Attendees", {
    method: "POST",
    body: JSON.stringify(attendeeInfo),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => window.location.replace("confirmation.html"))
    .catch(error => {
      console.error("Error:", error);
    });
}

// fetch("/api/Attendees", {
//   method: "GET",
//   body: JSON.stringify(attendeeInfo),
//   headers: {
//     "Content-Type": "application/json"
//   }
// })

  // .then(response => response.json())
  // .then(data => {
  //   for (const users of data.events) {
  //     let total =data.events.length;
  //   }
  //   console.log(total,users);
  // });
