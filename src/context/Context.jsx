import React, { createContext, useState, } from 'react';
import runChat from "../config/gemini";

// use API_KEY in fetch/openai code



export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput]= useState("");
    const [recentprompt, setRecentPrompt]= useState("");
    const [prevPrompts,setPrevPrompts]= useState([]);
    const [showresult, setShowResult]= useState(false);
    const [loading, setLoading]= useState(false);
    const [resultData, setResultData]= useState("");


    const onSent = async () => { 

        


        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);

        const response =  await runChat(input);
        setResultData(response);
        setLoading(false);
        setShowResult(false);
        setInput("");

    }

    

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentprompt,
        showresult,
        loading,
        resultData,
        input,
        setInput,



    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;