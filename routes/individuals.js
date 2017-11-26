const router = require("express").Router()
const queries = require("../db/queries")

const table = "individuals"

router.put("/:id", (req, res) => {
  queries[table].update(req.params.id, req.body)
  .then((individuals) => res.send(200))
})

router.post("/", (req, res) => {
  queries[table]
  .create(req.body)
.then((i) => 
  res.json(i))
})

// router.get("/:id", (req, res) => {
//   var withAuthors = req.query.withAuthors
//   var query = queries[table].read(req.params.id)
//   if (withAuthors) {
//     queries.author_book.getAuthorsForBook(req.params.id)
//     .then((authors) => {
//       return query.then((individuals) => {
//         individuals.authors = authors
//         res.json(individuals)
//       })
//     })
//   } else {
//   query
//   .then((individuals) => res.json(individuals))
//  }
// })

router.delete("/:id", (req, res) => {
  queries[table].delete(req.params.id)
  .then (() => res.send(202))
})

router.get("/", (req, res) => {
  queries[table].list()
    .then((data) => res.json(data))
})

module.exports = router