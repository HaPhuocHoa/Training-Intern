import React, { useState } from 'react';
import './ColorBox.scss'


function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'yellow';
        return initColor;
    })
    const changeRandomColor = () => {
        const ColorList = ['red', 'blue', 'pink', 'green', 'yellow'];
        const Random = Math.floor(Math.random()*5); 
        return ColorList[Random];
    }
    
    const handleboxclick = () => {
        const newcolor = changeRandomColor();
        setColor(newcolor);

        localStorage.setItem('box-color', newcolor);
    }
    

    return (
        <div className='color-box' style={ {backgroundColor : color } }
        onClick = {handleboxclick}
        
        >
        </div>
    );
}

export default ColorBox;