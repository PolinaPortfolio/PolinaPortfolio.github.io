import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jodie" desc="I'm Polina Krikun, videographer" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Polina Krikun!</h1>
        <p>Who am I?</p>
		<ul>
			<li>Photographer</li>
			<li>Videographer</li>
			<li>Director</li>
		</ul>
      </AnimatedBox>
    </Layout>
  )
}

export default About
