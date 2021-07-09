import React from 'react'
import { useStyles } from './ExperienceCard.styles'

export default function ExperienceCard({ title, company, date, desc, img }) {
  const classes = useStyles()

  return (
    <div className={classes.cardContainer}>
      <div className={classes.overlayContent}>
        <h4>{title}</h4>
        <div className={classes.companyDate}>
          <span>{company}</span>
          <span>{date}</span>
        </div>

        <h5>Job Description</h5>
        {desc.map((point, index) => (
          <p key={point[0] + index}>
            <li>{point}</li>
          </p>
        ))}
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.expImg} src={img} alt={title} />
      </div>
    </div>
  )
}
