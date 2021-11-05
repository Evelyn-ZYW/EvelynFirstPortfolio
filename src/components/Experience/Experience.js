import React from 'react'
import { Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { exp } from '../../utils/experience-list'
import { useStyles } from './Experience.styles'
import ExperienceCard from '../ExperienceCard/ExperienceCard.component.jsx'
import { Element } from 'react-scroll'
import Star from '../../utils/star1.png'
function Experience() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography
        className={classes.title}
        variant="h2"
        display="block"
        align="center"
      >
        <Element name="experience">
          <img
            style={{ width: '40px' }}
            src={Star}
            alt=""
          />
          Experience
        </Element>
      </Typography>

      <div className={classes.expContainer}>
        {exp.map((e) => {
          return (
            <ExperienceCard
              title={e.title}
              company={e.company}
              desc={e.desc}
              date={e.date}
              img={e.img}
              key={e.title + 'key'}
            />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Experience
