import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { WishlistContextProvider } from './context/WishlistContext.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </WishlistContextProvider>
  </React.StrictMode>,
)
