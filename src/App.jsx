import React, { Component } from "react";
import "./App.css";
import { Button }  from './components/Button';
import  {Input} from './components/Input';
import {ClearButton} from './components/ClearButton';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("")


  const calculateAnswer = () => {
    setInput(evaluate(input))
  }

  return (
    <div className="app">
       <div className="calc-wrapper">
          <Input input={input} />
         <div className="row">
           <Button input={input} handleClick={setInput}>7</Button>
           <Button input={input} handleClick={setInput}>8</Button>
           <Button input={input} handleClick={setInput}>9</Button>
           <Button input={input} handleClick={setInput}>/</Button>
         </div>
         <div className="row">
           <Button input={input} handleClick={setInput}>4</Button>
           <Button input={input} handleClick={setInput}>5</Button>
           <Button input={input} handleClick={setInput}>6</Button>
           <Button input={input} handleClick={setInput}>*</Button>
         </div>
         <div className="row">
           <Button input={input} handleClick={setInput}>1</Button>
           <Button input={input} handleClick={setInput}>2</Button>
           <Button input={input} handleClick={setInput}>3</Button>
           <Button input={input} handleClick={setInput}>+</Button>
         </div>
         <div className="row">
           <Button input={input} handleClick={setInput}>.</Button>
           <Button input={input} handleClick={setInput}>0</Button>
           <Button input={input} calculateAnswer={calculateAnswer} handleClick={setInput} type="answer">=</Button>
           <Button input={input} handleClick={setInput}>-</Button>
         </div>
         <div className="row"></div>
            <ClearButton setInput={setInput}>Clear</ClearButton>
       </div>
    </div> 
  )
}

export default App;
 
