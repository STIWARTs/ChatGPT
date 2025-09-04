import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();  
const PORT = 8080;

// Middleware
app.use(express.json()); //parse incoming JSON requests
app.use(cors()); //enable CORS

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});