const User = require('../models/User');

// @desc Register new user
// @route POST /api/users
// @access PUBLIC

const createUser = async(req, res)=>{
    if(!req.body.name || !req.body.email || !req.body.password) res.status(404).send("Not Found");
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const result = await user.save();
    res.status(200).send(result);
}
// @desc get users
// @route GET /api/users
// @access PUBLIC

const getUsers = async (req, res) =>{
    const result = await User.find();
    res.send(result);
}

// @desc get user by name
// @route GET /api/userbyname
// @access PUBLIC

const getUserByName = async (req, res) =>{
    const result = await User.find({name: req.body.name});
    res.send(result);
}

// @desc get user by ID
// @route GET /api/user/:id
// @access PUBLIC

const getUserById = async (req, res) =>{
    const result = await User.find({_id: req.params.id });
    res.send(result);
}

module.exports = {
    createUser,
    getUsers,
    getUserByName,
    getUserById
}