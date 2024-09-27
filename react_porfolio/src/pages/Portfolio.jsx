import React from 'react'
import Project from '../components/Project'
const projects = [
    {
        title: 'Personal Blog',
        image: './assets/Blog.png',
        link: 'https://hweltzien.github.io/PersonalBlog/'
    },
    {
        title: 'Employee Database',
        image: './assets/employeeTracker.png',
        link: 'https://drive.google.com/file/d/1TaJZTt6nzi_f2OxQmTfFXMZOQReWNCb7/view'
    },
    {
        title: 'Task Board',
        image: './assets/task-board.png',
        link: 'https://hweltzien.github.io/TaskBoard/'
    },
    {
        title: 'Weather Dashboard',
        image: './assets/weather.png',
        link: 'https://hweltzien.github.io/weather-dashboard/'
    },
    {
        title: 'GameChaser',
        image: './assets/gamechaser.png',
        link: 'https://github.com/haartmuhn/GameChaser'
    },
    {
        title: 'Arugula Week',
        image: './assets/arugula-week.png',
        link: 'https://arugula-week.onrender.com/'
    }
]
const Portfolio = () => {
    return (
        <section id="work-section" className="content-section">
            <h2 className="aside-title">Portfolio</h2>
            <div className="content-area">

                <div className="w3-row-padding w3-margin-top container">
                    {projects.map((project) => (
                        <Project project={project} key={project.title} />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Portfolio