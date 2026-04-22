<<<<<<< HEAD
// const express = require("express");
// const Product = require("../models/Product");

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     return res.status(200).json(products);
//   } catch (err) {
//     return res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;
=======
>>>>>>> 2fbe77f7300f98085cf70ff5b783b5f6526408f7
const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

<<<<<<< HEAD
/* GET all */
router.get("/", async (req, res) => {

  const data = await Product.find();

  res.json(data);

});

/* SEARCH */
router.get("/search", async (req, res) => {

  const q = req.query.query;

  const data = await Product.find({
    name: { $regex: q, $options: "i" }
  });

  res.json(data);

});

/* ADD */
router.post("/", async (req, res) => {

  const p = new Product(req.body);

  await p.save();

  res.json(p);

});

/* UPDATE */
router.put("/:id", async (req, res) => {

  const p = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(p);

});

module.exports = router;
=======
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
>>>>>>> 2fbe77f7300f98085cf70ff5b783b5f6526408f7
