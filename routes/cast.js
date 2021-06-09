const router = require("express").Router();
const Cast = require("./../db/models").Cast;

router.get("/", (req, res, next) => {
  Cast.findAll()
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  Cast.findOne({ where: { id: req.params.id } })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => next(err));
});

router.delete("/:id", (req, res) => {
  Cast.destroy({ where: { id: req.params.id } })
    .then((result) => {
      return res.sendStatus(204);
    })
    .catch((error) => next(error));
});

router.get("/restore/:id", (req, res) => {
  Cast.destroy({ where: { id: req.params.id } })
    .then((result) => {
      return res.json({ result });
    })
    .catch((error) => next(error));
});

module.exports = router;
