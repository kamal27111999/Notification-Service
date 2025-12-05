import express from "express";
import dotenv from "dotenv";
import notificationRoutes from "./src/routes/notification.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/notify", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Notification Service is Running...");
});

// Start Server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
