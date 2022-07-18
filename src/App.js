import logo from './logo.svg';
import './App.css';

function App() {
  const helloTxt = '안녕하십니까?';
  const logoClass = 'logo-txt';
  const setStyle = {color:'blue',fontSize: '30px'}
  function getNum(){
    return 100;
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div className={ logoClass}>개발 blog</div>
      </div>
      <h4 style={setStyle}> { helloTxt } </h4>
      <h4> { getNum() } </h4>
      <div style={{textAlign:'center'}}>
        <img src={ logo } alt=""  style={{'max-width':'50%'}} />
      </div>
    </div>
  );
}

export default App;
