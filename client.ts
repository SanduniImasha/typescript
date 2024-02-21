import { getUsersFromJsonFile } from './memberService';

async function displayUsersAsHtml() {
    // Get the user list div from the DOM
    const userListDiv = document.getElementById('userList');

    if (userListDiv) {
        // Fetch users from the server
        const users = await getUsersFromJsonFile();

        // Create a new unordered list element
        const userList = document.createElement('ul');

        // Iterate over the users and create list items for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the user list div
        userListDiv.appendChild(userList);
    } else {
        console.error('Element with ID "userList" not found.');
    }
}

// Call the function to display users when the DOM content is loaded
//document.addEventListener('DOMContentLoaded', displayUsersAsHtml);
if (typeof window !== 'undefined') {
    // Code that depends on the DOM
    document.addEventListener('DOMContentLoaded', displayUsersAsHtml);
}