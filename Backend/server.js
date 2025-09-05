import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";  

const app = express();  
const PORT = 8080;

// Middleware
app.use(express.json()); //parse incoming JSON requests
app.use(cors()); //enable CORS

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connecting to MongoDB..."); 
  } catch (error) { 
    console.log("MongoDB connection error:", error);
  }
};


// app.post("/test", async (req, res) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
//     },
//     body: JSON.stringify({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: req.body.message }],
//     })
//   };

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", options);
//     const data = await response.json();
//     // console.log(data.choices[0].message.content); //reply from OpenAI
//     res.send(data.choices[0].message.content);
//     // res.json(data);
//   } catch (error) {
//     console.log(err);
//   }
// });