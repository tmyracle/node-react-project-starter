const { Model } = require("objection");

const tableNames = require("../../constants/tableNames");
const schema = require("./cards.schema.json");

class Card extends Model {
  static get tableName() {
    return tableNames.card;
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = Card;
