const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit-form", (req, res) => {
  const { studentName, branch, year } = req.body;
  res.send(
    `Student Name: ${studentName}<br>Branch: ${branch}<br>Year: ${year}`
  );
});

app.get("/about", (req, res) => {
  res.send("Name: John Doe\nRoll No: 23\nCourse: Computer Engineering");
});

app.get("/contact", (req, res) => {
  res.send("Email: john.doe@example.com");
});

app.post("/register", (req, res) => {
  res.status(201).send("Created");
});

app.put("/update", (req, res) => {
  res.status(200).send("Updated");
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    name: "Joshua",
    branch: "Computer Engineering",
    year: "SE",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
