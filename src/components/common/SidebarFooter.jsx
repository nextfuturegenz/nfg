import React from 'react';
import { Book } from '../icons';
import {Typography} from './Typography';
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks";
import { authAtom } from "../../atoms";
import { useRecoilValue } from 'recoil';

const buttonStyle = {
  padding: '5px 16px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  backgroundColor: '#fff',
  color: '#484848',
  textDecoration: 'none',
};

const sidebarFooterStyle = {
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderRadius: '8px',
  color: 'white',
  background:
    'linear-gradient(45deg, rgb(225 193 7) 0%, rgb(252 211 7) 100%)',
};

const collapsedSidebarFooterStyle = {
  width: '40px',
  height: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '50%',
  color: 'white',
  background:
    'linear-gradient(45deg, rgb(225 193 7) 0%, rgb(252 211 7) 100%)',
};

export const SidebarFooter = ({
  children,
  collapsed,
  ...rest
}) => {
    const {logout} = useAuth();
    const auth = useRecoilValue(authAtom);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    >
      {collapsed ? (
        <Link onClick={() => logout("/login")} style={collapsedSidebarFooterStyle}>
          <Book size={28} />
        </Link>
      ) : (
        <div style={sidebarFooterStyle} {...rest}>
          <div style={{ marginBottom: '12px' }}>
            <Book size={30} />
          </div>
          <Typography fontWeight={400} color="#000000" >{auth.details.username}</Typography>
          <Typography color="#000000">store name</Typography>
          <div style={{ marginTop: '5px' }}>
            <Link onClick={() => logout("/login")} style={buttonStyle}>
              <Typography variant="caption" color="#607489" fontWeight={600}>
                Logout
              </Typography>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
