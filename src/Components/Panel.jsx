import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";



const Panel = ({ title, language, value, onchange }) => {
    let extensions = [];

    if (language === "javascript") extensions = [javascript()];
    if (language === "html") extensions = [html()];
    if (language === "css") extensions = [css()];
    return (
        <div className='flex h-full flex-col border-none  border-gray-700'>
            <div className='flex items-center justify-between' >
            <h2 className="text-sm font-bold p-2">{title}</h2>
            {/* <button>icon</button> */}
            </div>
            
            <div className="flex-1 overflow-hidden bg-[#282c34] rounded-xl">
                <CodeMirror
                    value={value}
                    extensions={extensions}
                    theme={oneDark}
                    onChange={(val) => onchange(val)}
                    basicSetup={{
                        lineNumbers: true,
                        lineWrapping: true, 
                    }}
                    className="w-full h-full" 
                    style={{
                        scrollbarWidth: 'none',  
                        msOverflowStyle: 'none', 
                        overflowX: 'hidden',     
                        whiteSpace: 'pre-wrap',   
                    }}
                />
            </div>
        </div>
    )
}

export default Panel