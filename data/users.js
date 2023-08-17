
const bcrypt=require('bcryptjs');
const users=[
    {
        name:"admin",
        email:"admin@xyz.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
    {
        name:"user",
        email:"user@xyz.com",
        password:bcrypt.hashSync("123456",10),
    },
    {
        name:"Agrima",
        email:"agrima@xyz.com",
        password:bcrypt.hashSync("123456",10),
    }
];
module.exports = users;
