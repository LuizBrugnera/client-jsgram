import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";
import ButtonSignup from "./ButtonSignup";
import ButtonChange from "./ButtonChange";
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
  const url = process.env.REACT_APP_API_URL;

  const recuperaUserCodigo = async (codigo) => {
    await fetch(`http://localhost:3005/users/${codigo}`)
      .then((response) => response.json())
      .then((json) => setUserPsq(json))
      .catch((err) => console.log(err));
  };

  const recuperaUsers = async () => {
    await fetch(`${url}/users`)
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
        navigate("/profile");
      } else {

        console.log("user not found");
      }
    } else {

      console.log("erro");
    }
  };

  const handlerSubmitSignup = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;
    const fotoPerfil = document.querySelector('#fotoPerfil').value;

    if (username && password) {
      const newUser = {
        nome: username,
        senha: password,
        fotoperfil: fotoPerfil,
      };

      await fetch(`${url}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          console.log("cadastrado");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("erro");
    }
  };

  const handlerChangeImgP = async (e) => {
    e.preventDefault();

    const fotoPerfil = document.querySelector('#fotoPerfil').value;

    if (fotoPerfil) {
      const newUser = {
        codigo : user.codigo,
        nome: user.nome,
        senha: user.senha,
        fotoperfil: fotoPerfil,
      };

      await fetch(`${url}/users/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("alterado");
          navigate("/login");
        })
        .catch((err) => console.log(err));
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
      {
        screen === "buttonS" &&
        <ButtonSignup handlerSubmitSignup={handlerSubmitSignup}/>
      }
      {
        screen === "buttonChange" &&
        <ButtonChange handlerChangeImgP={handlerChangeImgP}/>
      }
      
    </>
  );
};

export default User;
