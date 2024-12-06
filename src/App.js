import { Fragment } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import Checkbox from './Checkbox';
import MyAlert from './MyAlert';

function App() {
  const [text, setText] = useState('');
  const [lenText, setLenText] = useState('');
  const [dataFromChild, setDataFromChild] = useState('');
  const [dataFromChild2, setDataFromChild2] = useState('');
  const [dataFromChild3, setDataFromChild3] = useState('');
  const [dataFromChild4, setDataFromChild4] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.title = '密码生成器'; // 设置标签页标题
    setLenText(16);
  }, []); // 空数组作为第二个参数，意味着这个 effect 只在组件挂载时运行一次

  let duration = 3000; // 99999999; // 3000;

  const openModal = () => {
    setIsModalOpen(true); // 打开弹窗

    const timer = setTimeout(() => {
      // setVisible(false);
      setIsModalOpen(false);
    }, duration);
    // 清除定时器的清理函数
    return () => clearTimeout(timer);
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    // console.log("child = 1, data = "+data);
  };
  const handleDataFromChild2 = (data) => {
    setDataFromChild2(data);
  };
  const handleDataFromChild3 = (data) => {
    setDataFromChild3(data);
  };
  const handleDataFromChild4 = (data) => {
    setDataFromChild4(data);
  };

  const handleInputChange = (event) => {
    // 从事件对象中获取输入的值
    const value = event.target.value;
    
    // 更新状态变量 inputNumber
    setLenText(value);
  };

  const handleButtonClick = () => {
    let str = '';
    let str_set = '';
    
    if(dataFromChild === false){
      str_set+='0123456789'
    }
    if(dataFromChild2 === false){
      str_set+='abcdefghijklmnopqrstuvwxyz'
    }
    if(dataFromChild3 === false){
      str_set+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(dataFromChild4 === false){
      const str_special = '\'#?!])$&{;|>*@":<.-%/,+_}[=(';
      str_set+=str_special
    }
    //
    // console.log("str_set = "+str_set);

    if(str_set.length<=0){
      console.log("没有可用字符")
    }else{
      const max_len=50; // 最大长度
      if(lenText<0){
        console.log("长度不能为负数")
      }else if(lenText<=max_len){
        for(let i=1;i<=lenText;i++){
          const randomIndex = Math.floor(Math.random() * str_set.length);        
          let ch=str_set[randomIndex];
          str = str+ch;
        }
        setText(str);
      }else{
        console.log("长度超出限制")
      }
    }
  };

  const handleCopy = async () => {
    try {
      // 使用浏览器的 clipboard API 来复制文本
      await navigator.clipboard.writeText(text);
      // alert('复制成功');
      openModal();

    } catch (err) {
      // 如果复制失败，显示一个错误消息（例如，在某些浏览器中，可能需要用户交互才能复制文本）
      console.error('无法复制文本：', err);
      alert('无法复制文本，请手动复制。');
    }
  };

  return (
    <Fragment>
    <div className='p-4'>
      <div>
        <h2 className='text-3xl'>在线随机密码生成器</h2>
      </div>
      <div className='my-3.5'>
        <hr/>
      </div>
      <div className='mb-3'>
        <blockquote className='p-3.5 bg-gray-100'>
          说明：请您妥善保管随机生成的密码，本站不会以任何方式存储生成的密码。
        </blockquote>
      </div>
      <div className='flex'>
        <label htmlFor="" className='flex-none px-2 py-1.5 bg-gray-100'>使用字符</label>
        
        <Checkbox message="0-9" onDataReceived={handleDataFromChild} />
        <Checkbox message="a-z" onDataReceived={handleDataFromChild2} />
        <Checkbox message="A-Z" onDataReceived={handleDataFromChild3} />
        <Checkbox message="!@#等" onDataReceived={handleDataFromChild4} />

        <div className='flex-1 mx-1 my-1'>
          <span></span>
          <i></i>
        </div>
        <div className='flex-1 mx-1 my-1'>
          <span></span>
          <i></i>
        </div>
      </div>
      <div>
        <label htmlFor="" className='px-2 py-1.5 bg-gray-100'>密码长度</label>
        <input 
          type="number" min="1" max="20" 
          className='w-48 border border-gray-200 pl-1'
          value={lenText}
          onChange={handleInputChange}
        />
      </div>
      <div className='flex place-content-center'>
        <div>
          <button className='px-4 py-2 m-2 bg-green-500 text-white' onClick={handleButtonClick}>生成密码</button>
          <button className='px-4 py-2 m-2 border' onClick={handleCopy}>复制结果</button>
        </div>
      </div>
    
      <div className='flex flex-col border'>
        <label htmlFor="" className='w-full px-4 py-2 bg-gray-100'>生成结果</label>
        <div className='px-3 py-2 h-10'>{text}</div>
      </div>
      <MyAlert message="复制成功" isOpen={isModalOpen} />
    </div>
    </Fragment>
  );
}

export default App;
