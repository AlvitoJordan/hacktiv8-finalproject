
import React from 'react'

const Card = () => {
  return (
    <div className='bg-bg_color px-[70px] h-auto justify-center items-center flex'>
        <div className="container  h-full mx-auto  flex justify-center relative items-center flex-col mt-8 mb-8">
            <h1 className='text-text_color text-5xl font-extrabold w-full text-center border-b-4 border-[#C8CDFF] border-opacity-50 pb-5 '>INDONESIA NEWS</h1>
            {/* <div className="w-full flex flex-row flex-wrap justify-center items-center"> */}
                

            <div className="flex flex-row flex-wrap justify-center items-start gap-5 w-full mt-6">
            
                <div key="1"  className='max-w-[400px] w-full min-h-[550px] h-full flex flex-col justify-between shadow-box_item bg-white_color p-6 rounded-2xl'>
                    <h2 className='text-2xl font-bold text-text_color mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit mulai</h2>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM0CZGCN-Bl1O3IdDxuKWjr_CxhZLBQ5pwA&usqp=CAU"  alt="nama" className='w-full h-[190px] bg-text_color rounded-md mb-3 object-cover'/>
                    <p className='text-[#87B4FF] text-base mb-3'>
                       artikel | Inpo
                    </p>
                    <p className='text-sm text-text_color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus mollitia fuga sapiente nam eius vel emo maiores asperiores porro neque consequuntur eligendi blanditiis?</p>
                    
                    <div className="flex flex-row justify-end gap-3 mt-6">
                        <a href="#p" target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-lg text-white_color bg-blue_color font-semibold'>
                            News Page
                        </a>
                        <p className='px-4 py-2 rounded-lg text-white_color bg-green_color font-semibold flex flex-row gap-3 justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.9395 0H2.79343C1.56736 0 0.575355 0.9 0.575355 2L0.564209 18L8.36648 15L16.1687 18V2C16.1687 0.9 15.1656 0 13.9395 0Z" fill="white"/>
                            </svg>
                            Save
                            </p>
                    </div>
                </div>
                  
                <div key="2"  className='max-w-[400px] w-full min-h-[550px] h-full flex flex-col justify-between shadow-box_item bg-white_color p-6 rounded-2xl'>
                    <div className="">
                        <h2 className='text-2xl font-bold text-text_color mb-2'>Lorem ipsum dolor adipisicing elit mulai</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PEj9o_5TFRDK2IM-86SylUGPUJ_rwKIygQ&usqp=CAU" alt="nama" className='w-full h-[190px] bg-text_color rounded-md mb-3 object-cover'/>
                        <p className='text-[#87B4FF] text-base mb-3 '>
                        artikel | Inpo
                        </p>
                        <p className='text-sm text-text_color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus mollitia fuga sapiente nam eius vel emo maiores asperiores porro neque consequuntur eligendi blanditiis?</p>
                    </div>
                    <div className="flex flex-row justify-end gap-3 mt-6 ">
                        <a href="#a" target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-lg text-white_color bg-blue_color font-semibold'>
                            News Page
                        </a>
                        <p className='px-4 py-2 rounded-lg text-white_color bg-green_color font-semibold flex flex-row gap-3 justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.9395 0H2.79343C1.56736 0 0.575355 0.9 0.575355 2L0.564209 18L8.36648 15L16.1687 18V2C16.1687 0.9 15.1656 0 13.9395 0Z" fill="white"/>
                            </svg>
                            Save
                            </p>
                    </div>
                </div>

                <div key="2"  className='max-w-[400px] w-full  min-h-[550px] h-full flex flex-col justify-between shadow-box_item bg-white_color p-6 rounded-2xl'>
                    <h2 className='text-2xl font-bold text-text_color mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit mulai</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYg-yATVnqpRSTJUj7xHvoCZCQt-xjvrgRw&usqp=CAU"   alt="nama" className='max-w-full h-[190px] bg-text_color rounded-md mb-3 object-cover'/>
                    <p className='text-[#87B4FF] text-base mb-3'>
                       artikel | Inpo
                    </p>
                    <p className='text-sm text-text_color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus mollitia fuga sapiente nam eius vel emo maiores asperiores porro neque consequuntur eligendi blanditiis?</p>
                    
                    <div className="flex flex-row justify-end gap-3 mt-6">
                        <a href="#R" target="_blank" rel="noopener noreferrer" className='px-4 py-2 rounded-lg text-white_color bg-blue_color font-semibold'>
                            News Page
                        </a>
                        <p className='px-4 py-2 rounded-lg border-[3px] border-blue_color text-blue_color bg-white_color font-semibold flex flex-row gap-3 justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.9398 0H2.79367C1.5676 0 0.575599 0.9 0.575599 2L0.564453 18L8.36672 15L16.169 18V2C16.169 0.9 15.1658 0 13.9398 0Z" fill="#7479F5"/>
                            </svg>
                            Save
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card
