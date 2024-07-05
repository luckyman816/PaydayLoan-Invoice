import { useContext } from "react";

import { NotificationContext } from "@/contexts/NotificationContext";

/**
 * 
 * @returns context { showNotification(text:string) }
 */
const useNotification = () => {
  const context = useContext(NotificationContext);
  if ( !context ) throw new Error("No notification")
  return context;
}

export default useNotification;