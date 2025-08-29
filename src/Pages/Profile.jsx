import React from 'react';
import Menu from './../component/Menu';
import { useParams } from 'react-router-dom';

const Profile = () => {
  let {facebookID, YouTubeID} = useParams();
  return (
    <div>
      <Menu />
      <p>Facebook ID: {facebookID}</p>
      <p>YouTube ID: {YouTubeID}</p>
      <h1>This is Profile Page</h1>
    </div>
  );
};

export default Profile;