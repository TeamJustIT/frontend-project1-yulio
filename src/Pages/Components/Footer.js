import React from 'react';

function Footer() {
    return (
        <footer className='bg-blueTwo text-white'>

            {/* Contact Us, Company, and Community sections */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                {/* Logo and Maps */}
                <div className='mb-6'>
                    Logo & Maps
                </div>

                {/* Contact Us */}
                <div className='mb-6 p-5'>
                    <h5 className='mb-2.5 font-bold'>Contact Us</h5>

                    <ul>
                        <li>WhatsApp: +62 888 8888 8888</li>
                    </ul>
                    <ul>
                        <li>Email: anterinaja@gmail.com</li>
                    </ul>
                    <ul>
                        <li>Alamat: Jalan-jalan di akhir zaman No. 900 RT 069 RW 690</li>
                    </ul>
                </div>

                {/* Company */}
                <div className='mb-6 p-5'>
                    <h5 className='mb-2.5 font-bold'>Company</h5>

                    <ul>
                        <li>
                            <a>About Us</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a>Term of Services</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Community and Contact With Us */}
                {/* <div className='mb-6'> */}
                <div className='grid grid-rows-2  p-5'>
                    <div className='row-span-1 mb-6'>
                        <h5 className='mb-2.5 font-bold'>Community</h5>

                        <ul>
                            <li>
                                <a>Help</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Support</a>
                            </li>
                        </ul>
                    </div>

                    <div className='row-span-1'>
                        <h5 className='mb-2.5 font-bold'>Contact With Us!</h5>

                        <ul>
                            <li>
                                <a>Help</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className='p-4 text-center'>
                © 2023 Copyright: Just IT Team
            </div>
        </footer>
    )
}

export default Footer;