import React from 'react'
import PropTypes from 'prop-types'
import profilePic from '../img/profile.jpg';

function Header(props){
  var imageStyle = {
    borderRadius: '50%',
    width: '150px',
  }
  var headerStyle = {
    fontSize: '20px',
    display: 'inline-block'
  }

  return (
      <div style={headerStyle} className="Header">
        <div className="profileImage">
          <img style={imageStyle} src={profilePic} alt="Profile picture"/>
        </div>
          <div className="profileInfo">
            <h2>Garfield</h2><button>Follow</button>
            <h5><span>{props.posts} posts</span><span>{props.followers} followers</span><span>{props.following} following</span></h5>
          </div>
          <h5>{props.about}</h5>
          <hr/>
      </div>
  );
}

Header.propTypes = {
  profilePicture: PropTypes.string,
  userName: PropTypes.string,
  posts: PropTypes.int,
  followers: PropTypes.int,
  following: PropTypes.int,
  about: PropTypes.string
}


export default Header