import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const helloTxt = '안녕하십니까?';
  const logoClass = 'logo-txt';
  const setStyle = {color:'blue',fontSize: '30px'}
  function getNum(){
    return 100;
  }
  const posts = '강남고기맛집';
  const [listItems, listItemsChage] = useState([
    {title:'남자 코트 추천', like: 0, date: '5/12'},
    {title:'강남 우동 맛집', like: 0, date: '4/02'},
    {title:'리액트 스터디', like: 0, date: '3/22'}
  ]);
  // console.log(listItemsChage)
  let [likeNum, likeNumChange] = useState(0);
  function clickEvt(){
    const num = likeNum + 1;
    likeNumChange(num);
  }
  function likeClick(index){
    const list = [...listItems];
    const num = list[index].like + 1;
    list[index].like = num;
    listItemsChage(list);
  }
  function clickTxtChange(){
    const list = [...listItems];
    list[0].title  = '여자 코트 추천';
    listItemsChage(list);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div className={ logoClass}>개발 blog</div>
      </div>
      <h2 style={setStyle}> { helloTxt } </h2>
      <h2> { getNum() } </h2>
      <div style={{textAlign:'center'}}>
        <img src={ logo } alt=""  style={{maxWidth:'50%'}} />
      </div>
      <div className="list">
        <div>
          <h3>{posts}</h3>
          <div><button onClick={clickEvt}>👍{likeNum}</button></div>
        </div>
        <p> 3/17 발행</p>
      </div>
      {/* <div className="list">
        <h3>{listItems[0]} <span onClick={clickEvt}>👍</span> {likeNum}</h3>
        <p> 3/17 발행</p>
      </div>
      <div className="list">
        <h3>{listItems[1]}</h3>
        <p> 3/17 발행</p>
      </div>
      <div className="list">
        <h3>{listItems[2]}</h3>
        <p> 3/17 발행</p>
      </div> */}
      {listItems.map((item, index) => (
        // <div className="list" key={index}>
        //   <div>
        //     <h3>{item.title}</h3>
        //     <div><button onClick={() => likeClick(index)}>👍{item.like}</button></div>
        //   </div>
        //   <p>{item.date} 발행</p>
        // </div>
        <Item  key={index} title={item.title} like={item.like} date={item.data} index={index} click={likeClick} />
      ))}
      <div className="btn-wrap">
        <button onClick={clickTxtChange}>텍스트 변경</button>
      </div>

      <View />
    </div>
  );
}

function Item(props){
  return (
    <div className="list">
      <div>
        <h3>{props.title}</h3>
        <div><button onClick={() => props.click(props.index)}>👍{props.like}</button></div>
      </div>
      <p>{props.date} 발행</p>
    </div>
  )
}

function View(){
  return (
    <>
      <div className="view">
        <h2>제목</h2>
        <p>날짜</p>
        <div>상세</div>
      </div>
      <div>12345</div>
    </>
  )
}

export default App;
