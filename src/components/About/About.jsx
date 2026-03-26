import React from 'react'
import profile from '../../assets/myphoto.jpeg'

function About() {
  return (
    <section
      id='about'
      className="py-2 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/*Left Side.*/}

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

          {/*Greeting*/}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h2>

          {/*Name*/}

          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Neeraj Bisht
          </h3>

          {/*Skills Heading.*/}

          <h4 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a &nbsp;
            </span>
            <span className='text-[#8245ec]'>
              Full Stack Developer.
            </span>
          </h4>
{/*About Me Paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            Hello, Welcome to my profile!<br/>
            I'm from Uttarakhand and had done my education from there. I'm a full stack developer who loves turning ideas into interactive, functional, and bug-free realities.
            I build cool stuff using React on the frontend and power it up with backend magic from Node.js, and sometimes Spring Boot.
            Whether it's MongoDB or MySQL, I enjoy making data fly. As a fresher, I'm always curious, quick to learn new tech, and excited about exploring tools that make development smoother and smarter.
          </p>

          <a href="https://drive.google.com/file/d/1VFJic9zz3wUCuQ56EhcL9TrzwwPbsEGv/view?usp=sharing"
            target='_blank'
            rel='nooperner noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={
              {
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
          >
            Download CV
          </a>
        </div>

        {/* Right side.*/}

        <div className='md:w-1/2 flex justify-center md:justify-end '>
          <span className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full">
            <img src={profile}
              alt="Neeraj Bisht"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
          </span>
        </div>
      </div>

    </section>
  )
}

export default About
