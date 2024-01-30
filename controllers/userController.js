const userModel = require("../models/userModel");
const UserModel = require("../models/userModel");

const createUser = (req, res) => {
  const user = UserModel({
    id: req.body.id,
    name: req.body.name,
    company: req.body.company,
  });

  user
    .save()
    .then(() => {
      res.status(200).json({ message: "User created successfully." });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error saving data." });
    });
};

const getUser = async (req, res) => {
  const user = UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, company } = req.body;

  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { id: userId },
      {
        $set: {
          name,
          company,
        },
      },
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res
      .status(200)
      .json({ message: "User updated successfully.", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Error updating user." });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  if (userId) {
    const user = userModel
      .findOneAndDelete({ id: userId })
      .then(res.status(200).json({ message: "User deleted successfully." }))
      .catch((error) => {
        res.status(500).json({ error: "Error deleting data." });
      });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
