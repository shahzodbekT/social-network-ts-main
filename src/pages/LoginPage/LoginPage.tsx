import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppInput } from "../../components/UI/AppInput";
import { AppButton } from "../../components/UI/AppButton";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingText="Авторизация" headingType="h1"/>
      <form action="#">
        <AppInput inputType="text" inputPlaceholder="Номер телефона" />
        <AppInput inputType="password" inputPlaceholder="Пароль" />
        <AppButton buttonText="Войти"/>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo span="У вас нет аккаунта?" link="Зарегистрироваться"/>
    </div>
  );
};
