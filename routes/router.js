//imports
const router = require("express").Router();
const path = require("path");
//validators
const regValidator = require("../validators/regValidator");
//controllers
const {
  registerGetController,
  loginGetController,
  registerPostController,
  loginPostController,
} = require("../controllers/authControllers");

const { profileGetController } = require("../controllers/profileControllers");
const { productGetController } = require("../controllers/productControllers");
const { campaignGetController } = require("../controllers/campaignControllers");

const sendMail = require("../api/mailer");
const { orderGetController, orderPostController, reviewOrderGetController } = require("../controllers/orderControllers");
//---------------------------------------------------------------------------------

//handlers
router.get("/register", registerGetController);
router.get("/login", loginGetController);

router.post("/register", regValidator, registerPostController);
router.post("/login", loginPostController);

router.get("/profile", profileGetController);

router.get("/campaigns", campaignGetController);
router.get("/products", productGetController);

//order routes
router.get('/order', orderGetController)
router.post('/order', orderPostController)

router.get('/reviewOrder', reviewOrderGetController)
router.post('/confirmOrder', (req, res) => {
  res.send('Under development')
})


//temp----------------------
router.get("/testMail", (req, res) => {
  sendMail("sheikhshakil.redmi@gmail.com", "Account created", "notify");
  res.send("Mail sent");
});

//-------------don't modify-----------------

router.get("/googled9867abc384dbe4a.html", (req, res) => {
  const currentDir = path.resolve("./");
  res.sendFile(path.join(currentDir + "/routes/googleVer/googled9867abc384dbe4a.html"));
});

router.get("/", (req, res) => {
  res.render("pages/home.ejs", { title: "Zone98 - Buy CODM/PUBG/Free fire credits without international cards" });
});

//------------------------------------------

module.exports = router;
