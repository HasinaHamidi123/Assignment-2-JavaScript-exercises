const getBtn = document.getElementById('getBtn');
const postBtn = document.getElementById('postBtn');
const putBtn = document.getElementById('putBtn');
const deleteBtn = document.getElementById('deleteBtn');

const getResult = document.getElementById('getResult');
const postResult = document.getElementById('postResult');
const putResult = document.getElementById('putResult');
const deleteResult = document.getElementById('deleteResult');

// Base URL for the API (replace with your API endpoint)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// GET Request
getBtn.addEventListener('click', async () => {
    try {
        const response = await fetch(`${apiUrl}?_limit=10`); // Limit to 10 results for better readability
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        getResult.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        getResult.innerText = `Error: ${error.message}`;
    }
});

// POST Request
postBtn.addEventListener('click', async () => {
    const postData = {
        title: 'foo',
        body: document.getElementById('postInput').value,
        userId: 1
    };

    if (!postData.body) {
        postResult.innerText = 'Please enter a valid body text.';
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        postResult.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        postResult.innerText = `Error: ${error.message}`;
    }
});

// PUT Request
putBtn.addEventListener('click', async () => {
    const putData = {
        title: 'updated title',
        body: document.getElementById('putInput').value,
        userId: 1
    };

    const postId = 1; // Assuming you want to update post with ID 1

    if (!putData.body) {
        putResult.innerText = 'Please enter a valid body text.';
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(putData)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        putResult.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        putResult.innerText = `Error: ${error.message}`;
    }
});

// DELETE Request
deleteBtn.addEventListener('click', async () => {
    const postId = document.getElementById('deleteId').value;

    if (!postId) {
        deleteResult.innerText = 'Please enter a valid ID to delete.';
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/${postId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            deleteResult.innerText = `Post with ID ${postId} deleted successfully.`;
        } else {
            deleteResult.innerText = `Failed to delete post with ID ${postId}.`;
        }
    } catch (error) {
        deleteResult.innerText = `Error: ${error.message}`;
    }
});