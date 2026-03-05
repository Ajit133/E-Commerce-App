import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { WishlistContextProvider } from './context/WishlistContext.jsx'
import { ToastContextProvider } from './context/ToastContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ToastContextProvider>
        <WishlistContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </WishlistContextProvider>
      </ToastContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
