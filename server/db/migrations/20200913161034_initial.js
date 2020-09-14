const tableNames = require("../../src/constants/tableNames");

const {
  addDefaultColumns,
  //createNameTable,
  //url,
  email,
  //references,
} = require("../../src/lib/tableUtils");

/**
 * @param {import('knex')} knex
 */

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable();
      email(table, "email").notNullable().unique();
      table.string("first_name");
      table.string("last_name");
      table.string("code");
      table.string("date_of_birth");
      addDefaultColumns(table);
    }),
  ]);
};

exports.down = async (knex) => {
  await Promise.all(
    [tableNames.user].map((tableName) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
};
