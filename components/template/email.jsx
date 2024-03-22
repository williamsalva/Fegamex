import * as React from "react";

export const EmailTemplate = ({ name, email, phone, city, message}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Nuevo Mensaje de Contacto desde Fegamex.com 🚀</h2>
      <div style={{ marginBottom: '10px' }}>
        <strong style={{ marginRight: '10px' }}>Nombre:</strong>
        <span>{name}</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong style={{ marginRight: '10px' }}>Correo Electrónico:</strong>
        <span>{email}</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong style={{ marginRight: '10px' }}>WhatsApp:</strong>
        <span>{phone}</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong style={{ marginRight: '10px' }}>Ciudad:</strong>
        <span>{city}</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong style={{ marginRight: '10px' }}>Mensaje:</strong>
        <span>{message}</span>
      </div>
      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Este mensaje fue generado automáticamente por el sistema de contacto de fegamex.com Por favor, no responda a este correo electrónico.
        </p>
      </div>
    </div>
  );
};