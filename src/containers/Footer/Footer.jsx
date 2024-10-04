import React from 'react'
import { Social } from "../../containers";
import './Footer.css'


function Footer() {
  return (
    <div className='Footer'>
        <Social/>
        <div className="Footer__Copy-right">
           <p>Designed & Built by Umer Khan & <a href="https://muhammadhassan.vercel.app/" target='_blank'>Hassan Abdullah</a></p> 
        </div>
    </div>
  )
}

export default Footer
