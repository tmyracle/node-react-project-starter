const { Model } = require("objection");

const tableNames = require("../../constants/tableNames");
const schema = require("./profiles.schema.json");
const Address = require("../addresses/addresses.model");
const PaymentMethod = require("../payment_methods/payment_methods.model");
const User = require("../users/users.model");

class Profile extends Model {
  static get tableName() {
    return tableNames.profile;
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    return {
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: Address,
        join: {
          from: `${tableNames.profile}.id`,
          to: `${tableNames.address}.profile_id`,
        },
      },
      payment_methods: {
        relation: Model.HasManyRelation,
        modelClass: PaymentMethod,
        join: {
          from: `${tableNames.profile}.id`,
          to: `${tableNames.payment_method}.profile_id`,
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${tableNames.profile}.id`,
          to: `${tableNames.user}.profile_id`,
        },
      },
    };
  }
}

module.exports = Profile;
