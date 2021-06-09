const router = require("express").Router();
const Movie = require("./../db/models").Movie;
const Cast = require("./../db/models").Cast;

router.get("/", (req, res) => {
  Movie.findAll({
    include: "Category",
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => console.error(err));
});

router.get("/:id/casts", (req, res) => {
  Movie.findAll({
    where: { category_id: req.params.id },
    include: [{
      model: Cast,
      through: {
        attributes: [],
      },
    }],
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
