const getTextButton = document.getElementById('getText');
const output = document.getElementById('output');
const getUsersButton = document.getElementById('getUsers');
const getAPIDataButton = document.getElementById('getAPIData');
const addPostForm = document.getElementById('addPost');
const postTitle = document.getElementById('title');
const postBody = document.getElementById('body');

function getText() {
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            output.innerHTML = data;
        })
        .catch((err) => console.log(err));
}

getTextButton.addEventListener('click', getText);

function getUsers() {
    fetch('users.json')
        .then(res => res.json())
        .then(data => {
            let usersOutput = '<h2 class="mb-4">Users</h2>';
            data.forEach(user => {
                usersOutput += `
                <ul class='list-group mb-4'>
                    <li class='list-group-item'>ID: ${user.id}</li>
                    <li class='list-group-item'>ID: ${user.name}</li>
                    <li class='list-group-item'>ID: ${user.email}</li>
                </ul>
                `;
            });
            output.innerHTML = usersOutput;
        })
        .catch(err => console.log(err));
}

getUsersButton.addEventListener('click', getUsers);

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            let postsOutput = '<h2 class="mb-4">Posts</h2>';
            data.forEach(post => {
                postsOutput += `
                <div class='card card-body mb-3'>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
                `;
            });
            output.innerHTML = postsOutput;
        })
        .catch(err => console.log(err));
}

getAPIDataButton.addEventListener('click', getPosts);

function addPost(e) {
    e.preventDefault();

    let title = postTitle.value;
    let body = postBody.value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
        .then(res => res.json())
        .then(data => console.log(data));
}

addPostForm.addEventListener('submit', addPost);
