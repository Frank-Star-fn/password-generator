import React, { useState } from 'react';

function Checkbox(props) {
    let message = props.message;
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
        divClassName = "flex items-center flex-none ms-2.5 my-1 bg-gray-300 hover:bg-gray-400 text-white";
    }else{
        divClassName = "flex items-center flex-none ms-2.5 my-1 bg-green-5FB878 text-white";
    }

    props.onDataReceived(isClicked);

    return(
        <div 
            className={divClassName}
            onClick={handleClick} // 绑定点击事件处理函数
        >
            <span className='px-3'>{message}</span>
            <i></i>
        </div>
    );
}

export default Checkbox;