const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.post("/submit", (req, res) => {
  const { studentName, branch, year } = req.body;
  res.render("postlab1", {
    heading: "Submitted Information",
    studentName,
    branch,
    year,
  });
});

app.get("/postlab1", (req, res) => {
  res.render("postlab1", {
    heading: "Student Profile",
    studentName: "Joshua",
    branch: "Computer Engineering",
    year: "SE",
  });
});

app.get("/postlab2", (req, res) => {
  res.render("Post-Lab2", {
    title: "Post-Lab 2",
    message: "Dynamic Page Rendering using EJS is working.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
