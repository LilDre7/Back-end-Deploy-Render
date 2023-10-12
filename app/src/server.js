import { app } from "./app";

const PORT = process.env.PORT_SERVER || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🦕 `);
});
