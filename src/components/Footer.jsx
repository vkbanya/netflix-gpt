import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
      <ul className='inline-flex w-full py-8 bg-neutral-800 text-white'>
        <div className='w-6/12 text-center'>
        <li className='w-4/12'><Link to='/faq'>FAQs</Link></li>
        <li className='w-4/12'><Link to='/helpCentre'>Help centre</Link></li>
        <li className='w-4/12'><Link to='/termOfUse'>Term of use</Link></li>
        </div>
        <div className='w-6/12 text-center'>
        <li className='w-4/12'><Link to='/contactUs'>Contact us</Link></li>
        <li className='w-4/12'><Link to='/privacy'>Privacy</Link></li>
        <li className='w-4/12'><Link to='/account'>Account</Link></li>
        </div>
      </ul>
  )
}

export default Footer
