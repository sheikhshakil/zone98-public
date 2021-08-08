exports.orderGetController = (req, res) => {
  const { item } = req.query;
  res.render("pages/order.ejs", { title: "Place your order", item });
};

exports.orderPostController = (req, res) => {
  let { product, price, loginMethod, paymentMethod, loginId, loginPass } =
    req.body;
  let cpAmount, ucAmount, dmdAmount;

  let orderDetails;

  if ((product = "cod-cp")) {
    cpAmount = req.body.cpAmount;
    orderDetails = {
      product,
      cpAmount,
      price,
      loginMethod,
      loginId,
      loginPass,
      paymentMethod,
    };
  } else if ((product = "pubg-uc")) {
    ucAmount = req.body.ucAmount;
    orderDetails = {
      product,
      ucAmount,
      price,
      loginMethod,
      loginId,
      loginPass,
      paymentMethod,
    };
  } else if ((product = "ff-dmd")) {
    dmdAmount = req.body.dmdAmount;
    orderDetails = {
      product,
      dmdAmount,
      price,
      loginMethod,
      loginId,
      loginPass,
      paymentMethod,
    };
  }

  req.session.orderDetails = orderDetails;

  console.log(req.session.orderDetails)

  res.redirect("/reviewOrder");
};

exports.reviewOrderGetController = (req, res) => {
  orderData = req.session.orderDetails
  res.render("pages/reviewOrder.ejs", {title : "Review your order", orderData});
};
