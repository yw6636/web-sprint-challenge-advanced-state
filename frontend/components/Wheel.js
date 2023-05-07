import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {
  const style = [1,2,3,4,5,6]
  return (
    <div id="wrapper">
      <div id="wheel">
        {style.map((num, idx) => {
          return (
            <div key={num} className={idx === props.wheel ? 'cog active' : 'cog'} style={{"--i": `${idx}`}}>
              {idx === props.wheel ? 'B' : ''}
            </div>
          )
        })}
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div> */}
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick ={() => props.moveCounterClockwise()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => props.moveClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise})(Wheel)
