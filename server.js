// create express server
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// create routes for the application to fetch the details
app.get("/getOverview", (req, res) => {
  res.send([
    "Passionate Student | Aspiring Programmer | Data Analysis Enthusiast",
    "I believe in the power of continuous learning, and I'm constantly seeking opportunities to expand my knowledge and skill set.",
    "I am eager to contribute to innovative projects, connect with professionals, and further explore the exciting possibilities within the tech community. Let's connect and make meaningful strides together!",
  ]);
});

app.get("/getEdu", (req, res) => {
  res.send([
    "Computer Programming and Analysis, Co-op , Sept. 2022- Jan 2026",
    "Humber College, Etobicoke, ON",
    "Dean’s Honour List in Fall 2022, Winter 2023, Fall 2023.",
  ]);
});

app.get("/getExp", (req, res) => {
  res.send([
    [
      "./fitness.jpg",
      "Fitness & Meal Tracker",
      "Developed a user-friendly fitness and meal tracking application using MERN stack. Implemented MongoDB, Express.js, and Node.js for backend operations, ensuring secure user authentication and efficient data management. Utilized React.js for the frontend, creating a seamless interface that communicates with the backend via RESTful APIs. Successfully delivered a functional application enabling users to monitor and plan their fitness activities and meals",
      "https://github.com/TanishaManojkumarLad/Fitness-and-Meal-tracker",
    ],
    [
      "./bookstore.jpg",
      "Bookstore Application",
      "Led the development of a Django-based Bookstore application, implementing key functionalities such as user authentication, book listing, and CRUD operations. Created a responsive layout with a dynamic homepage displaying book details and links. Utilized Django Rest Framework to build API endpoints for retrieving book data. Implemented access restrictions for adding, editing, and deleting books, ensuring security. Enhanced user experience by incorporating conditional navigation elements. Proficiently managed book data using Django models and integrated error validation for registration and login",
      "https://github.com/TanishaManojkumarLad/bookstore",
    ],
    [
      "./personal.jpg",
      "Personal Portfolio",
      "Create a robust personal portfolio by developing a Node.js server using Express and MongoDB for backend data management. In the frontend, employ React along with CSS and React Bootstrap for a responsive and visually appealing design. Utilize MongoDB models to represent education, skills, and projects, allowing seamless retrieval and display of relevant information.",
      "https://github.com/TanishaManojkumarLad/onlineresume",
    ],
    [
      "./other.jpg",
      "Other small projects",
      "Store inventory, Bank application, chess game, AddressBook - Java, Weather application, To-do list, Online food applications - React.js, Bootstrap/React Native mobile application, Travel guide webapplication - HTML,CSS,Javascript, Bank application - Python, Customer-order analysis , School database analysis- MySQL",
      "https://github.com/TanishaManojkumarLad?tab=repositories",
    ],
  ]);
});

app.get("/getSkill", (req, res) => {
  res.send([
    ["./java.jpg", "Java"],
    ["./javascript.jpg", "JavaScript"],
    ["./python.jpg", "Python"],
    ["./html.jpg", "HTML"],
    ["./css.jpg", "CSS"],
    ["./react.jpg", "React.js"],
    ["./bootstrap.jpg", "Bootstrap"],
    ["./node.jpg", "Node.js"],
    ["./express.jpg", "Express.js"],
    ["./mongodb.jpg", "MongoDB"],
    ["./reactnative.jpg", "ReactNative"],
    ["./mysql.jpg", "MySQL"],
    ["./microsoft.jpg", "Microsoft office"],
    ["./github.jpg", "GitHub"],
  ]);
});

app.get("/getCertificate", (req, res) => {
  res.send([
    "JavaScript Algorithms and Data Structures -June 2023 – Aug. 2023",
    "FreeCodeCamp Certification Course",
    "Projects: Palindrome Checker, Roman Numeral Converter, Caesars Cipher, Telephone Number Validator, Cash Register",
  ]);
});

app.get("/getdetails", (req, res) => {
  res.send([
    "Tanisha Lad",
    "Toronto, Ontario",
    "Email : tanishalad27@gmail.com",
  ]);
});

// error handler for the server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong with the upload!");
});

// starting the server
app.listen(8000, () => {
  console.log("Server is running  on Port 8000");
});
