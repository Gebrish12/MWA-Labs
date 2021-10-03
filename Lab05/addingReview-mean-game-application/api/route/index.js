const express = require("express");
const gameController = require("../controller/game_controller");
const publisherController = require("../controller/publisher_controller");
const reviewController = require("../controller/review_controller")
const router = express.Router();

router.route("/games").get(gameController.getAll)
.post(gameController.addone);
                    

router.route("/games/:gameID").get(gameController.getOne)
.delete(gameController.deleteOne)
.put(gameController.updateOne)


router.route("/games/:gameID/addpublisher").post(publisherController.addPublisher);
router.route("/games/:gameID/addreview").post(reviewController.addReview);

router.route("/games/:gameID/publisher").get(publisherController.getPublisher)

module.exports =router;