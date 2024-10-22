// import React from 'react'

import BigSlider from "../Components/BigSlider"
import Header from "../Components/Header"
import Steps from "../Components/Steps"
import Testimonials from "../Components/Testimonials"
import Upload from "../Components/Upload"

const home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BigSlider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default home