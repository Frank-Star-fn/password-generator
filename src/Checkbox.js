import React, { useState } from 'react';

function Checkbox({message}) {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
      if(isClicked === true){
        setIsClicked(false);
      }else{
        setIsClicked(true);
      }
    };

    let divClassName = "";
    if(isClicked === true){
        divClassName = "flex-1 mx-1 my-1 bg-white";
    }else{
        divClassName = "flex-1 mx-1 my-1 bg-green-400";
    }

    return(
        <div 
            className={divClassName}
            onClick={handleClick} // 绑定点击事件处理函数
        >
            <span>{message}</span>
            <i></i>
        </div>
    );
}

export default Checkbox;