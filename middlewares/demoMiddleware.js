const demoMiddleware = (req, res, next) => {
  console.log("demo middleware");
  //   next();
  res.json({ message: "middleware called" });
};

module.exports = demoMiddleware;
