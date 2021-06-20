import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
          <Section 
              title="Model S"
              description="Order online for touchless delivery."
              backgroundImage="model-s.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
          />
          <Section 
              title="Model Y"
              description="Changing the future."
              backgroundImage="model-y.jpg"
              leftBtnText="Check Pricing"
              rightBtnText="Read More"
          />
          <Section 
              title="Model 3"
              description="The Family Car."
              backgroundImage="model-3.jpg"
              leftBtnText="Learn More"
              rightBtnText="Buy Now"
          />
        <Section 
              title="Model X"
              description="Unleash the Beast."
              backgroundImage="model-x.jpg"
              leftBtnText="Turbocharge Technology"
              rightBtnText="Check Pricing"
          />
          <Section 
              title="Lowest Cost Solar Panels in America"
              description="Moneyback guarantee"
              backgroundImage="solar-panel.jpg"
              leftBtnText="Order Now"
              rightBtnText="Learn More"
          /> 

          <Section 
              title="Solar for new roofs"
              description="Solar Roofs are cheaper than new roofs plus solar panels."
              backgroundImage="solar-roof.jpg"
              leftBtnText="Order Now"
              rightBtnText="Learn More"
          />

        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`