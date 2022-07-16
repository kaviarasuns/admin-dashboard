import React from 'react';
import './colors.scss';

const Colors = () => {
  return (
    <div className='colorContainer'>
        <div className="colorbox color1">Primary <span className='colorname'>#4e73df</span></div>
        <div className="colorbox color2">Success <span className='colorname'>#1cc88a</span></div> 
        <div className="colorbox color3">Info<span className='colorname'>#36b9cc</span></div>
        <div className="colorbox color4">Warning<span className='colorname'>#f6c23e</span></div>
        <div className="colorbox color5">Danger<span className='colorname'>#e74a3b</span></div>
        <div className="colorbox color6">Secondary <span className='colorname'>#858796</span></div>
        <div className="colorbox color7">Light<span className='colorname'>#f8f9fc</span></div>
        <div className="colorbox color8">Dark <span className='colorname'>#5a5c69</span></div>
    </div>
  )
}

export default Colors