const express = require("express");
const {
  handeleBookController,
  handleBookListController,
  handleBookDeleteController,
  handleBookUpdateController,
} = require("../controller/book_controllers");

const router = express.Router();

router.post("/addbook", handeleBookController);
router.get("/booklists", handleBookListController);
router.delete("/deletebook/:id", handleBookDeleteController);
router.put("/updatebook", handleBookUpdateController);
module.exports = router;
