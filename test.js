const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://ranijamuna031_db_user:YOUR_PASSWORD@cluster0.ua4eylu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
  });