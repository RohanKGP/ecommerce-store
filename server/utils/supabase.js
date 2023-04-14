const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Create a single supabase client for interacting with your database;
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function sendUserToDb(user) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ email_id: user.email, password: user.password }]);

  if (error) {
    console.log(error);
    return;
  }
}

async function getUsers(user) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email_id", user.email)
    .eq("password", user.password);

  if (error) {
    console.log(error);
    return error;
  } else if (data.length === 0) {
    // console.log("Invalid email or password");
    return "Invalid email or password";
  } else {
    // console.log("Login successful");
    return "Login successful";
    // Do something else, such as redirecting the user to a dashboard page
  }
}

async function getAllProducts() {
  const { data, error } = await supabase.from("products").select();

  if (error) {
    console.log(error);
    return;
  }

  return data;
}

module.exports = {
  sendUserToDb,
  getAllProducts,
  getUsers,
};
