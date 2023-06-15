import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officia incidunt assumenda repellat, facere unde nulla iure, delectus aliquam eaque veniam autem. Neque similique nesciunt quas libero odio ipsum distinctio!.",
      img: "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officia incidunt assumenda repellat, facere unde nulla iure, delectus aliquam eaque veniam autem. Neque similique nesciunt quas libero odio ipsum distinctio!",
      img: "https://images.pexels.com/photos/15352591/pexels-photo-15352591/free-photo-of-young-woman-sitting-on-a-mountain-peak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officia incidunt assumenda repellat, facere unde nulla iure, delectus aliquam eaque veniam autem. Neque similique nesciunt quas libero odio ipsum distinctio!",
      img: "https://images.pexels.com/photos/16993667/pexels-photo-16993667/free-photo-of-sea-black-and-white-landscape-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, odit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officia incidunt assumenda repellat, facere unde nulla iure, delectus aliquam eaque veniam autem. Neque similique nesciunt quas libero odio ipsum distinctio!.",
      img: "https://images.pexels.com/photos/15986549/pexels-photo-15986549/free-photo-of-6am-last-day-walk.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    },
  ]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home