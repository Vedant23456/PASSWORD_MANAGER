const entryForm = document.getElementById('entryForm');
const entryList = document.getElementById('entryList');
const entries = [];

entryForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('Password').value;

    if (entries.editIndex !== undefined) {
       
        entries[entries.editIndex] = { firstName, lastName, password};
        entries.editIndex = undefined;
    } else {
       
        entries.push({ firstName, lastName, password });
    }

    displayEntries();
    entryForm.reset();
});

function displayEntries() {
    entryList.innerHTML = '';

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>firstName:</strong> ${entry.firstName}<br>
            <strong>lastName:</strong> ${entry.lastName}<br>
            <strong>Password:</strong> ${entry.password}<br>
            <button onclick="editEntry(${i})">Edit</button>
            <button onclick="deleteEntry(${i})">Delete</button>
        `;

        entryList.appendChild(listItem);
    }
}

function editEntry(index) {
    const entry = entries[index];
    document.getElementById('firstName').value = entry.firstName;
    document.getElementById('lastName').value = entry.lastName;
    document.getElementById('password').value = entry.password;
    entries.editIndex = index;
}

function deleteEntry(index) {
    entries.splice(index, 1);
    displayEntries();
}

displayEntries();
