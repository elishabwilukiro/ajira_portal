import React, { createContext, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

     // Function to show a toast message
     const showToast = ({ message, type="success"}) => {
          if (type === "success") toast.success(message)
          else if (type === "error") toast.error(message)
          else if (type === "info") toast.info(message)
          else toast(message)
     }

     return(
          <ToastContext.Provider value={{ showToast }}>
               {children}
               <ToastContainer 
                    position="top-right" 
                    autoClose={3000} 
                    hideProgressBar={false} 
                    newestOnTop={false} 
                    closeOnClick rtl={false} 
                    pauseOnFocusLoss draggable pauseOnHover 
               />
          </ToastContext.Provider>
     )
}

export const useToast = () => useContext(ToastContext)