const tableNames = require("../../src/constants/tableNames");

const { addDefaultColumns } = require("../../src/lib/tableUtils");

/**
 * @param {import('knex')} knex
 */

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.teams, (table) => {
      table.increments().notNullable();
      table.string("name");
      table.integer("owner_id").references(`${tableNames.users}.id`);
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.users_teams, (table) => {
      table.increments().notNullable();
      table.integer("user_id").references(`${tableNames.users}.id`);
      table.integer("team_id").references(`${tableNames.teams}.id`);
      addDefaultColumns(table);
    }),
  ]);
};

exports.down = async (knex) => {
  await Promise.all(
    [tableNames.teams, tableNames.users_teams].map((tableName) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
};
