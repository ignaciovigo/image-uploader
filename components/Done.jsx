import React, { useState } from "react";

export default function Done({ url, newUrl }) {
    const [copied, setCopied] = useState(false)
    const handleReset = () => {
        newUrl('','initial')
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
    }
  return (
    <>
    <div className="flex flex-col items-center justify-center mb-6 gap-2">
    <figure className="w-[35px] h-[35px] bg-[#219653] rounded-full flex justify-center items-center">
    <span className="material-symbols-rounded">done</span>
    </figure>
    <h1 className='text-xl font-bold text-gray-600'>Uploaded Successfully!</h1>
    </div>
      <div className='w-[338px] h-[219px] flex items-center justify-center'>
        <img
          src={url}
          className='w-100 h-100 object-cover rounded-lg'
        />
      </div>
      <div className={`flex justify-between cursor-pointer ${copied ?'border-[#219653] text-[#219653]' : 'border-gray-500 copy text-gray-400'} border text-md ff-first  p-1 w-100 max-w-full rounded-lg mt-2`} onClick={handleCopy}>
        <p className='text-md ff-first max-w-[90%] truncate overflow-hidden'>
          {url}
        </p>
        <span className='material-symbols-rounded'>content_copy</span>
      </div>
        <span className={`${ !copied && 'invisible'} ff-first text-sm`}>Copied!</span>
      <button className='px-2 py-1 bg-sky-600 hover:bg-sky-700 ef-hover text-white rounded-lg cursor-pointer' onClick={handleReset}>Reset</button>
    </>
  );
}
