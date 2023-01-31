import { Store } from "react-notifications-component";

export const addNotificationToApp = (title, message, type) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      showIcon: true,
    },
  });
};