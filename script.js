var database = [
    {
        username: "Nuzair",
        password: "supersecret"
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

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your Password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);