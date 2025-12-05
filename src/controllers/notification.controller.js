import { sendPushNotification } from "../services/push.service.js";

export const pushHandler = async (req, res) => {
  try {
    const { token, title, body, data } = req.body;

    const response = await sendPushNotification(token, title, body, data || {});
    return res.json({ success: true, messageId: response });

  } catch (error) {
    console.log("Push Error:", error);
    return res.status(500).json({ error: error.message });
  }
};
