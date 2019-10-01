import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'My account',
    linkto: '/user/dashboard'
  },
  {
    name: 'User information',
    linkto: '/user/user_profile'
  },
  {
    name: 'My card',
    linkto: '/user/cart'
  }
]

const UserLayout = (props) => {

  const generateLinks = (links) => (
    links.map((item, i) => (
      <Link to={item.linkto} key={i}>
        {item.name}
      </Link>
    ))
  )

  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <h2>My account</h2>
          <div className="links">
            { generateLinks(links) }
          </div>
        </div>
        <div className="user_right">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default UserLayout;