import React from "react";
import { useStyles } from "./ExperienceCard.styles";

export default function ExperienceCard({ title, company, date, desc, img }) {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <div className={classes.overlayContent}>
        <h4>{title}</h4>
        <span>{company}</span>
        <br/>
        <span>{date}</span>

        <p><b>Job Description</b></p>
        {desc.map((point, index) => (
          <p key={point[0] + index}><li>{point}</li></p>
        ))}
      </div>
      <div>
        <img className={classes.expImg} src={img} alt={title} />
      </div>
    </div>
  );
}
