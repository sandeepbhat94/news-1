const express = require("express");
const router = express.Router();
const newsController = require('../app/controllers/news')

router.get("/api/news", newsController.get_news);
router.get("/api/:id", newsController.get_news_auth);
router.get("/api/news/:text", newsController.search_news);

// AWS
// router.post("/api/aws/getsignedurl", AdminAuthenticate, aws_controller.getSignedUrl)

module.exports = router;
