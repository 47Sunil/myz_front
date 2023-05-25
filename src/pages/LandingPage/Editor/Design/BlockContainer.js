import React from 'react'

const BlockContainer = (props) => {
  return (
    <div className='fixed p-3 overflow-scroll ' style={{ "top": "100px", "left": "50px", "maxHeight": "calc(100vh - 100px)", "height": "calc(100vh - 100px)", "width": "200px", "background": "#202023", zIndex: "4" }}>
      <p className='text-md text-white/60 mb-3'><i className="fa-solid fa-circle mr-2 text-blue-600 text-sm"></i> Custom Blocks</p>
      <div id="blocks" className='mb-6'></div>
    </div>
  )
}

export default BlockContainer