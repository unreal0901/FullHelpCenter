const status = require("../src/health/routes");
const cards = require("../src/cards/routes");
const errorHandler = require("../src/middleware/errorHandler");

module.exports = (app) => {
  // Version 1 of api
  app.use("/api/v1/status", status);
  app.use("/api/v1/cards", cards);

  // unknown routes
  app.all("*", (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`);
    err.statusCode = 404;
    next(err);
  });

  // Global error handler middleware
  // Global Error Handler
  // app.use((err, req, res, next) => {
  //   console.log(err);
  //   err.status = err.status || "error";
  //   err.statusCode = err.statusCode || 500;

  //   res.status(err.statusCode).json({
  //     status: err.status,
  //     message: err.message,
  //   });
  // });
  app.use(errorHandler);
};
