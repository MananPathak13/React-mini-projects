import React from 'react'

import "./styles.css"

const User = ({ user }) => {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login, created_at
    } = user

    const createdDate = new Date(created_at);
    return (
        <div className='user'>
            <div>
                <img src={avatar_url} className='avatar' />
            </div>
            <div className='name-container'>
                <a href={`github.com/${login}`}>{name || login}</a>
                <p>user Joined on {" "}</p>
                {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
                    month: "short"
                })} ${createdDate.getFullYear()}`}
            </div>


            <div className='profile-info'>
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>following</p>
                    <p>{following}</p>
                </div>
            </div>

        </div>
    )
}

export default User;
