import React from 'react'
import me from './me.jpg'


const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
               <div className = "col-lg-6 col-xm-12">
                   <div className="photo-wrap mb-5">
                    <img className="profile-img" src={me} alt="author...." />

                   </div>
               </div>

               <div className = "col-lg-6 col-xm-12">
                        <h1 className="about-heading">About me</h1>
                   <p>
                       Hello!<br></br>Thank you for taking the time to view my personal portfolio. My name is Nicholas Montgomery, and I love coding! Building a program from the ground up through the amazing technologies we have on the web is a truly amazing feeling to me, and I want to do it for you! I hold an undergraduate certification in web and graphic design from Devry University, and currently am going for my bachelors degree in web development. I have been coding and practicing web design for over two years now, and am proficient in such langauages such as Html, Css, Javascript, React, C# and asp.net. I live in southern Orange County, ca, with my wife, and are expecting our first child this year. I enjoy cooking, playing music, spending time with my family, and developing my coding skills! I am commited to making clean, function web applications and always keep up on the latest trends in web technology. for all job related inquiries, please feel free to contact me through this website or email me directly and i will return your message as soonn as possible!  
                   </p>
               </div>
                
            </div>
        </div>
        
    )
}

export default AboutMe
