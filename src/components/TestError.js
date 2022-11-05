import React, { useState } from 'react'

function TestError() {
    const [testmessage, setTestmessage] = useState('')

    function ErrorBoundarytest(event){
     event.preventDefault(
        setTestmessage(event.target.value)
     )
    }
    function Firetest(){
        throw new Error('sorry something went wrong')
    }
  return (
    <div>
      <input type='text' placeholder='fire' onChange={ErrorBoundarytest} value={testmessage} autoFocus/>
      {testmessage === 'fire' ? <Firetest /> : ''} 
    </div>
  )
}

export default TestError
