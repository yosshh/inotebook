import React from 'react'
// import { useContext } from 'react'
// import { useEffect } from 'react'
// import noteContext from '../context/notes/noteContext'

const About = () => {
  // const a = useContext(noteContext)
//   useEffect(() => {
//     a.update()
//  // eslint-disable-next-line 
//   }, [])
  
  return (
    <div style={{fontSize: "20px"}}>
      <h1 style={{fontSize: "70px"}}>ABOUT</h1>
      iNotebook is Full Stack Mern Project, where one can get a look of front-end and back-end components. This application stores information of clients in mongodb(It is a database program which lets use users save their information). First thing is making an account for that purpose I have used Express.js(It is a backend framework).
    </div>
  )
}

export default About
