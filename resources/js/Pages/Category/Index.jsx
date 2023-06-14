import Layout from '@/Layouts/Layout'
import React, {useState} from 'react'
import Modal from '@/Components/Modal'
function Index() {

    const [showModal, setShowModal] = useState(false)
    return (
        <Layout>
            <div className="grid grid-cols-5 gap-4 place-items-center p-[1rem]">
                <button onClick={
                        () => {
                            setShowModal(true)
                        }
                    }
                    className='h-[150px] w-[150px] border border-black flex justify-center items-center'>
                    <p>Test</p>
                </button>
                <button className='h-[150px] w-[150px] border border-black flex justify-center items-center'>
                    <p>Test</p>
                </button>
                <button className='h-[150px] w-[150px] border border-black flex justify-center items-center'>
                    <p>Test</p>
                </button>
                <button className='h-[150px] w-[150px] border border-black flex justify-center items-center'>
                    <p>Test</p>
                </button>
                <button className='h-[150px] w-[150px] border border-black flex justify-center items-center'>
                    <p>Test</p>
                </button>
                <button className='h-[150px] w-[150px] border border-black flex justify-center items-center'>
                    <p>Test</p>
                </button>
                <button className='h-[150px] w-[150px] border border-black flex justify-center items-center'>
                    <p>Test</p>
                </button>

            </div>

            <Modal show={showModal}
                onClose={
                    () => {
                        setShowModal(false)
                    }
            }>
                <div className="flex justify-between bg-white border-b bordr-black p-[1rem]">
                    <p>Test</p>
                    <p>$1.233</p>
                </div>
                <div className='flex justify-between p-[1rem] bg-gray-300'>
                    <p>asdfas skdf</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                    </svg>
                </div>
                <div>
                    <div className="flex justify-between p-[1rem] border-b border-black">
                        <p>asdf asdf</p>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex justify-between p-[1rem] border-b border-black">
                        <p>asdf asdf</p>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex justify-between p-[1rem] border-b border-black">
                        <p>asdf asdf</p>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex justify-between p-[1rem] border-b border-black">
                        <p>asdf asdf</p>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>

                <div className='flex justify-between p-[1rem] bg-gray-300'>
                    <p>asdfas skdf</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                    </svg>
                </div>

                <div className='flex justify-between p-[1rem] bg-gray-300'>
                    <p>asdfas skdf</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                    </svg>
                </div>
                <div className="flex justify-between">
                    <div className='flex'>
                        <button className='h-[60px] w-[70px] bg-orange-500 text-white text-[2rem]'>-</button>
                        <p className='h-[60px] w-[70px] flex justify-center items-center'>1</p>
                        <button className='h-[60px] w-[70px] bg-orange-500 text-white text-[2rem]'>+</button>
                    </div>
                    <button className='h-[60px] w-[100px] bg-orange-500 text-white '>Add to Cart</button>
                </div>
            </Modal>

        </Layout>
    )
}

export default Index
