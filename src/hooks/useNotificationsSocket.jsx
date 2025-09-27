import { useCallback, useEffect } from "react";
import { io } from "socket.io-client";

export function useNotificationsSocket(userId, addNotification) {
  const handleNotification = useCallback(
    (notification) => {
      addNotification(notification);
    },
    [addNotification]
  );

  useEffect(() => {
    if (!userId) return;

    const socket = io(import.meta.env.VITE_API_URI);

    socket.emit("join", userId);

    socket.on("notification", handleNotification);

    return () => {
      socket.disconnect();
    };
  }, [userId, handleNotification]);
}
