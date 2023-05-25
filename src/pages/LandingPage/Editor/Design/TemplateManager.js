import React from 'react'

const TemplateManager = ({ left = "51px" }) => {
  return (
    <div id="tempalte-manager" className='fixed p-3 overflow-scroll' style={{ "top": "100px", "left": left, "maxHeight": "calc(100vh - 100px)", "height": "calc(100vh - 100px)", "width": "200px", "background": "#202023", zIndex: "4" }}>
      <p className='text-md text-white/60 mb-3'><i className="fa-solid fa-circle mr-2 text-blue-600 text-sm"></i> Premade Myzers</p>
      <div className="bg-white/10 p-2 rounded flex items-center">
        <div className="w-5 bg-white/80 h-px"></div><p className="text-white/80 text-sm ml-3">🤯 Coming Soon</p>
        <div id="custom-blocks"></div>
      </div>
    </div>
  )
}

export default TemplateManager