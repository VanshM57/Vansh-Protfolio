import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import portfolioImage from '../../assets/portfolioImage.png'
import cv from '../../assets/Vansh Mishra-CV.pdf'
const About = () => {
  return (
    <section id='about'
     className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Vansh Mishra
          </h2>
          {/* skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am </span>
            <ReactTypingEffect
              text={[
                "Vansh Mishra",
                "a MERN Stack Developer",
                "a Software Engineer",
                "a Coder",
                "a Tech Enthusiast",
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
              cursorRenderer={(cursor) => (
                <span className='text-[#8245ec]'>{cursor}</span>
              )}
            />
          </h3>
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a passionate MERN Stack Developer with a keen interest in building dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills. Let's connect and create something amazing together!
          </p>
          {/* resume button */}
          
          <a href={cv} download=""
           target='_blank' 
           rel='noopener noreferrer' 
           className='inline-block text-white py-3 px-8 rounded-full mt-5
            text-lg font-bold transition duration-300 transform hover:scale-105' 
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 40px #8245ec'

            }}>Download CV</a>
        </div>
        {/* right side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full' 
          tiltMaxAngleX={20} 
          tiltmaxandleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >
            <img src={portfolioImage} alt="Vansh Mishra" 
            className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About