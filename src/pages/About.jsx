import React from 'react'

const About = () => {
  return (
    <section id="about-section" className="content-section">
  <h2 className="aside-title montserrat m-5 text-4xl text-center">About</h2>
    <div className="flex flex-auto items-center text-center justify-evenly">
        <img src="/assets/headshot.png" className="m-5 rounded-full h-auto w-auto" alt="personal headshot"/>
        <section className="max-w-3xl">
        <p className='m-5 montserrat text-xl text-left leading-8'>Hello and welcome to my portfolio!</p>
            
        <p className='m-5 montserrat text-xl text-left leading-8'>With a strong background in education, a recent web development certificate from the University of California, Irvine, and hands-on experience in special education, I am excited about the opportunity to support instructional staff, students, and parents in leveraging technology for improved learning outcomes.</p>
        <p className='m-5 montserrat text-xl text-left leading-8'>In my role as a Special Education Teacher, I facilitated collaborative meetings, adapted teaching methods to accommodate diverse learning needs, and maintained open lines of communication with stakeholders to monitor student progress. My experience in education has instilled a deep understanding of curriculum and instructional practices, which I believe is essential for effectively supporting teachers and students in utilizing instructional technology.</p>
        <p className='m-5 montserrat text-xl text-left leading-8'>As a full-stack web developer, I have successfully completed projects such as Arugula Week and GameChaser, where I contributed to frontend design, user authentication, and application functionality using technologies like React, Node.js, and various database systems. My technical skills, combined with my problem-solving abilities and experience in training and supporting others, position me well to assist in the implementation and maintenance of instructional technology resources.</p>

        <p className='m-5 montserrat text-xl text-left leading-8'>I am eager to contribute to the creation and maintenance of online collaboration tools and resources that can enhance learning experiences.</p>

        <p className='m-5 montserrat text-xl text-left leading-8'>I am excited about the possibility of joining your team and contributing to the success of your instructional programs. I look forward to the opportunity to discuss how my background and skills align with the needs of your next project!</p>
        </section>
    </div>
</section>
  )
}

export default About