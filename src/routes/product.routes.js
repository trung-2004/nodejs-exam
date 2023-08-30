const express = require("express");
const router = express.Router();

const controller = require("./../controllers/product.controller");



router.get("/products", controller.products);

router.get("/createProduct", controller.createProduct);
router.post("/createProduct", controller.postCreateProduct);

router.get("/editProduct/:id", controller.editProduct);
router.post("/editProduct/:id", controller.postEditProduct);

router.get("/deleteProduct/:id", controller.deleteProduct);

module.exports = router;