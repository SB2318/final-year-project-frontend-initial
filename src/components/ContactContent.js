import React from 'react'
import "../Styles/ContactContent.css";


const ContactContent = () => {
  return (
      
    <div className='formContainer'>
    <form>

        
        <input type="text" placeholder='Your Name'></input>

       
        <input type="email" placeholder='Your Email'></input>


        <input type="text" placeholder='Subject'></input>

       
        <textarea rows="6" placeholder="Type your message here"/>

       <button className='btn'>Submit</button>
    </form>
    </div>
  )
}

export default ContactContent