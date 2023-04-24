import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../AuthContext";

import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";
const User = ({ screen, setIsAuthenticated }) => {
  const [listaUsers, setListaUsers] = useState([]);
  const [user, setUser] = useState({
    codigo: "",
    nome: "",
    senha: "",
    fotoPerfil: "",
  });
  const [myUser, setmyUser] = useState({
    codigo: "",
    nome: "",
    senha: "",
    fotoPerfil: "",
  });


  const recuperaUserCodigo = async (codigo) => {
    await fetch(`http://localhost:3005/users/${codigo}`)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((err) => console.log(err));
  };

  const recuperaUsers = async () => {
    await fetch("http://localhost:3005/users")
      .then((response) => response.json())
      .then((json) => setListaUsers(json))
      .catch((err) => console.log(err));
  };

  const handlerLogin = async (e) => {
    e.preventDefault()

    const username = document.querySelector('#userName').value;
    const password =  document.querySelector('#password').value;

    if (username && password) {
      /// fazer a busca do user na lista de users
      await recuperaUsers(); 

      const userFound = listaUsers.find(
        (user) => user.nome === username && user.senha === password
      );
      
      if (userFound) {
        recuperaUserCodigo(userFound.codigo);
        setmyUser(userFound);
        setIsAuthenticated(true);
        console.log("autenticado")
      } else {
        ///setIsAuthenticated(false);
        console.log("user not found");
      }
    } else {
      ///setIsAuthenticated(false);
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
    <UserLogin handlerLogin={handlerLogin}/>
  }
  {
    screen === "profile" &&
    <UserProfile myUser={myUser}/>
  }
    </>
  );
};

export default User;
