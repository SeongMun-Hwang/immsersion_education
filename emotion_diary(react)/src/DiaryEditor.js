import { useRef, useState } from "react";

const DiaryEditor=()=>{
    const authorInput=useRef();
    const contentInput=useRef();

    const [state,setState]=useState({
        author: "",
        content: "",
        emotion: 3,
    });

    const handleChangeState=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit=()=>{
        if(state.author.length<1){
            authorInput.current.focus();
            return ;
        }

        if(state.content.length<5){
            contentInput.current.focus();
            return ;
        }
        console.log("저장 성공");
    }

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input name="author" ref={authorInput} value={state.author} onChange={handleChangeState}></input>
        </div>
        <div>
            <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState}></textarea>
        </div>
        <div>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장</button>
        </div>
    </div>;
}
export default DiaryEditor;