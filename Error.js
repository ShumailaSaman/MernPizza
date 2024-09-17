import React from 'react';

export default function Error({ error }) {
  return (
    <div style={{
      color: 'black', // Text color
      backgroundColor: '#f8d7da', // Light red background
      padding: '1rem',
      borderRadius: '0.25rem',
      border: '1px solid #f5c6cb',
      textAlign: 'center' // Center the text

    }}>
      {error}
    </div>
  );
}
