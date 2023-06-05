const path = require('path');

const User = require('../models/user');

exports.postAddUser = async (req, res, next) => {
  try {
    const userName = req.body.userName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;

    const data = await User.create({
      userName: userName,
      phoneNumber: phoneNumber,
      email: email
    });

    res.status(201).json({ user: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const userData = await User.findAll();
    res.send(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.putEditUser = async (req, res, next) => {
  const userId = req.params.id;
  const updatedName = req.body.userName;
  const updatedNumber = req.body.phoneNumber;
  const updatedEmail = req.body.email;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.userName = updatedName;
    user.phoneNumber = updatedNumber;
    user.email = updatedEmail;

    await user.save();
    console.log('USER UPDATED');
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    console.log('USER DESTROYED');
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
