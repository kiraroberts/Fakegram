import React from 'react'
import Header from './Header'

var userInfo = [
  {
    profilePicture: 'linkText',
    userName: 'xXxTheRealGarfieldxXx',
    posts: 500,
    followers: 420,
    following: 69,
    about: 'Big ole cat.'
  }
];

function Info(){
  return (
    <div>
      <hr/>
      {userInfo.map((header, index) =>
        <Header profilePictures={header.profilePictures}
          userNames={header.UserNames}
          posts={header.posts}
          followers={header.followers}
          following={header.following}
          abouts={header.abouts}
          key={index}/>
      )}
    </div>
  );
}

export default UserInfo