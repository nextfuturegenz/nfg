import React from 'react';

const badgeStyle = (variant, shape) => ({
  minWidth: '18px',
  minHeight: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: shape === 'circle' ? '50%' : '16px',
  padding: shape === 'circle' ? '0' : '0 6px',
  fontSize: '11px',
  fontWeight: 600,
  backgroundColor: getBackgroundColor(variant),
  color: '#fff',
});

const getBackgroundColor = (variant) => {
  switch (variant) {
    case 'info':
      return '#048acd';
    case 'success':
      return '#0cbb34';
    case 'danger':
      return '#fb3939';
    case 'warning':
      return '#e25807';
    default:
      return '#048acd'; // Default to info variant if variant is not recognized
  }
};

export const Badge = ({ children, variant = 'info', shape = 'rounded', ...rest }) => {
  return (
    <div style={badgeStyle(variant, shape)} {...rest}>
      {children}
    </div>
  );
};
