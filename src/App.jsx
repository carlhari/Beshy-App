import { useState } from "react"

function App() {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(input.split(" ").join('🤸'))
  }

  return (
    <>
      <div className="App">
        <div className="title">
          BESHIFYING APP
        </div>

        <div className="form">
          <input type="text" name="input" onChange={handleChange} placeholder="Type your Sentence Here" required/>
        </div>

        <div className="txtArea">
            <textarea readOnly value={input.split(" ").join('🤸')}></textarea>
            <button type="button" onClick={handleCopy}>Copy na Beshy</button>
        </div>
      </div>
    </>
  )
}

export default App
