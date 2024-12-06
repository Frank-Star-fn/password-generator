import { Fragment } from 'react';
import './App.css';
import Checkbox from './Checkbox';

function App() {

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
        
        <Checkbox message="0-9" />
        <Checkbox message="a-z" />
        <Checkbox message="A-Z" />
        <Checkbox message="!@#等" />

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
        <input type="number" min="1" max="20" className='w-48 border border-gray-200 pl-1'/>
      </div>
      <div className='flex place-content-center'>
        <div>
          <button className='px-4 py-2 m-2 bg-green-500 text-white'>生成密码</button>
          <button className='px-4 py-2 m-2 border'>复制结果</button>
        </div>
      </div>
    
      <div className='flex flex-col border'>
        <label htmlFor="" className='w-full px-4 py-2 bg-gray-100'>生成结果</label>
        <div className='px-3 py-2'>3&@JxIye</div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
