
//requiring express module
const router = require("express").Router();
//requiring googlecontroller module from controller folder
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

  //module exporting router
module.exports = router;
