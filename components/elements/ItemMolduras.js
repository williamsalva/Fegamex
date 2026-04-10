"use client";

import React from "react";
import Link from "next/link";

export default function ItemMolduras({ title, img, id }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
      <Link href={`/moldura/${id}`} className="product-card-link">
        <div className="product-card">
          <div className="image-container">
            <img src={img} alt={title} className="product-image" />
            <div className="hover-overlay">
              <span>Ver Detalle</span>
            </div>
          </div>
          <div className="card-content">
            <h3 className="product-title">{title}</h3>
            <div className="card-footer">
              <span className="brand">FEGAMEX</span>
              <span className="category">Moldura</span>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .product-card-link {
          text-decoration: none;
          display: block;
        }
        
        .product-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.03);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(230, 57, 70, 0.1);
        }
        
        .image-container {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }
        
        .product-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(17, 24, 39, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
        }
        
        .hover-overlay span {
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          background: var(--theme-color);
          padding: 10px 20px;
          border-radius: 4px;
          box-shadow: var(--shadow-md);
          transform: translateY(10px);
          transition: all 0.4s ease;
        }
        
        .product-card:hover .hover-overlay {
          opacity: 1;
        }

        .product-card:hover .hover-overlay span {
          transform: translateY(0);
        }
        
        .card-content {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .product-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ff4d5a !important;
          margin-bottom: 16px;
          line-height: 1.25;
          font-family: var(--futura);
        }
        
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 16px;
          margin-top: auto;
        }
        
        .brand {
          font-size: 10px;
          font-weight: 800;
          color: #ff4d5a !important;
          letter-spacing: 2px;
          font-family: var(--inter);
        }
        
        .category {
          font-size: 10px;
          color: var(--text-color);
          text-transform: uppercase;
          opacity: 0.6;
          font-family: var(--inter);
          font-weight: 600;
        }

        @media (max-width: 767px) {
          .product-title {
            font-size: 1rem;
          }
          .card-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
