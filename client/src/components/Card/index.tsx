import React from "react";
import './style.css';
interface PackageCardProps {
  emoji: string;
  title: string;
  description: string;
  price: string;
  highlight?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ emoji, title, description, price, highlight }) => {
  return (
    <div className="col-md-4">
      <div className={`fortune-card ${highlight ? "highlight" : ""}`}>
        <div className="display-4 mb-3">{emoji}</div>
        <h5 className="fw-bold mb-3" >{title}</h5>
        <p className="mb-4">{description}</p>
        <h4 className="text-warning mb-4">{price}</h4>
        <button className="btn btn-purple-outline text-white border-white">เลือกแพ็กเกจ</button>
      </div>
    </div>
  );
};

export default PackageCard;
