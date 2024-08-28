const AppError = require("../../utils/appError");
const { sendResponse } = require("../../utils/sendResponse");
const topicService = require("../service/index");

const createTopic = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const savedTopic = await topicService.createTopic({ title, description });
    sendResponse(res, savedTopic, "Topic created successfully", true, 201);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

const getAllTopics = async (req, res, next) => {
  try {
    const topics = await topicService.getAllTopics();
    sendResponse(res, topics, "Topics retrieved successfully", true, 200);
  } catch (error) {
    next(new AppError("Error fetching topics", 500));
  }
};

const getTopicById = async (req, res, next) => {
  try {
    const topic = await topicService.getTopicById(req.params.id);
    sendResponse(res, topic, "Topic retrieved successfully", true, 200);
  } catch (error) {
    if (error.name === "CastError") {
      next(new AppError("Invalid topic ID", 400));
    } else {
      next(error);
    }
  }
};

module.exports = {
  createTopic,
  getAllTopics,
  getTopicById,
};
