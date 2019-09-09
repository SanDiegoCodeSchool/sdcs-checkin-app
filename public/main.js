function handleCheckin(e){
    console.log('Form was submitted.');
    e.preventDefault();
    const url = '/jscheckin';
    const data = {
        email: document.getElementById('email'),
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        phoneNumber: document.getElementById('phone-number'),
    };
    console.log(`about to send ${JSON.stringify(data)}`);
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => {
      console.error('Error:', error);
    });
  
  }