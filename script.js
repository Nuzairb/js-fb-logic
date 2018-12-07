var database = [
    {
        username: "Nuzair",
        password: "supersecret"
    }, 
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Nuzy",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "JavaScript is soo cool!"
    }
];



function signIn(username, password) {
    if (username === database[0].username && 
        password === database[0].password) {
            console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your Password?");

signIn(userNamePrompt, passwordPrompt);