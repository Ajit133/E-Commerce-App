import React from "react";
import "./SkeletonCard.scss";

const SkeletonCard = () => {
  return (
    <div className="skeletonCard">
      <div className="skeletonImage shimmer" />
      <div className="skeletonTitle shimmer" />
      <div className="skeletonPrices shimmer" />
    </div>
  );
};

export default SkeletonCard;
