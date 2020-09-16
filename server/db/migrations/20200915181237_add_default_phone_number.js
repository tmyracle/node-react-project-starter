const tableNames = require("../../src/constants/tableNames");

/**
 * @param {import('knex')} knex
 */

exports.up = async (knex) => {
  await knex.schema.table(tableNames.profile, (table) => {
    table.string("default_phone_number");
  });
};

exports.down = async (knex) => {
  await knex.schema.table(tableNames.profile, (table) => {
    table.dropColumn("default_phone_number");
  });
};
