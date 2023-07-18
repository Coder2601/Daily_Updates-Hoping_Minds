import React from 'react'
import Layout from './Layout'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <Layout>
      <h2>Courses</h2>
      <ul>
        <li><NavLink to={'fed'}>FED Course</NavLink></li>
        <li><NavLink to={'bed'}>BED Course</NavLink> </li>
      </ul>
      <Outlet/>
      <br />
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse corporis sit maiores molestias et vel alias iste explicabo tempore aut illum numquam eligendi ullam totam hic atque, cumque labore sint. Sed perferendis minus cupiditate necessitatibus, eaque excepturi ab iusto veritatis, cumque dolores minima recusandae id reiciendis ex totam odio?</p>

      <hr />
      <h4>Lorem ipsum dolor sit amet.</h4>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda maxime deserunt adipisci vitae unde ad magnam distinctio aperiam ut sint, dolores voluptate iste suscipit?</p>
      
    </Layout>
  )
}

export default Courses
