import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_NAME,
});

export const query = async (text: string, params: any[]) => {
  const res = await pool.query(text, params);
  return res.rows;
};
