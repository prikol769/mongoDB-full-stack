const express = require("express");
const conn = require("./db/conn");
const app = express();
const fruitRoutes = require("./routes/fruits");
const Fruit = require("./models/fruit");
const starterFruits = require("./db/seed");
require("dotenv").config();

const PORT = process.env.PORT;

conn();

app.use(express.json());

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/api/fruits", fruitRoutes);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/fruits/seed", async (req, res) => {
  try {
    await Fruit.deleteMany({});
    await Fruit.create(starterFruits);
    res.json(starterFruits);
  } catch (error) {
    console.log(
      `Something went wrong with connect to the database ${error.message}`
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
