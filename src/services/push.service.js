import admin from "../config/fcm.js";

export const sendPushNotification = async (token, title, body, data = {}) => {
  const message = {
    token,
    notification: { title, body },
    data
  };

  return admin.messaging().send(message);
};
