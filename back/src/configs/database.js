import { Sequelize } from 'sequelize';
import 'dotenv/config';
// adding connection to database

const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  { dialect: 'mysql' },
);

export default db;
