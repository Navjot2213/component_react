import React, { useState, useEffect } from "react";
import "./app.css"

function App() {
  const [data, setData] = useState({});

  const dataSet1= { 
    set: 1,
    food: "30%",
    Shopping: "60%",
    movie: "10%",
    sar: 50.8
  }

  const dataSet2 = {
    set: 2,
    food: "40%",
    Shopping: "20%",
    movie: "40%",
    sar: 60
  }

  function changeData(){
    data.set==dataSet1.set?setData(dataSet2):setData(dataSet1);
  }
  return (
    <>
    <button style={{margin: "10px 0"}} onClick={changeData}>Change Value</button>

    <div className="box">
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h4>Your Total Spend</h4>
        <div className="underline">
          <select className="options">
            <option>this week </option>
          </select>
        </div>
      </div>

      <div className="SAR">
        <p>SAR <span>{data.sar}</span></p>
      </div>

      <div className="progressbar">
        <div style={{width: data.food, background: "#ffb800"}}/>
        <div style={{width: data.Shopping, background: "#1ba493"}}/>
        <div style={{width: data.movie, background: "#e44816"}}/>
      </div>      
      <div className="ticks">
        <div className="dot" style={{background: "#ffb800"}}/><p>Food</p>
        <div className="dot" style={{background: "#1ba493"}}/><p>Shopping</p>
        <div className="dot" style={{background: "#e44816"}}/><p>Movies</p>
      </div>
    </div>

    </>

          

  );
}

export default App;
