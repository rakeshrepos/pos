import {useState} from 'react';
import Modal from '@/Components/Modal';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Head, Link} from '@inertiajs/react';

export default function Layout({children}) {

    const [showModal, setShowModal] = useState(false)
    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Menu"/>
            <div className="flex">
                <div className='min-h-screen w-64 bg-gray-300'>
                    <div className='bg-amber-950 p-[1rem] text-white'>
                        <p className='text-[1.5rem] font-bold'>POS</p>
                        <p className='text-sm'>MENU</p>
                    </div>
                    <div>
                        <ul>
                            <li className='py-3 hover:bg-gray-400 px-[1rem]'>
                                <Link>Specials</Link>
                            </li>
                            <li className='py-3 hover:bg-gray-400 px-[1rem]'>
                                <Link>Classic Range</Link>
                            </li>
                            <li className='py-3 hover:bg-gray-400 px-[1rem]'>
                                <Link>Vegetarian</Link>
                            </li>
                            <li className='py-3 hover:bg-gray-400 px-[1rem]'>
                                <Link>Vegetarian</Link>
                            </li>
                            <li className='py-3 hover:bg-gray-400 px-[1rem]'>
                                <Link>Vegetarian</Link>
                            </li>
                            <li className='py-3 hover:bg-gray-400 px-[1rem]'>
                                <Link>Vegetarian</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-1'>

                    <nav className='w-full grid grid-cols-4'>
                        <div className="col-span-3">
                            <div className='bg-gray-400 h-[70px]'>
                                <input type="text" name="" id="" placeholder='search' className='w-full h-full bg-transparent'/>
                            </div>
                            <main>{children}</main>
                        </div>
                        <div className='border h-screen border-black flex flex-col justify-between'>
                            <div>
                                <div className='h-[70px] border border-black flex justify-center items-center'>
                                    <p>Orders</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className='p-[1rem]'>PICKUP</div>
                                    <div className='p-[1rem]'>ASAP</div>
                                </div>
                                <div className="grid grid-cols-4 border border-black">
                                    <button onClick={
                                            (e) => {
                                                setShowModal(true)
                                            }
                                        }
                                        className='p-[1rem] border border-black'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                    <div className='p-[1rem] border border-black'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div className='p-[1rem] border border-black'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div className='p-[1rem] border border-black'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <table>
                                        <thead>
                                            <th className='p-[1rem]'>Quantity</th>
                                            <th className='p-[1rem]'>Item</th>
                                            <th className='p-[1rem]'>Price</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='p-[1rem]'>1</td>
                                                <td className='p-[0.2rem]'>
                                                    <p>Chicken Pizza</p>
                                                    <p>Base option: Regular Base</p>
                                                </td>
                                                <td className='p-[1rem]'>$17.50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between p-[1rem]'>
                                    <p>Total</p>
                                    <p>0.00</p>
                                </div>
                                <div className='bg-orange-500 text-white p-[1rem] flex justify-center items-center'>
                                    <p className='text-[1.2rem]'>Checkout</p>
                                </div>
                            </div>

                        </div>
                    </nav>

                </div>

            </div>
            <Modal show={showModal}
                onClose={
                    () => {
                        setShowModal(false)
                    }
            }>
                <p className='border-b border-black p-[1rem]'>Customer</p>
                <div className='p-[1rem]'>
                    <div className='py-[1rem] border-b border-black'>
                        <input type="text" name="" id="" placeholder='search' className='w-full'/>
                    </div>

                    <div className='mt-5 space-y-5'>
                        <input type="text" name="" id="" placeholder='Name' className='w-full'/>
                        <input type="text" name="" id="" placeholder='Email' className='w-full'/>
                        <input type="text" name="" id="" placeholder='Phone' className='w-full'/>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button className='border border-gray-400 py-[0.5rem] px-[1rem]'>Clear Customer</button>
                    </div>

                </div>
            </Modal>
        </div>
    );
}
