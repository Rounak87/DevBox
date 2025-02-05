import React, { useEffect, useState } from "react";
import Panel from "./Panel.jsx";
import Output from "./Output.jsx";

const Editor = () => {
  const [html, sethtml] = useState("<h1>Hello user</h1>");
  const [css, setcss] = useState("/*CSS goes here*/");
  const [javascript, setjavascript] = useState("/*JS fun stuff here*/");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
    <head>
            <style>
            
            body {
                color: white; 
                font-family: Arial, sans-serif; 
                over-flow: hidden;
            }
                 ${css}
        </style>

    </head>

    <body>
    

    ${html}


    <script>${javascript}</script>


    </body>
    </html>
    
    `);
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <div className="bg-gray-900 h-screen text-white flex  ">
      <div className="left flex  flex-col o w-1/4 border-none h-full  border-gray-700">
        <div className="h-1/2 w-full flex-1 pb-1">
          <Panel 
          title="HTML" 
          value={html} 
          language="html" 
          onchange={sethtml} />
        </div>
        <div className="h-1/2 w-full flex-1 pb-1">
          <Panel 
          title="CSS" 
          value={css} 
          language="css" 
          onchange={setcss} />
        </div>
      </div>

      <div className="middle w-1/2 h-full flex flex-col overflow-hidden ">
        <Output srcDoc={srcDoc} />
      </div>

      <div className="right w-1/4 h-screen border-none border-gray-700 flex flex-col pb-1">
        <Panel
          title="JavaScript"
          value={javascript}
          language="javascript"
          onchange={setjavascript}
        />
      </div>
    </div>
  );
};

export default Editor;
