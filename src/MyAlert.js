import React from 'react';

function MyAlert({ message, isOpen }) {
    if (!isOpen) {
        return null; // 如果弹窗关闭，则不渲染任何内容
    }
     
    return (
        <div className="flex justify-center">
            <div className="m-2 p-6 shadow-md">
                <p>{message}</p>
            </div>
        </div>
    );
}

export default MyAlert;
