import React from "react";

import axios from "axios";

const ButtonRemovePost = ({codigo, url, recuperaPosts}) => {
  const handlerRemovePost = async (e) => {
    e.preventDefault();
    console.log(codigo)
    await axios.delete(`${url}/posts/${codigo}`);
    await recuperaPosts();
  };

  return (
    <div className="click-div" onClick={handlerRemovePost}>
      X
    </div>
  );
};

export default ButtonRemovePost;
