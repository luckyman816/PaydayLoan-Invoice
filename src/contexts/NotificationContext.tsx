import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

type NotificationContextType = {
  showNotification: Function
}
export const NotificationContext = React.createContext<NotificationContextType|null>(null);

const NotificationProvider = ({children}: {children: React.ReactElement}) => {

  const showNotification = (msg: string, type: string) => {
    //@ts-ignore
    toast[type](msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      { children }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </NotificationContext.Provider>
  )

}

export default NotificationProvider;