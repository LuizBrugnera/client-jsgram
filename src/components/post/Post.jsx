import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";

import axios from 'axios';

import PostContext from "./PostContext";
import PostFlush from "./PostFlush";
import PostProfile from "./PostProfile";

const Post = ({ screen, userId}) => {

  const [listaPosts, setListaPosts] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  const recuperaPosts = async () => {
    try {
      console.log(url)
      const usersResponse = await axios.get(`${url}/users`);
      const postsResponse = await axios.get(`${url}/posts`);

      const users = usersResponse.data.map(user => {
        if(!user.fotoperfil) {
          user.fotoperfil = '/user.png';
          return user;
        }
        return user
      })

      const posts = postsResponse.data.map(post => ({...post, usuario: users.find(user => user.codigo === post.usuario)}));

      setListaPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    recuperaPosts();
  }, []);
  return (
    <PostContext.Provider
      value={{
        setListaPosts,
        recuperaPosts,
        listaPosts,
      }}
    >
      { screen === "feed" &&
        <PostFlush/>
      }
      { screen === "postProfile" &&
        <PostProfile userId={userId}/>
      }
    </PostContext.Provider>
  );
};

export default Post;

