const express = require("express");
const router = express.Router();

const IncidenceController = require("../controllers/IncidenceController");
const { authentication } = require("../middleware/authentication");

// router.post("/createIncidence", authentication, IncidenceController.createIncidence);
router.post("/fetchAndCreateIncidences", authentication, IncidenceController.fetchAndCreateIncidences);
router.post("/createManualIncidence", authentication, IncidenceController.createManualIncidence);
router.get("/getAllIncidences", IncidenceController.getAllIncidences);
router.get("/getIncidenceById/:id", IncidenceController.getIncidenceById);
router.put("/updateIncidence/:id", authentication, IncidenceController.updateIncidence);
router.delete("/deleteIncidence/:id", authentication, IncidenceController.deleteIncidence);
module.exports = router;
