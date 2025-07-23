const { defineConfig } = require('drizzle-kit');
require('dotenv').config();

module.exports = defineConfig({
  schema: './src/db/schema.js',
  out: './drizzle',
  driver: 'pg',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
}); 