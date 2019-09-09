function studentClick(event){
    event.preventDefault();
  
    const url = '/jscheckin';
    const data = {
        email: document.getElementById('email'),
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        phoneNumber: document.getElementById('phone-number'),
    };
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    
    .catch(error => {
      console.error('Error:', error);
    });
  
  }