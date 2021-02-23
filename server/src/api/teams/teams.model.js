const { Model } = require("objection");

const tableNames = require("../../constants/tableNames");
const schema = require("./teams.schema.json");
const User = require("../users/users.model");

class Team extends Model {
  static get tableName() {
    return tableNames.teams;
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        filter: (query) =>
          query.select("users.id", "email", "first_name", "last_name"),
        join: {
          from: `${tableNames.teams}.owner_id`,
          to: `${tableNames.users}.id`,
        },
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        filter: (query) =>
          query.select("users.id", "email", "first_name", "last_name"),
        join: {
          from: `${tableNames.teams}.id`,
          through: {
            from: `${tableNames.users_teams}.team_id`,
            to: `${tableNames.users_teams}.user_id`,
          },
          to: `${tableNames.users}.id`,
        },
      },
    };
  }
}

module.exports = Team;
