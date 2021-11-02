import React, { Component, useEffect, useState } from 'react'

import Lottie from 'react-lottie'
import * as location from './assets/loading/9329-loading.json'
import * as success from './assets/loading/11881-completed.json'

import ScrollableTabsButtonForce from './components/Navigation/Navigation'
import AboutMe from './components/AboutMe/AboutMe'
import ProjectCardList from './components/ProjectCardList/ProjectCardList'
import Experience from './components/Experience/Experience'
import Skill from './components/Skill/Skill'
import ContactForm from './components/Contact/Contact'
import Section from './components/Section/Section.component'

import './App.scss'

/*
class App extends Component {
  render() {
    return (
      <div className="App">

        <React.Fragment>
          <PreLoader />
          <ScrollableTabsButtonForce />
          <Section>
            <AboutMe />
          </Section>
          <Section bg>
            <ProjectCardList />
          </Section>
          <Section>
            <Experience />
          </Section>
          <Section bg>
            <Skill />
          </Section>
          <Section>
            <ContactForm />
          </Section>
        </React.Fragment>
      </div>
    )
  }
}
*/
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(undefined)
  const [completed, setCompleted] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => {
          setData(json)
          setLoading(true)

          setTimeout(() => {
            setCompleted(true)
          }, 1000)
        })
    }, 2000)
  }, [])

  return (
    <div className="App">
      {!completed ? (
        <div className="loading">
          {!loading ? (
            <Lottie options={defaultOptions1} height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions2} height={200} width={200} />
          )}
        </div>
      ) : (
        <React.Fragment>
          <ScrollableTabsButtonForce />
          <AboutMe />
          <Section bg>
            <ProjectCardList />
          </Section>
          <Section>
            <Experience />
          </Section>
          <Section bg>
            <Skill />
          </Section>
          <Section>
            <ContactForm />
          </Section>
          <Section bg>
            <h4 className="credentials">
              <a href="https://lottiefiles.com/NoobSaiyan">
              💜 Loading Animation by Manmeet Singh on LottieFiles
              </a>
              <br />
              <a href="https://lottiefiles.com/directdesign22">
              💜 Loaded Animation by Bashir Ahmed on LottieFiles
              </a>
              <br />
              <a href="https://lottiefiles.com/user/1808">
              💜 Scroll Animation by Arnaud Guidi on LottieFiles
              </a>
            </h4>
          </Section>
        </React.Fragment>
      )}
    </div>
  )
}
export default App
