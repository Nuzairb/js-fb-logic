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
    },
    {
        username: "john",
        password: "123456"
    },
    {
        username: "doe",
        password: "1234"
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

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn(username, password) {
    if (isUserValid(username, password)) {
            console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your Password?");

signIn(userNamePrompt, passwordPrompt);