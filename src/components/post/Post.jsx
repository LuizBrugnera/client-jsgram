import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";

import axios from 'axios';

import PostContext from "./PostContext";
import PostFlush from "./PostFlush";
import PostProfile from "./PostProfile";

const Post = ({ screen, userID}) => {

  const [listaPosts, setListaPosts] = useState([]);

  const recuperaPosts = async () => {
    try {
      const usersResponse = await axios.get('http://localhost:3005/users');
      const postsResponse = await axios.get('http://localhost:3005/posts');
      console.log(usersResponse.data)
      console.log(postsResponse.data)
      const posts = postsResponse.data.map(post => ({...post, usuario: usersResponse.data.find(user => user.codigo === post.usuario)}));
      console.log(posts)
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
        <PostProfile userID={userID}/>
      }
    </PostContext.Provider>
  );
};

export default Post;

