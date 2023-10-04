import React from 'react'

const Buttons = () => {
  return (
    <div className="buttons-container">
        {/* Top Row */}
        <button>AC</button>
        <button>()</button>
        <button>%</button>
        <button>/</button>

        {/* Second Row */}
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button>


        {/* Third Row */}
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>

        {/* First Row */}
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>

        {/* Fifth Row */}
        <button>0</button>
        <button>.</button>
        <button>{"<-- Back"}</button>
        <button>=</button>



    </div>
  )
}

export default Buttons