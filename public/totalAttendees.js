function createView(attendees) {
  // build out the event attendance array
  // this is a tricky. This code builds an object
  // with a key of 'Name of event' : number of attendees
  // the trick is that if it finds 'this' key then it increments
  // the count. If it does not find 'this' key, then it inserts
  // a new object with a value of 0.
  // at the end of the forEach we are left with an object that is
  // keyed with the event.title and the number of attendees that have checked in
  let eventAttendance = {};
  attendees.forEach(attendee => {
    eventAttendance[attendee.event.title] =
      (eventAttendance[attendee.event.title] || 0) + 1;
  });

  console.log(eventAttendance);

  // get addressability to the table element
  let table;
  table = document.getElementById("total-attendees-table");

  // create the table headers first
  let tr, td;
  tr = document.createElement("tr");
  th = document.createElement("th");
  th.innerHTML = "Event Name";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Total Attendees";
  tr.appendChild(th);

  // push the tr element onto table
  table.appendChild(tr);

  // create a table body element
  let tableBody;
  tableBody = document.createElement("tbody");

  // iterate through eventAttendacne obect by keys
  // this is tricky as the key will be the event title
  // from the input data
  Object.keys(eventAttendance).map(event => {
    tr = document.createElement("tr");
    td = document.createElement("td");

    // get the event title for first column
    td.appendChild(document.createTextNode(`${event}`));
    tr.appendChild(td);

    td = document.createElement("td");

    // get the value from this element it will be the count
    // of the number of attendees who have checked in.
    td.appendChild(document.createTextNode(`${eventAttendance[event]}`));
    tr.appendChild(td);

    tableBody.appendChild(tr);
  });

  table.appendChild(tableBody);
}

fetch("/api/attendees")
  .then(response => response.json())
  .then(result => createView(result))
  .catch(error => console.log(error));
