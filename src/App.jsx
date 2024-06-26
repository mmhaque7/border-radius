import { Fragment, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const borderBoxRef = useRef(null);

  useEffect(() => {
    const element = borderBoxRef.current
    const style = window.getComputedStyle(element)
    for (let i = 0; i < style.length; i++) {
      console.log(style[i] + ": " + style.getPropertyValue(style[i]));
    }
  }, [])

  return (
    <Fragment>
      <h1>Border Radius Previewer.</h1>
      <div className="container">
        <div ref={borderBoxRef} className="border-box">
          h
        </div>
      </div>
    </Fragment>
  )
}

export default App
