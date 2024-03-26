import React from 'react';
import {Typography} from './Typography';

const sidebarHeaderStyle = {
  height: '64px',
  minHeight: '64px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  padding: '0 20px',
};

const logoStyle = (rtl) => ({
  width: '50px',
  minWidth: '50px',
  height: '35px',
  minHeight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  color: 'black',
  fontSize: '24px',
  fontWeight: 700,
  backgroundColor: '#009fdb',
  background: 'linear-gradient(45deg, rgb(225 193 7) 0%, rgb(252 211 7) 100%)',
  marginLeft: rtl ? '10px' : '0px',
  marginRight: rtl ? '4px' : '14px',
});

export const SidebarHeader = ({ children, rtl, ...rest }) => {
  return (
    <div style={{ ...sidebarHeaderStyle }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ ...logoStyle(rtl) }}>CFL</div>
        <Typography variant="subtitle1" fontWeight={700} color="#000000">
          CoFusion Labs
        </Typography>
      </div>
    </div>
  );
};
