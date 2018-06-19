const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
    .get(articleController.findAll)
    .post(articleController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .delete(articlesController.remove);

module.exports = router;
