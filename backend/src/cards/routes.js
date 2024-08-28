const express = require("express");
const controller = require("./controller/index");

const router = express.Router();
// Topic routes
router.post("/", controller.createTopic);
router.get("/", controller.getAllTopics);
router.get("/:id", controller.getTopicById);

module.exports = router;
