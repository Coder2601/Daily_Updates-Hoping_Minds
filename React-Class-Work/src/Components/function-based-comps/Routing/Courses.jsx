import React from 'react'
import Layout from './Layout'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <Layout>
        <h1>Courses</h1>
        <hr />
        <ul className='navBar'>
            <li>Available Courses : </li>
            <Link to={'frontend'}><li>Frontend Course</li></Link>
            <Link to={'backend'}><li>Backend Course</li></Link>
        </ul>

        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, eaque.</h2>
        <hr /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ducimus fugit officiis ut recusandae cumque ad rerum nemo, adipisci inventore vitae, molestias possimus. Ab possimus nihil incidunt impedit iste soluta earum sequi consectetur modi nostrum? Repudiandae voluptate obcaecati vero veritatis, ullam perferendis maxime incidunt! Eveniet impedit quisquam ipsum ullam officiis?</p>
        <br /><br />
        <h2>Lorem ipsum dolor sit amet.</h2>
        <hr /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas possimus beatae, illo laborum ut quasi pariatur aliquam corrupti magni eaque nobis vero omnis laboriosam rerum earum inventore modi, quam mollitia maxime. Accusantium blanditiis sint voluptate? Id rerum minima exercitationem ipsum sed eveniet tenetur culpa explicabo iure magni! Similique, quo eius.</p>
        <br /><br />
        <Outlet/>
    </Layout>
  )
}

export default Courses