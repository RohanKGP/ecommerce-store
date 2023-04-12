const { createClient } = require("@supabase/supabase-js");

// Create a single supabase client for interacting with your database;
const supabase = createClient(
  "https://bacedsdzgopyongjyrkr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhY2Vkc2R6Z29weW9uZ2p5cmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyNDUzNzcsImV4cCI6MTk5NjgyMTM3N30.nkLls2D-asBYfHdtY0Rrf_j0lnh-DFTE8Ek0y6HpCXw"
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
};
