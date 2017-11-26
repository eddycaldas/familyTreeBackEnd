const knex = require('./')

module.exports = {
  individuals: {
    update(id, body) {
      return knex("individuals").where({id}).update(body)
    },
    create (body) {
      return knex("individuals").insert(body)
    },
    read(id) {
      return knex("individuals").where({id}).first()
    },
    delete(id) {
      return knex("individuals").where({id}).delete()
    },
    list() {
      return knex("individuals")
    },
  }
}