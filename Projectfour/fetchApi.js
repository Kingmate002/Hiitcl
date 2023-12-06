const getInfo = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    const json = await response.json();
    console.log(response)
    if (response.ok) {
        console.log(json);
    }
}

const postInfo = async (url, data) => {

    // console.log(data)
    // console.log(JSON.stringify(data))
    // console.log(JSON.parse(JSON.stringify(data)))
    const response = await fetch(url, {
method: 'POST',
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(data)
});
const json = await response.json();
console.log(response)
if (response.ok) {
console.log(json);
}
}

// getInfo('https://jsonplaceholder.typicode.com/todos/1')
// getInfo('https://jsonplaceholder.typicode.com/posts')

let data = {
title: 'My First web trials',
body: 'bar',
userId: 1,
}
postInfo('https://jsonplaceholder.typicode.com/posts', data)