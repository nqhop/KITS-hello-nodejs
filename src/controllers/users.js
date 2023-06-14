const users = [
    {name: 'John', password: '', age: 26},
    {name: 'Lisa', password: '', age: 24}
]

function getAllUsers(req, res) {
    res.send(users);
}

// v1/getUserByNameAndAge?name=Name&age=20
function getUserByNameAndAge(req, res) {
    const { name, age } = req.query;
    console.log("Name: ", name);
    console.log("Age: ", age);
    res.send({
        name, age
    });
}

function createUser(req, res) {
    console.log('create user');
    const {username, password, age} = req.body;
    res.send({
        username,
        password,
        age
    })
}

function createManyUser(req, res) {
    const data = req.body;
    for(let item of data){
        users.push(item)
    }
    console.log(data);
    res.send(users);
}

module.exports = {
    getAllUsers,
    getUserByNameAndAge,
    createUser,
    createManyUser
}

// v1/user/:id
// => user = id

// vi/user?userAge=10&compare=eq&age=30
// => userAge ? 30
// if(compare == eq) {
//     get user co tuoi = 30
// }