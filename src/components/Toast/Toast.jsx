import React, { useContext } from "react";
import "./Toast.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ToastContext } from "../../context/ToastContext";

const iconMap = {
  cart: <ShoppingCartOutlinedIcon />,
  wishlist: <FavoriteBorderIcon />,
  success: <CheckCircleOutlineIcon />,
  info: <InfoOutlinedIcon />,
};

const Toast = () => {
  const { toasts } = useContext(ToastContext);

  return (
    <div className="toastContainer">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          {iconMap[toast.type] || iconMap.success}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
