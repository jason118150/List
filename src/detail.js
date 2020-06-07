import React, { useState, useEffect } from 'react';
import './css/detail.css';
import { DetailAvatar } from './styled-components';
const Link = require('react-router').Link;

const Detail = (data) => {
    const login = data.location.pathname;
    console.log(login);
    const [detail, setdetail] = useState();
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.github.com/users${login}`)
            .then(response => response.json())
            .then(response => {
                setdetail(response);
                setisLoading(false);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className="detail_wrapper">
            <div className="detail_title">
                Detail
            </div>
            <div className="detail_form">
                { isLoading === true ?
                    <p>is Loading...</p> :
                    <div className="detail_container">
                        <div className="detail_avatar">
                            <DetailAvatar img={detail.avatar_url}/>
                        </div>
                        <div className="detail_detail">
                            <span><b>Name</b>: {detail.name ? detail.name : 'null'}</span>
                            <span><b>Login</b>: {detail.login ? detail.login : 'null'}</span>
                            <span><b>Location</b>: {detail.location ? detail.location : 'null'}</span>
                            <span><b>Site Admin</b>: {detail.site_admin ? detail.site_admin : 'null'}</span>
                            <span><b>Bio</b>: {detail.bio? detail.bio : 'null'}</span>
                            <span><b>Blog</b>: {detail.blog? detail.blog : 'null'}</span>
                        </div>
                    </div>
                }
            </div>
            <div className="detail_footer">
                <span>Copyright (c) 李彥杰 </span>
            </div>
        </div>
    );
}

export default Detail;