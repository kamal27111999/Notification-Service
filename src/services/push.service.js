import admin from "../config/fcm.js";

export const sendPushNotification = async (token, title, body, data = {}) => {
  const message = {
    token,
    notification: { title, body },
    data
  };
  console.log("Sending Push Notification:", message);
  return admin.messaging().send(message);
};
