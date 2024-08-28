const AppError = require("../../utils/appError");
const Topic = require("../models/Cards.model");

class TopicService {
  async createTopic(topicData) {
    const newTopic = new Topic(topicData);
    return await newTopic.save();
  }

  async getAllTopics() {
    return await Topic.find();
  }

  async getTopicById(id) {
    const topic = await Topic.findById(id);
    if (!topic) {
      throw new AppError("Topic not found", 404);
    }
    return topic;
  }
}

module.exports = new TopicService();
