let users = [

    { name: "Ahmed", email: "ahmed@example.com", type: "admin" },
    { name: "Sara", email: "sara@example.com", type: "user" },
    { name: "Omar", email: "omar@example.com", type: "user" },
    { name: "Mona", email: "mona@example.com", type: "admin" },
    { name: "Khaled", email: "khaled@example.com", type: "user" },
    { name: "Hoda", email: "hoda@example.com", type: "user" },
    { name: "Youssef", email: "youssef@example.com", type: "admin" },
    { name: "Laila", email: "laila@example.com", type: "user" },
    { name: "Ali", email: "ali@example.com", type: "user" },
    { name: "Nour", email: "nour@example.com", type: "user" }
]
let adminCount = 0
let userCount = 0
users.forEach(function (user) {
    if (user.type === "admin") {
        adminCount++;
    }
    if (user.type === "user") {
        userCount++;
    }
});
console.log(" the number of user is " + userCount + " and the number of admin is  " + adminCount)