import React, { useContext } from 'react'
import './main.css';
import { assets } from '../../assets/assets';
import { context } from '../../context/context';

const Main = () => {
  const {
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
    onSent } = useContext(context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt='' />
      </div>
      <div className="main-container">
        { !showResults ? <>
          <div className="greet">
          <p><span>Hello, Marvi</span></p>
          <p>How can I help today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Lorem, ipsum dolor sit amet sint possimus molestias!</p>
            <img src={assets.compass_icon} />
          </div>
          <div className="card">
            <p>Lorem, ipsum dolor sit amet sint possimus molestias!</p>
            <img src={assets.bulb_icon} />
          </div>
          <div className="card">
            <p>Lorem, ipsum dolor sit amet sint possimus molestias!</p>
            <img src={assets.message_icon} />
          </div>
          <div className="card">
            <p>Lorem, ipsum dolor sit amet sint possimus molestias!</p>
            <img src={assets.code_icon} />
          </div>
        </div>
        </> : <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
          <p>  {recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> :
             <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            }
          </div>
          </div>}
        <div className="main-bottom">
          <div className="searchbox">
            <input
              onChange={(e) => setInput(e.target.value)}
                // console.log(e.target.value)
              value={input}
              type="text"
              placeholder="Enter Prompt here .." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
            {input ?   <img
                onClick={()=>onSent()}
                src={assets.send_icon}
                alt="" /> :null}
            </div>
          </div>
          <p className='bottom-info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas optio iste distinctio culpa eligendi dolorum laudantium nisi nobis laboriosam dignissimos odit veniam eveniet eum magni, soluta similique repellendus commodi veritatis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main