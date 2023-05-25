import React, { useState } from 'react'
import Layers from './Layers'
import StyleManager from './StyleManager'

const RightSidebar = ({ editor }) => {
    const [open, setOpen] = useState("layer")

    return (
        <div className='absolute right-0 border border-gray-100/20' style={{ "width": "300px", "height": "calc(100vh - 50px)", "background": "#202023", "top": "50px" }}>
            <div className='flex flex-row ' style={{ "background": "#111115" }}>
                <button onClick={() => { setOpen("design") }} className={open == "design" ? "bg-selected border-gray-100/20 w-1/2 flex justify-center items-center text-white" : "border-gray-100/20 w-1/2 border-b flex justify-center items-center text-white/60"} style={{ "height": "50px" }}>
                    Design
                </button>
                <button onClick={() => { setOpen("layer") }} className={open == "layer" ? "bg-selected border-gray-100/20 w-1/2 flex justify-center items-center text-white border-l" : "border-gray-100/20 w-1/2 border-b flex justify-center items-center text-white/60 border-l"} style={{ "height": "50px" }}>
                    Layers
                </button>
            </div>
            <div className='overflow-scroll' style={{ "max-height": "calc(100vh - 100px)" }}>
                <div className={open == "layer" ? "h-full layers " : "h-0 overflow-hidden"}>
                    <Layers />
                </div>
                <div className={open == "design" ? "h-full style-manager" : "h-0 overflow-hidden"}>
                    <StyleManager editor={editor} />
                    <div className="p-3 gjs-sm-sector mx-3 text-center text-white">
                        <b>Options</b>
                        <div className='mt-3 mb-2' id='taits'></div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default RightSidebar