const { sendUserToDb } = require("../utils/supabase");
const { getUsers } = require("../utils/supabase");

async function sendToDb(user) {
  sendUserToDb(user);
}

async function loginUser(req, res) {
  const user = req.body;

  var value = await getUsers(user);

  if (value == "Invalid email or password") {
    return res.status(200).json({
      message: value,
    });
  } else {
    return res.status(200).json({
      message: value,
      success: true,
    });
  }
}

const addUser = (req, res) => {
  // Todo : saves user information to supabase
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
