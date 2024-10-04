import React from 'react'
import './Social.css'

function Social( { Home } ) {
  return (
    <div className={`Social ${Home}`}>
        <a href="https://github.com/UmerGitNinja/UmerGitNinja" aria-label='view github' target="_blank" className='animate__animated animate__fadeInUp'><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/umer-khan-full-stack-dev/" aria-label='view linkedin' target="_blank"  className='animate__animated animate__fadeInUp'><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://x.com/Umer81496923?t=2HzLCQOg8INU72A5SE7eKA&s=09" aria-label='view twitter' className='animate__animated animate__fadeInUp' target="_blank" ><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://instagram.com/umerkhann__?igshid=MzMyNGUyNmU2YQ==" aria-label='view instagram' className='animate__animated animate__fadeInUp' target="_blank" ><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.upwork.com/freelancers/~017d4d64c4335f6142" aria-label='view upwork' className='animate__animated animate__fadeInUp' target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.7 41.6-41.7 41.6zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1.1-46.1-37.4-83.7-83.6-83.7"/></svg></a>
    </div>
  )
}

export default Social