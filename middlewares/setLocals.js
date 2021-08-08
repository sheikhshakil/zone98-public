module.exports = () => {
  return (req, res, next) => {
    res.locals.errors = {};
    res.locals.values = {};
    res.locals.user = req.session.user
    res.locals.orderDetails = req.session.orderDetails
    next();
  };
};
