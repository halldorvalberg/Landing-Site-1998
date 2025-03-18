'use client'
import React from 'react'
import resumeData from '../../../data/resume.json'
import styles from './styles.module.css'

function Resume() {

    const resume = resumeData.resume || {}
    console.log(resume)

    const workExperienceData = resume?.work_experience || []
    const workExperience = workExperienceData.length ? (
        workExperienceData.map((work) => (
            <div key={work.company} className={styles.Job}>
                <span>{work.company}</span>
                <span>{work.title}</span>
                <p>{work.duration.start} - {work.duration.end}</p>
                <ul>
                    {work.description.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        ))
    ) : (
        <p>No work experience available.</p>
    )

    const volunteerExperienceData = resume?.volunteer_experience || []
    const volunteerExperience = volunteerExperienceData.length ? (
        volunteerExperienceData.map((volunteer) => (
            <div key={volunteer.organization} className={styles.Job}>
                <span>{volunteer.organization}</span>
                <span>{volunteer.role}</span>
                <p>{volunteer.duration.start} - {volunteer.duration.end}</p>
                <ul>
                    {volunteer.description.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        ))
    ) : (
        <p>No volunteer experience available.</p>
    )

    const educationData = resume?.education || []
    const education = educationData.length ? (
        educationData.map((edu) => (
            <div key={edu.school} className={styles.EducationInfo}>
                <span className={styles.SchoolTitle}>{edu.school}</span>
                <span>{edu.degree}</span>
                <p>Finished: {edu.degreefinished}</p>
            </div>
        ))
    ) : (
        <p>No education information available.</p>
    )

    return (
        <div className={styles.ScrollContainer}>
            <div className={styles.Resume}>
                <h1>Work Experience</h1>
                <div className={styles.container}>
                    {workExperience}
                </div>
                <h1>Volunteer Experience</h1>
                <div className={styles.container}>
                    {volunteerExperience}
                </div>
                <h1>Education</h1>
                <div className={styles.container}>
                    {education}
                </div>
            </div>
        </div>
    )
}

export default Resume