import React from 'react';

import styles from './styles.module.css'

function WorkComponent({ work }) {

    console.log(work)
    return (
        <div className={styles.Work}>
            <h2 className={styles.CompanyTitle}>{work.company}</h2>
            {work.jobs.map((job, index) => (
                <div key={index} className={styles.Job}>
                    <span> {job.title} </span> 
                    <span> {job.starttime} - {job.endtime}</span>
                    <p className={styles.JobDescription}>{job.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WorkComponent;
