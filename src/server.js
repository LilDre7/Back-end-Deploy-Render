import { config } from "dotenv";
import app from "./app.js";
import pg from "pg";

config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // El ssl solo se usa cuando se trabaja con un servidor de prueba
  // ssl: true,
});

const PORT = process.env.PORT_SERVER || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🦕 `);
});

export default pool;
