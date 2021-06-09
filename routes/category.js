const router = require("express").Router();
const Category = require("./../db/models").Category;
const Movie = require("./../db/models").Movie;
const Cast = require("./../db/models").Cast;

router.get("/", (req, res) => {
  Category.findAll({
    include: Movie,
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => console.error(err));
});

router.get("/:id/casts", (req, res) => {
  Category.findAll({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Movie,
        include: [
          {
            model: Cast,
            through: {
              attributes: [],
            },
          },
        ],
      },
    ],
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
