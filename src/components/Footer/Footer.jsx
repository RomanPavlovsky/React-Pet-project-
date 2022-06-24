import React from "react";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.linksinfo}>
        <div className={style.clieninfo}>
          <ul>
            <h3>Покупателям</h3>
            <li>Как сделать заказ</li>
            <li>Способ оплаты</li>
            <li>Доставка</li>
            <li>Возврат товара</li>
            <li>Возврат денежных средств</li>
            <li>Правила магазина</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        <div className={style.partnerinfo}>
          <ul>
            <h3>Партнерам</h3>
            <li>Сотрудничество</li>
            <li>Франшиза</li>
            <li>Пункты выдачи</li>
            <li>Поставщикам</li>
          </ul>
        </div>
        <div className={style.company}>
          <ul>
            <h3>Компания</h3>
            <li>О нас</li>
            <li>Реквизиты</li>
            <li>Пресс-Центр</li>
            <li>Контакты</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div className={style.social}>
          <ul>
            <h3>Мы в соц сетях</h3>
            <li>Facebook</li>
            <li>Instagramm</li>
            <li>YouTube</li>
            <li>TikTok</li>
          </ul>
        </div>
        <div className={style.mobilelinks}>
          <ul>
            <h3>Мобильное приложение</h3>
            <li>Google play</li>
            <li>App store</li>
            <li>App Gallery</li>
          </ul>
        </div>
      </div>
      <div className={style.bottominfo}>
        <p>
          Все права не защищены © Just a pet-project with React , Redux, SCSS
          and other libraries
        </p>
      </div>
    </div>
  );
};

export default Footer;
