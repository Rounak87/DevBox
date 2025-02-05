import React from 'react'

const Output = ({srcDoc}) => {
  return (
    <div className=' border-none border-gray-700 p-2 pb-9 overflow-hidden h-screen'>
        <h2 className='text-sm font-bold pl-1 mb-2'>Output</h2>
        <iframe
            srcDoc={srcDoc}
            title='Output'
            sandbox='allow-scripts'
            className="w-full h-full text-white rounded-xl bg-[#1a1d2b] border-2 border-[#2b2f3a] shadow-lg"
            />


    </div>
  )
}

export default Output