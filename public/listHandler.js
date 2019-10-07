function createView(attendees){
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    let tr, td;
    attendees.map(attendee => {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.appendChild(document.createTextNode(`${attendee.event} ${attendee.first_name} ${attendee.last_name} ${attendee.email} ${attendee.phone_number}  `));
        tr.appendChild(td);
        tableBody.appendChild(tr);
    });
console.log(attendees)
    table.appendChild(tableBody)
    document.body.appendChild(table);  
}

fetch('/api/attendees')
    .then(response => response.json())
    .then(result=> (createView(result))
    
    )