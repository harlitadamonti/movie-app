const movie = require("./movie");
const cast = require("./cast");
const category = require("./category");
const router = require("express").Router();

router.use("/movies", movie);
router.use("/casts", cast);
router.use("/categories", category);
module.exports = router;
