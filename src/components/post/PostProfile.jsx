import React from "react";
import { useContext } from "react";
import PostContext from "./PostContext";

import "../css/main.css";
import ButtonEditPost from "./ButtonEditPost";
import ButtonRemovePost from "./ButtonRemovePost";

const PostProfile = ({ userId, url, recuperaPosts }) => {
  const { listaPosts } = useContext(PostContext);
  const UserPosts = listaPosts.filter((post) => post.usuario.codigo === userId);

  return (
    <section>
      {UserPosts.length === 0 && <h1>Carregando...</h1>}

      {UserPosts.length > 0 && (
        <ul className="profile_conteiner">
          {UserPosts.map((post) => (
            <li key={post.codigo} className="profile_post">
              <ButtonEditPost url={url} recuperaPosts={recuperaPosts} codigo={post.codigo} imagem={post.imagem} descricao={post.descricao} usuario={userId}/>
              <ButtonRemovePost url={url} recuperaPosts={recuperaPosts} codigo={post.codigo}/>
              <div className="conteiner_img">
                <img
                  className="img_post"
                  src={post.imagem}
                  alt="imagem da postagem"
                />
              </div>
              <p>
                <a className="user_name" href="profile">
                  {post.usuario.nome}
                </a>{" "}
                : {post.descricao}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostProfile;
