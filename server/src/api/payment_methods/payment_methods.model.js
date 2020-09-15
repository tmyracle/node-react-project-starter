const { Model } = require("objection");

const tableNames = require("../../constants/tableNames");
const schema = require("./payment_methods.schema.json");
const Card = require("../cards/cards.model");

class PaymentMethod extends Model {
  static get tableName() {
    return tableNames.payment_method;
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    return {
      card: {
        relation: Model.BelongsToOneRelation,
        modelClass: Card,
        join: {
          from: `${tableNames.payment_method}.id`,
          to: `${tableNames.card}.payment_method_id`,
        },
      },
    };
  }
}

module.exports = PaymentMethod;
