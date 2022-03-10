import React from 'react'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
      <div className="h-screen">
        <h2 className='mt-20 text-4xl font-dm '>Hello world!</h2>
      </div>
    );
}