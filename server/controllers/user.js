const { sendUserToDb } = require("../utils/supabase");

async function sendToDb(user) {
  sendUserToDb(user);
}

const loginUser = (req, res) => {
  // Todo : sends user data from database to client
  // getting email and password from login button

  const user = req.body;
  console.log(user);
};

const addUser = (req, res) => {
  // Todo : saves user information to redis
  // Getting Email and Password from Sign Up Button
  const user = req.body;

  if (!user.email || !user.password) {
    return res.status(200).json({ message: "Invalid user data" });
  }

  sendToDb(user);
  return res.status(200).json({
    message: "Users added successfully",
    success: true,
  });
};

module.exports = {
  loginUser,
  addUser,
};
