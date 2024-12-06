import './App.css';
// import logo from './logo.svg';

function App() {
  // const divContent = "标签内容"
  const divTitle = "标签标题"

  const flag = false
  let divContent = null

  if (flag) {
    const ele = (
      <span>flag为true</span>
    );
    divContent = ele
  }else{
    divContent = <p>flag为false</p>
  }

  return (
    <>
      <div title={divTitle}>
        {divContent}
      </div>
    </>
  );
}

export default App;
