import React from 'react'
import PropTypes from 'prop-types'

function ProfilePic(props){
  return (
    <div>
      <style global jsx>{`
      div {
        border-radius: 50%;
        }
      `}</style>
      <div className="row">
        <div className="col-md-6">
          <img src="{props.profilePicture}" alt="Profile picture"/>
        </div>
      </div>
      <hr/>
    </div>
  )
}

ProfilePic.propTypes = {
  names: PropTypes.profilePicture.isRequired
}

export default ProfilePic