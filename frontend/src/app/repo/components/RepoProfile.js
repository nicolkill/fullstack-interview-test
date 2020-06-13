import React from 'react';

function RepoProfile({ profile }) {
  return (
    <div className="card grey darken-4">
      <div className="card-image">
        <img src={profile.avatar_url} alt={`${profile.login}_img`}/>
      </div>
      <div className="card-content white-text">
        <p>
          {profile.login}
        </p>
      </div>
      <div className="card-action">
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">Ver perfil</a>
      </div>
    </div>
  );
}

export default RepoProfile;
