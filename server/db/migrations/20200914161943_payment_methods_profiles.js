const { addDefaultColumns, references } = require("../../src/lib/tableUtils");
const tableNames = require("../../src/constants/tableNames");

/**
 * @param {import('knex')} knex
 */

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.profile, (table) => {
    table.increments().notNullable();
    table.integer("default_billing_address");
    table.string("default_email");
    table.integer("default_payment_method");
    table.integer("default_shipping_address");
    addDefaultColumns(table);
  });

  await knex.schema.table(tableNames.user, (table) => {
    references(table, tableNames.profile);
  });

  await knex.schema.table(tableNames.address, (table) => {
    references(table, tableNames.profile);
    references(table, tableNames.user);
  });

  await knex.schema.createTable(tableNames.payment_method, (table) => {
    table.increments().notNullable();
    table.string("type");
    references(table, tableNames.profile);
    addDefaultColumns(table);
  });

  await knex.schema.table(tableNames.card, (table) => {
    references(table, tableNames.payment_method);
    references(table, tableNames.user);
  });
};

exports.down = async (knex) => {
  await knex.schema.table(tableNames.card, (table) => {
    table.dropColumn("payment_method_id");
    table.dropColumn("user_id");
  });

  await knex.schema.table(tableNames, user, (table) => {
    table.dropColumn("profile_id");
  });

  await knex.schema.table(tableNames.address, (table) => {
    table.dropColumn("profile_id");
    table.dropColumn("user_id");
  });

  await Promise.all(
    [tableNames.payment_method, tableNames.profile]
      .reverse()
      .map((name) => knex.schema.dropTableIfExists(name))
  );
};
