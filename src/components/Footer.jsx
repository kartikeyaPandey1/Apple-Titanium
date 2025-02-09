import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font semibold text-gray'>
                    More ways to Shop :{' '}
                    <span className='underline text-blue'> 
                        Find an Apple store {' '}
                    </span>
                    {' '}or{' '}
                    <span className='underline text-blue'>
                       {'  '}  Other retailer...{'  '}
                    </span>

                </p>
                <p className='font semibold text-gray py-3'>
                   or Call 91-8477335369

                </p>
            </div>
            <div className='h-[1px] bg-neutral-600 my-5 w-full '/>

            <div className="flex md:flex-row flex-col md:items-center justify-between">
                <p className="font semibold text-gray">
                    Copyrights @ 2025 Apple Inc. All Rights reserved.

                </p>
                <div className='flex'>
                    {footerLinks.map((link)=>(
                        <p key={link} className='font semibold text-gray px-2'>
                            {link}{'  '}
                        </p>
                    ))}

                </div>

            </div>

        </div>

    </footer>
  )
}

export default Footer
