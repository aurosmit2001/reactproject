import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import './App.css'





function App() {

  const [quote, setQuote] = useState([])

  useEffect(() => {
    let data = async () => {
      let res = await axios.get("http://api.quotable.io/random")
      console.log(res);
      setQuote(res.data)
    }
    data()
  }, [])

  let fetchData = async () => {
    let res = await axios.get("http://api.quotable.io/random")
    console.log(res);
    setQuote(res.data)

  }
  const shareUrl = 'https://your-website-url.com';

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card text-center">

              <div className="card-body">
                <h3 className="card-title">Quote of the day:</h3>
                <h4 className="card-text">{quote.content}</h4>
                <h5 className='author'> ~{quote.author}</h5>



                <div className="share-buttons">
                  <FacebookShareButton url={shareUrl} quote={quote}>
                    <button>Facebook</button>
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} title={quote}>
                    <button>Twitter</button>
                  </TwitterShareButton>
                </div>


                <button className="btn btn-primary" onClick={fetchData}> New Quote</button>
              </div>
            </div>

          </div>


        </div>
      </div>






    </>
  )
}

export default App