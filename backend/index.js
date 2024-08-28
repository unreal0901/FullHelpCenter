require("dotenv").config();
const connectDb = require("./src/utils/connectDb");
const PORT = process.env.PORT || 8000;
const app = require("./app");

const server = app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on port`, server.address().port);
});
