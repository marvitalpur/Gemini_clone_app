import { createContext, useState } from "react";
import run from "../config/Gemini";

export const context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("")

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);

        }, 75 * index);

    }

    const newChat = ()=>{
        setLoading(false);
        setShowResults(false);
    }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResults(true)
        let response;
        if (prompt !== undefined) {
            response = await run(prompt);
            setrecentPrompt(prompt)
        }
        else {
            setPrevPrompt(prev => [...prev, input])
            setrecentPrompt(input);
            response = await run(input)
        }
        // setrecentPrompt(input);
        // setPrevPrompt(prev => [...prev, input])
        // const response = await run(input);
        let responseArray = response.split("**");
        let newResponse =" ";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("<br/>");


        // setResultData(newResponse2);
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false)
        setInput("")

    }
    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setrecentPrompt,
        resultData,
        setResultData,
        showResults,
        setShowResults,
        prevPrompt,
        setPrevPrompt,
        loading,
        setLoading,
        onSent,
        newChat

    }
    return (

        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider