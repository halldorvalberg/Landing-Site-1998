'use client'

import React, { use, useEffect, useState } from 'react';
import styles from './styles.module.css';
import WorkComponent from './WorkComponent';
import EducationComponent from './EducationComponent';
// type Resume = {
//     Work: {
//         Company: String,
//         Jobs: {
//             Title: String,
//             Description: String,
//             StartTime: String,
//             EndTime: String
//         }[]
//     },
//     Education: {
//         School: String,
//         Degree: String,
//         DegreeFinished: String
//     }
// }

export default function Resume() {

    // We create a state that we will store the resume data in
    const [resume, setResume] = useState(null);

    // We create a useEffect that will be called when the component is mounted
    useEffect(() => {
        // We fetch the data from the api
        fetch('/api/resume')
            .then(response => response.json())
            .then(data => setResume(data.resume))
    }, []);

    // If the data is not loaded we return a loading message
    if (!resume) return <div>Loading...</div>

    // If the data is loaded we return the resume
    return (
        <div className={styles.Resume}>
            <h1>Resume</h1>

            <h2>Work</h2>
            {/* if there is a resume that is not undefined we want to create a WorkComponent for each element in resume.work */}
            {resume && resume.work && resume.work.map((job, index) => (
                <WorkComponent key={index} work={job} />
            ))}

            <h2>Education</h2>

            {/* if there is a resume that is not undefined we want to create a EducationComponent for each element in resume.education */}
            {resume && resume.education && resume.education.map((education, index) => (
                <EducationComponent key={index} education={education} />
            ))}

        </div>
    )
}
