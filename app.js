const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// Environment constants
const {
  PORT = 3000,
  CLUSTER_NAME = "cluster0",
  DATABASE_NAME = "dataBase1",
  DB_USERNAME = "avichai-first-user",
  DB_PASSWORD = "test1234",
} = process.env;

// Initialize the MongoDB connection
const initializeDatabase = async (dbURI) => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("------Connected to the DB------");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

// Initialize the express application
const initializeApp = () => {
  const app = express();

  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));

  // Routes
  app.get("/", (req, res) => res.redirect("/blogs"));
  app.get("/about", (req, res) => res.render("about", { title: "About" }));
  app.get("/contactUs", (req, res) => res.render("contactUs", { title: "Contact Us" }));
  app.use("/blogs", blogRoutes);
  app.use((req, res) => res.status(404).render("404", { title: "404" }));

  return app;
};

// Bootstrap the application
const main = async () => {
  const dbURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${CLUSTER_NAME}.ukkmgu7.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;
  await initializeDatabase(dbURI);

  const app = initializeApp();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main();
