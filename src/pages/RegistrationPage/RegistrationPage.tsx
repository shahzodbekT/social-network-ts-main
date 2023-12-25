import React from "react";
import "../LoginPage/LoginPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading";
import { AppInput } from "../../components/UI/AppInput";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton";

export const RegistrationPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingText="Регистрация" headingType="h1"/>
      <form action="#">
        <AppInput inputType="text" inputPlaceholder="Ваше имя"/>
        <AppInput inputType="email" inputPlaceholder="Ваше эл. почта"/>
        <AppInput inputType="password" inputPlaceholder="Ваш пароль"/>
        <AppInput inputType="text" inputPlaceholder="Ваш город"/>
        <AppButton buttonText="Зарегистрироваться"/>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo span="Уже есть аккаунт?" link="Войти"/>
    </div>
  );
};
