import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";
const User = ({ screen }) => {
  const [listaUsers, setListaUsers] = useState([]);
  const [userPsq, setUserPsq] = useState({
    codigo: "",
    nome: "",
    senha: "",
    fotoPerfil: "",
  });

  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const recuperaUserCodigo = async (codigo) => {
    await fetch(`http://localhost:3005/users/${codigo}`)
      .then((response) => response.json())
      .then((json) => setUserPsq(json))
      .catch((err) => console.log(err));
  };

  const recuperaUsers = async () => {
    await fetch("http://localhost:3005/users")
      .then((response) => response.json())
      .then((json) => {
        const users = json.map(user => {
          if(!user.fotoperfil) {
            user.fotoperfil = '/user.png';
            return user;
          }
          return user
        })
        setListaUsers(users)})
      .catch((err) => console.log(err));
  };

  const handlerLogin = async (e) => {
    e.preventDefault()

    const username = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;

    if (username && password) {
      
      await recuperaUsers();

      const userFound = listaUsers.find(
        (user) => user.nome === username && user.senha === password
      );

      if (userFound) {
        await recuperaUserCodigo(userFound.codigo);
        const token = "fake_token";
        login(token, userFound);
        console.log("logado");
        console.log(userFound);
        navigate("/profile");
      } else {

        console.log("user not found");
      }
    } else {

      console.log("erro");
    }
  };

  useEffect(() => {
    recuperaUsers();
  }, []);

  return (
    <>
      {
        screen === "login" &&
        <UserLogin handlerLogin={handlerLogin} />
      }
      {
        screen === "profile" &&
        <UserProfile myUser={user} />
      }
    </>
  );
};

export default User;
