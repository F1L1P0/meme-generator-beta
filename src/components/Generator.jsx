import React, { useEffect, useRef, useState } from "react"
import Draggable from "react-draggable";

export default function Generator(){
console.log("i was generated again");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
      async function generateMeme(){
        const rawData = await fetch("https://api.imgflip.com/get_memes");
        const data = await rawData.json();
        let randNum = getRandomInt(100);
        let memeImg = data.data.memes[randNum].url;
        console.log(randNum);
        setSrc(memeImg);
    }
    
    const [src, setSrc] = useState(generateMeme);
    const [text, setText] = useState([])
    const [inputValue, setInputValue] = useState({
        inputName:""
    })

    function handleClick(event){
        let value = inputValue.inputName
        setText(prev=>{
            return [...prev,value]
        })
    }

    function handleOnChange(event){
        let {value,name}= event.target
        setInputValue(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    function removeTxt(){
        setText([])
    }

    function emptyCell() {
        setInputValue({ inputName: "" });
      }

    const textValues = text.map(textEl=>(<Draggable><p className="memeText">{textEl}</p></Draggable>))

    return(
        //div from was originaly <form> dont look at label input thx :O
        <main>
            <div className="generator">
                <div className="form">
                    <label className="formInput" >
                        <input onChange={handleOnChange} type="text" placeholder="Enter your text here" value={inputValue.inputName} name="inputName"/>
                    </label>
                    <button onClick={removeTxt} className="removeBtn">remove texts</button>
                    <div className="btn-container">
                        <button onClick={()=>{handleClick();emptyCell()}} className="glow-on-hover" type="button">Generate text</button>
                    </div>
                    <div className="btn-container">
                        <button onClick={generateMeme} className="glow-on-hover" type="button">Create new meme!</button>
                    </div>
                </div>
                {textValues}

                <div className="img">
                    <span className="memeText">{inputValue.inputName}</span>
                    <img src={src} alt="image"/>
                </div>
            </div>
        </main>
    )
}