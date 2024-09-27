import React from 'react'

const About = () => {
  return (
    <section id="about-section" className="content-section">
    <h2 className="aside-title">About</h2>
    <div className="items-center">
        <img src="/assets/headshot.png" className="rounded-full" alt="personal headshot"/>
        <section>
        <p className='mt-5'>Hello and welcome to my portfolio! I am an aspiring web developer and Coding Boot Camp
            student. My journey to web development began with a fascination in educational technology as a
            teacher and is evolving into a new career that encompasses full stack development.</p>

        <p className='mt-5'>Driven by creativity and technical proficiency, I am learning how to transform complex ideas into an
            intuitive digital experience. My approach to web development is rooted in an understanding of the
            user, to ensure that every project I undertake exceeds user expectations. Whether it’s building a
            responsive website from scratch or optimizing an existing application for performance and
            accessibility, I am committed to delivering high-quality work.</p>

        <p className='mt-5'>When I’m not coding, you can find me playing piano or walking my dogs. I live with my husband in Ontario, California. We recently enjoyed an Alaska cruise in June 2024 and have an upcoming trip to Singapore in February 2025!</p>
        <p className='mt-5'>Thank you for taking the time to visit my portfolio. I’m excited about the opportunity to collaborate with you and
            contribute to the success of your next digital venture. Don’t hesitate to contact me if you have any questions.</p>
        </section>
    </div>
</section>
  )
}

export default About