<<<<<<< HEAD
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const productsRouter = require("./routes/products");

// const app = express();
// const PORT = 5003;
// const MONGO_URI = "mongodb://127.0.0.1:27017/productdb";

// app.use(cors());
// app.use(express.json());

// app.use("/api/products", productsRouter);

// mongoose
//   .connect(MONGO_URI)
//   .then(() => {
//     console.log("Connected to MongoDB:", MONGO_URI);
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err.message);
//     process.exit(1);
//   });
=======
>>>>>>> 2fbe77f7300f98085cf70ff5b783b5f6526408f7
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

<<<<<<< HEAD
const productRoutes = require("./routes/products");

const app = express();
=======
const productsRouter = require("./routes/products");

const app = express();
const PORT = 5003;
const MONGO_URI = "mongodb://127.0.0.1:27017/productdb";
>>>>>>> 2fbe77f7300f98085cf70ff5b783b5f6526408f7

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
mongoose.connect("mongodb://127.0.0.1:27017/productdb")
.then(() => console.log("MongoDB Connected"));

app.use("/api/products", productRoutes);

app.listen(5003, () =>
  console.log("Server running on port 5003")
);
=======
app.use("/api/products", productsRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB:", MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
>>>>>>> 2fbe77f7300f98085cf70ff5b783b5f6526408f7
