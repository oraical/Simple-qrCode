import {useState, useEffect} from 'react';

import './App.css'


function App(){
  

  const [temp, setTemp] = useState('');
  const [search, setSearch] = useState('hi');
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] =useState("00000000");
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${search}!&bgcolor=${bgColor}`)   

  }, [search, size, bgColor]);


  function handleClick(){

    setSearch(temp)
  }
  return(
      <main className="main">
       
        <h1 className='tiny logo'>Make QR Code</h1>


        <div className="input">


          <section className='top'>          
          <h1 className='pacifico'>Simple QR-Code</h1>
          <p>Generate Your simple QR-code with just one click</p>
          </section>


          <section className="bottom">

            <input type="text" name="inputBox" placeholder='Just Drop anything' id="inputBox" onChange={
              (e) => {
                  setTemp(e.target.value);
              }
            } />


            <button type="submit" className='button-89' onClick={handleClick}>
              Generate
            </button>


            <h2>Change Background Color</h2>
            <input type="color" name="Color" id="color" onChange={(e)=>{
              setBgColor(e.target.value.substring(1))
            }}  />

          </section>
        </div>


        <div className="output">

          <img src={qrCode} alt="QR-code" />

         
            <button type="button" className='button-33'><a href={qrCode} download={qrCode}>Free Download Now</a></button>
         
        </div>


        <div className="footer">
        <p>&copy; 2024 all copyrights are reserve.</p>
        </div>

      </main>

  )
}


export default App;