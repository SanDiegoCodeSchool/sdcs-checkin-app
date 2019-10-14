function createView(attendees) {
    let tr, td;
    let tableBody = document.getElementById('table-body');

    attendees.map(attendee => {
        tr = document.createElement('tr');
        td = document.createElement('td');

        td.appendChild(document.createTextNode(`${attendee.first_name}`));
        tr.appendChild(td);

        td = document.createElement('td');

        td.appendChild(document.createTextNode(`${attendee.last_name}`));
        tr.appendChild(td);

        td = document.createElement('td');

        td.appendChild(document.createTextNode(`${attendee.email}`));
        tr.appendChild(td);

        td = document.createElement('td');

        td.appendChild(document.createTextNode(`${attendee.phone_number}`));
        tr.appendChild(td);

        td = document.createElement('td');

        td.appendChild(document.createTextNode(`${attendee.event.title}`));
        tr.appendChild(td);

        tableBody.appendChild(td);
    });
}

function createList(attendees) {
     let tr, td;
     let tableBody = document.getElementById('table-body');
     attendees.map(attendee => {
         tr = document.createElement('tr');
         td = document.createElement('td');
         td.appendChild(document.createTextNode(`${attendee.id}`));
         tr.appendChild(td);
         td = document.createElement('td');
         tableBody.appendChild(td);
     })
}

fetch('/api/attendees')
  .then(response => response.json())
  .then(result => (createView(result))
  )
  .catch(error => console.log(error));
