import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import project_list from '../../utils/project-list'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Element } from 'react-scroll'

const useStyles = makeStyles({
  'spacing-xs-4': {
    width: 'inherit',
    margin: 0,
  },
})

export default function ProjectCardList() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography
        id="projects"
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: '1rem',
          paddingRight: '1rem',
          fontSize: '2rem',
          textTransform: 'uppercase',
          fontFamily: '"Raleway", sans-serif',
        }}
      >
        <Element name="projects">
          <img
            style={{ width: '30px' }}
            src="https://cdn.pixabay.com/photo/2013/07/12/18/54/star-153971_960_720.png"
            alt=""
          />
          Projects
        </Element>
      </Typography>
      <Grid
        container
        spacing={4}
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        classes={{
          'spacing-xs-4': classes['spacing-xs-4'], // overriding defaults as it was causing horizontal scroll
        }}
      >
        {project_list.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </Grid>
    </React.Fragment>
  )
}
