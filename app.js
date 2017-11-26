const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const routes = {
  individuals: require("./routes/individuals"),
}

app.use(express.static('public'))
app.use("/individuals", routes.individuals)

app.listen(PORT, () =>
console.log(`listeninig on ${PORT}`));
console.log('test');