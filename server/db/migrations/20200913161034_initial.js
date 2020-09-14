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
    knex.schema.createTable(tableNames.card, (table) => {
      table.increments().notNullable();
      table.string("brand");
      table.string("card_cvc");
      table.string("cardholder_name");
      table.string("exp_month");
      table.string("exp_year");
      table.boolean("is_giftcard");
      table.string("last_4");
      table.string("zipcode");
      addDefaultColumns(table);
    }),
    knex.schema.createTable(tableNames.address, (table) => {
      table.increments().notNullable();
      table.string("address_line_1");
      table.string("address_line_2");
      table.string("address_line_3");
      table.string("country");
      table.boolean("is_default");
      table.string("locality");
      table.string("postal_code");
      table.string("region");
      table.string("type");
      addDefaultColumns(table);
    }),
  ]);
};

exports.down = async (knex) => {
  await Promise.all(
    [tableNames.user, tableNames.card].map((tableName) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
};
