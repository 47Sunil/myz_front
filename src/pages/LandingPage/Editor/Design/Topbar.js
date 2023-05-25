import React, { useState, useEffect } from 'react'

const Topbar = ({ editor, id }) => {

    const [outline, setOutline] = useState(false)
    const [preview, setPreview] = useState();
    const [saving, setSaving] = useState(false);
    const [changes, setChanges] = useState(0)


    if (editor){
        editor.on("all", () => {
            setChanges(editor.getDirtyCount())
        })
 
    }
    
    

    const handleOutline = () => {
        setOutline(outline ? false : true)
        if (outline) {
            editor.runCommand('sw-visibility')
        }
        else {
            editor.stopCommand('sw-visibility')
        }
    }
    const handlePreview = () => {
        setPreview(preview ? false : true)
        if (preview) {
            editor.runCommand('preview')
        }
        else {
            editor.stopCommand('preview')
        }
    }
    const handleRedo = () => {
        setPreview(preview ? false : true)
        if (preview) {
            editor.runCommand('preview')
        }
        else {
            editor.stopCommand('preview')
        }
    }

    const handleSave = async () => {
        setSaving(true)
        await editor.store()
        await fetch('/api/v1/page/publish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
        setSaving(false)
    }

    const handleDraft = async () => {
        setSaving(true)
        await editor.store()
        await fetch('/api/v1/page/draft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
        setSaving(false)
    }


    return (
        <>{
            saving && <div className="bg-gray-900 absolute z-10  w-screen h-screen p-12 flex items-center justify-center"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg><p className="text-xl text-white">Saving...</p></div>
        }
            <div id="topbar" className="flex flex-row justify-between items-center " style={{ "background": "#111115", "height": "50px" }}>
                <div className='flex flex-row'>
                    <div className="left-part flex flex-row">
                        <div className='text-white flex justify-center items-center border-r border-b border-gray-100/30' style={{ "width": "51px", "height": "50px" }}>
                            <img src='https://res.cloudinary.com/lpmaker/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1662641313/Layer_3_ztsn8o.jpg' className='h-full w-full p-3'></img>
                        </div>
                        <div className='text-white flex justify-center items-center border-r border-gray-100/30 px-3 text-sm mr-2' style={{ "height": "50px" }}>
                            <span className='opacity-40 mr-2'>New to Myzer? </span>Master it Now <svg width="14" className='ml-2' height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.125 8.75C13.0101 8.74993 12.8963 8.77252 12.7901 8.81647C12.6839 8.86042 12.5874 8.92487 12.5061 9.00614C12.4249 9.0874 12.3604 9.18389 12.3165 9.29007C12.2725 9.39626 12.2499 9.51007 12.25 9.625V12.25H1.75V1.75H4.375C4.60706 1.75 4.82962 1.65781 4.99372 1.49372C5.15781 1.32962 5.25 1.10706 5.25 0.875C5.25 0.642936 5.15781 0.420376 4.99372 0.256282C4.82962 0.0921874 4.60706 1.40658e-07 4.375 1.40658e-07H0.875C0.760075 -6.50389e-05 0.646264 0.022523 0.540075 0.0664728C0.433886 0.110423 0.337401 0.174872 0.256136 0.256136C0.174872 0.337401 0.110423 0.433886 0.0664728 0.540075C0.022523 0.646264 -6.50389e-05 0.760075 1.40658e-07 0.875V13.125C-6.50389e-05 13.2399 0.022523 13.3537 0.0664728 13.4599C0.110423 13.5661 0.174872 13.6626 0.256136 13.7439C0.337401 13.8251 0.433886 13.8896 0.540075 13.9335C0.646264 13.9775 0.760075 14.0001 0.875 14H13.125C13.2399 14.0001 13.3537 13.9775 13.4599 13.9335C13.5661 13.8896 13.6626 13.8251 13.7439 13.7439C13.8251 13.6626 13.8896 13.5661 13.9335 13.4599C13.9775 13.3537 14.0001 13.2399 14 13.125V9.625C14.0001 9.51007 13.9775 9.39626 13.9335 9.29007C13.8896 9.18389 13.8251 9.0874 13.7439 9.00614C13.6626 8.92487 13.5661 8.86042 13.4599 8.81647C13.3537 8.77252 13.2399 8.74993 13.125 8.75V8.75Z" fill="#fff" />
                                <path d="M13.125 1.40658e-07H9.62499C9.39292 1.40658e-07 9.17036 0.0921874 9.00627 0.256282C8.84217 0.420376 8.74999 0.642936 8.74999 0.875C8.74999 1.10706 8.84217 1.32962 9.00627 1.49372C9.17036 1.65781 9.39292 1.75 9.62499 1.75H11.0127L5.50633 7.25635C5.42472 7.33751 5.35992 7.43398 5.31565 7.54022C5.27138 7.64647 5.24851 7.7604 5.24835 7.8755C5.24819 7.9906 5.27075 8.1046 5.31472 8.21097C5.35869 8.31734 5.42322 8.41399 5.50461 8.49538C5.586 8.57677 5.68264 8.6413 5.78901 8.68527C5.89538 8.72924 6.00938 8.75179 6.12448 8.75163C6.23958 8.75147 6.35352 8.7286 6.45977 8.68434C6.56601 8.64007 6.66248 8.57527 6.74364 8.49365L12.25 2.98731V4.375C12.25 4.60707 12.3422 4.82962 12.5063 4.99372C12.6704 5.15781 12.8929 5.25 13.125 5.25C13.3571 5.25 13.5796 5.15781 13.7437 4.99372C13.9078 4.82962 14 4.60707 14 4.375V0.875C14.0001 0.760075 13.9775 0.646264 13.9335 0.540075C13.8896 0.433886 13.8251 0.337401 13.7439 0.256136C13.6626 0.174872 13.5661 0.110423 13.4599 0.0664728C13.3537 0.022523 13.2399 -6.50389e-05 13.125 1.40658e-07V1.40658e-07Z" fill="#fff" />
                            </svg>
                        </div>
                        <button onClick={() => { handlePreview() }} className='text-white flex justify-center items-center border-r border-gray-100/30' style={{ "width": "51px", "height": "50px" }}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C9.934 7 4.798 10.776 3 16C4.798 21.224 9.934 25 16 25C22.066 25 27.202 21.224 29 16C27.202 10.776 22.066 7 16 7Z" stroke="#717179" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" stroke="#D0D0D0" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className='flex flex-row '>
                    <div className='text-white h-5/6 border-gray-100/20 border rounded px-7 py-1 text-sm flex'>{editor?.getDirtyCount()} unsaved changes</div>
                    
                </div>
                <div className='flex flex-row'>
                    <button onClick={() => { handleOutline() }} className='text-white h-5/6 border-gray-100/50 px-3'>
                        <div className='text-white flex justify-center items-center border-r border-l border-gray-100/30 p-3' style={{ "width": "51px", "height": "50px" }}>
                            <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="-4.37114e-08" y1="0.5" x2="40" y2="0.499997" stroke="#D0D0D0" />
                                <line x1="4.37114e-08" y1="32.5" x2="40" y2="32.5" stroke="#D0D0D0" />
                                <line x1="0.5" y1="3.28564" x2="0.499999" y2="29.5714" stroke="#fff" stroke-dasharray="2 2" />
                                <line x1="39.3572" y1="3.28564" x2="39.3572" y2="29.5714" stroke="#fff" stroke-dasharray="2 2" />
                            </svg>
                        </div>
                    </button>
                    <div style={{ "width": "275px" }} className="flex flex-row gap-3 mr-3">
                        <div className='w-1/2 flex items-center'>
                            <button onClick={e => {handleDraft()}} className='px-3 h-4/6 border border-gray-100/20 rounded color-white text-sm w-full flex items-center justify-center text-white' style={{ "background": "rgba(33, 33, 33, 0.13)" }}>
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6793 14H0.778622C0.572119 14 0.374073 13.918 0.228053 13.7719C0.0820333 13.6259 0 13.4279 0 13.2214C0 13.0149 0.0820333 12.8168 0.228053 12.6708C0.374073 12.5248 0.572119 12.4428 0.778622 12.4428H11.6793C12.7119 12.4428 13.7021 12.0326 14.4322 11.3025C15.1623 10.5724 15.5724 9.58216 15.5724 8.54964C15.5724 7.51713 15.1623 6.5269 14.4322 5.7968C13.7021 5.0667 12.7119 4.65653 11.6793 4.65653H0.778622C0.617667 4.65589 0.460867 4.60539 0.329797 4.51196C0.198728 4.41854 0.0998315 4.2868 0.0467173 4.13486C-0.00626337 3.98272 -0.0107505 3.8179 0.0338745 3.6631C0.0784995 3.50831 0.17004 3.37117 0.295877 3.27059L4.18899 0.156097C4.35073 0.0345927 4.55341 -0.019194 4.75411 0.00612549C4.95481 0.0314449 5.13778 0.133883 5.26428 0.291749C5.39077 0.449615 5.45086 0.650514 5.43182 0.85191C5.41278 1.05331 5.3161 1.23938 5.16227 1.37075L2.9977 3.09929H11.6793C13.1249 3.09929 14.5112 3.67352 15.5333 4.69566C16.5555 5.7178 17.1297 7.10412 17.1297 8.54964C17.1297 9.99517 16.5555 11.3815 15.5333 12.4036C14.5112 13.4258 13.1249 14 11.6793 14Z" fill="#E37C00" />
                                </svg>
                                <span className='ml-3'>Save Draft</span></button>
                        </div>
                        <div className='w-1/2 flex items-center'>
                            <button onClick={()=> {handleSave()}} className='px-3 h-4/6 border border-gray-100/20 rounded color-white text-sm w-full flex items-center justify-center text-white bg-white/10' >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.125 8.75C13.0101 8.74993 12.8963 8.77252 12.7901 8.81647C12.6839 8.86042 12.5874 8.92487 12.5061 9.00614C12.4249 9.0874 12.3604 9.18389 12.3165 9.29007C12.2725 9.39626 12.2499 9.51007 12.25 9.625V12.25H1.75V1.75H4.375C4.60706 1.75 4.82962 1.65781 4.99372 1.49372C5.15781 1.32962 5.25 1.10706 5.25 0.875C5.25 0.642936 5.15781 0.420376 4.99372 0.256282C4.82962 0.0921874 4.60706 1.40658e-07 4.375 1.40658e-07H0.875C0.760075 -6.50389e-05 0.646264 0.022523 0.540075 0.0664728C0.433886 0.110423 0.337401 0.174872 0.256136 0.256136C0.174872 0.337401 0.110423 0.433886 0.0664728 0.540075C0.022523 0.646264 -6.50389e-05 0.760075 1.40658e-07 0.875V13.125C-6.50389e-05 13.2399 0.022523 13.3537 0.0664728 13.4599C0.110423 13.5661 0.174872 13.6626 0.256136 13.7439C0.337401 13.8251 0.433886 13.8896 0.540075 13.9335C0.646264 13.9775 0.760075 14.0001 0.875 14H13.125C13.2399 14.0001 13.3537 13.9775 13.4599 13.9335C13.5661 13.8896 13.6626 13.8251 13.7439 13.7439C13.8251 13.6626 13.8896 13.5661 13.9335 13.4599C13.9775 13.3537 14.0001 13.2399 14 13.125V9.625C14.0001 9.51007 13.9775 9.39626 13.9335 9.29007C13.8896 9.18389 13.8251 9.0874 13.7439 9.00614C13.6626 8.92487 13.5661 8.86042 13.4599 8.81647C13.3537 8.77252 13.2399 8.74993 13.125 8.75V8.75Z" fill="#5EC269" />
                                    <path d="M13.125 1.40658e-07H9.62499C9.39292 1.40658e-07 9.17036 0.0921874 9.00627 0.256282C8.84217 0.420376 8.74999 0.642936 8.74999 0.875C8.74999 1.10706 8.84217 1.32962 9.00627 1.49372C9.17036 1.65781 9.39292 1.75 9.62499 1.75H11.0127L5.50633 7.25635C5.42472 7.33751 5.35992 7.43398 5.31565 7.54022C5.27138 7.64647 5.24851 7.7604 5.24835 7.8755C5.24819 7.9906 5.27075 8.1046 5.31472 8.21097C5.35869 8.31734 5.42322 8.41399 5.50461 8.49538C5.586 8.57677 5.68264 8.6413 5.78901 8.68527C5.89538 8.72924 6.00938 8.75179 6.12448 8.75163C6.23958 8.75147 6.35352 8.7286 6.45977 8.68434C6.56601 8.64007 6.66248 8.57527 6.74364 8.49365L12.25 2.98731V4.375C12.25 4.60707 12.3422 4.82962 12.5063 4.99372C12.6704 5.15781 12.8929 5.25 13.125 5.25C13.3571 5.25 13.5796 5.15781 13.7437 4.99372C13.9078 4.82962 14 4.60707 14 4.375V0.875C14.0001 0.760075 13.9775 0.646264 13.9335 0.540075C13.8896 0.433886 13.8251 0.337401 13.7439 0.256136C13.6626 0.174872 13.5661 0.110423 13.4599 0.0664728C13.3537 0.022523 13.2399 -6.50389e-05 13.125 1.40658e-07V1.40658e-07Z" fill="#5EC269" />
                                </svg>
                                <span className='ml-3'>Publish</span></button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Topbar