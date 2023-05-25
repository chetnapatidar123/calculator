import React, { useState } from 'react'

const index = () => {
  const [result, setResult] = useState("")

  const handlerClick = (e) => {
setResult(result.concat(e.target.name))
  }

  const clear = () => {
setResult("")
  }
  const backspace = () => {
setResult(result.slice(0,result.length-1))
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult({error})
    }
    
  }

  return (
    <div className='main'>
    <div className='box'>
      <form className='w-75 form-control mt-3 ms-4 '>
      <input type="text" value={result} />
      </form>

      <div className='w-100 mt-3'>
        <button className='btn btn-info w-25  ms-4' onClick={clear} id='clear'>Clear</button>
        <button className='btn btn-info w-25 ms-4 mt-1' onClick={backspace} id='backspace'>C</button>
        <button className='btn btn-info w-25 ms-3' name='/' onClick={handlerClick}>&divide;</button><br />

        <div className='btn w-100 d-flex justify-content-evenly mt-4'>
        <button className='btn btn-secondary' name='7' onClick={handlerClick}>7</button>
        <button className='btn btn-secondary' name='8' onClick={handlerClick}>8</button>
        <button className='btn btn-secondary' name='9' onClick={handlerClick}>9</button>
        <button className='btn btn-info' name='*' onClick={handlerClick}>&times;</button><br />
        </div>

        <div className='btn w-100 d-flex justify-content-evenly'>
        <button className='btn btn-secondary' name='4' onClick={handlerClick}>4</button>
        <button className='btn btn-secondary' name='5' onClick={handlerClick}>5</button>
        <button className='btn btn-secondary' name='6' onClick={handlerClick}>6</button>
        <button className='btn btn-info' name='-' onClick={handlerClick}>&ndash;</button><br />
        </div>

        <div className='btn w-100 d-flex justify-content-evenly'>
        <button className='btn btn-secondary' name='1' onClick={handlerClick}>1</button>
        <button className='btn btn-secondary' name='2' onClick={handlerClick}>2</button>
        <button className='btn btn-secondary' name='3' onClick={handlerClick}>3</button>
        <button className='btn btn-info' name='+' onClick={handlerClick}>+</button><br />
        </div>

        <div className='btn w-100 d-flex justify-content-evenly mt-3'>
        <button className='btn btn-secondary' name='0' onClick={handlerClick}>0</button>
        <button className='btn btn-secondary' name='.' onClick={handlerClick}>.</button>
        <button className='btn btn-info' onClick={calculate} id='result'>=</button>
      </div>

      </div>
    </div>
    </div>
  )
}

export default index