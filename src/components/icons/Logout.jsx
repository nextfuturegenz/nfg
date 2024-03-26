import React from 'react';

export const Logout = ({ size = 18, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            {...rest}
        >
         <path d="M27.815,0v472.615H444.8V0H27.815z M287.118,338.926l-13.068-14.731l88.003-78.072H144.257v-19.692h217.796 l-88.003-78.072l13.068-14.731l115.706,102.649L287.118,338.926z"/>
        </svg>
    );
};

