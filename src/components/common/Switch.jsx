import React from 'react';

const checkBoxWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
};

const checkBoxLabelStyle = {
  marginLeft: '10px',
  marginRight: '10px',
  fontSize: '13px',
  cursor: 'pointer',
};

const checkBoxStyle = (checked) => ({
  position: 'relative',
  cursor: 'pointer',
  width: '32px',
  height: '20px',
  borderRadius: '30px',
  backgroundColor: checked ? '#0ed693' : '#dde0e7',
});

const checkBoxCircleStyle = (checked) => ({
  position: 'absolute',
  top: '3px',
  left: checked ? '15px' : '3px',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  transition: 'left 0.2s',
});

export const Switch = ({ id, label, checked, ...rest }) => {
  return (
    <div style={checkBoxWrapperStyle}>
      <div style={checkBoxStyle(checked)}>
        <input
          id={id}
          type="checkbox"
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '32px',
            height: '20px',
            opacity: 0,
            zIndex: 2,
          }}
          checked={checked}
          {...rest}
        />
        <div style={checkBoxCircleStyle(checked)} />
      </div>
      {label && (
        <label htmlFor={id} style={checkBoxLabelStyle}>
          {label}
        </label>
      )}
    </div>
  );
};