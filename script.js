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

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

var todosLength = todos.length;

for (var i=0; i < todosLength; i++) {
    console.log(i);
}

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);