import React from "react";

const Content: React.FC = () => {
  return (
    <div className="form-wrap">
      <form
        className="personal-account__content"
        action="URL"
        autoComplete="on">
        <div className="tab1__title">Регистрация пользователя</div>

        <div className="personal-account__input-wrap _personal-data">
          <label className="personal-account__label" htmlFor="full-name">
            ФИО:
            <input
              className="personal-account__input"
              id="full-name"
              type="text"
              placeholder="Иванов Иван Иванович"
            />
          </label>
          <div className="personal-account__edit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3559 3.59936C18.3892 2.75599 16.8782 2.8091 15.9811 3.71798L15.206 4.50326L19.5874 8.32531L20.3625 7.54003C21.2596 6.63115 21.2031 5.21067 20.2363 4.3673L19.3559 3.59936Z"
                fill="#A9B0D0"
              />
              <path
                d="M14.6061 5.11098L18.9875 8.93303L8.19 19.8723L8.78967 19.2646L4.40838 15.4427L14.6061 5.11098Z"
                fill="#A9B0D0"
              />
              <path
                d="M8.19 19.8723L3 21L3.80859 16.0505L8.19 19.8723Z"
                fill="#A9B0D0"
              />
            </svg>
          </div>
        </div>

        <div className="personal-account__input-wrap _personal-data">
          <label className="personal-account__label" htmlFor="email">
            Email:
            <input
              className="personal-account__input"
              id="email"
              type="email"
              placeholder="your@email.ru"
            />
          </label>
          <div className="personal-account__edit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3559 3.59936C18.3892 2.75599 16.8782 2.8091 15.9811 3.71798L15.206 4.50326L19.5874 8.32531L20.3625 7.54003C21.2596 6.63115 21.2031 5.21067 20.2363 4.3673L19.3559 3.59936Z"
                fill="#A9B0D0"
              />
              <path
                d="M14.6061 5.11098L18.9875 8.93303L8.19 19.8723L8.78967 19.2646L4.40838 15.4427L14.6061 5.11098Z"
                fill="#A9B0D0"
              />
              <path
                d="M8.19 19.8723L3 21L3.80859 16.0505L8.19 19.8723Z"
                fill="#A9B0D0"
              />
            </svg>
          </div>
        </div>

        <div className="personal-account__input-wrap _personal-data">
          <label className="personal-account__label" htmlFor="number">
            Телефон:
            <input
              className="personal-account__input"
              id="number"
              type="text"
              placeholder="+7 (123) 456-78-90"
            />
          </label>
          <div className="personal-account__edit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.3559 3.59936C18.3892 2.75599 16.8782 2.8091 15.9811 3.71798L15.206 4.50326L19.5874 8.32531L20.3625 7.54003C21.2596 6.63115 21.2031 5.21067 20.2363 4.3673L19.3559 3.59936Z"
                fill="#A9B0D0"
              />
              <path
                d="M14.6061 5.11098L18.9875 8.93303L8.19 19.8723L8.78967 19.2646L4.40838 15.4427L14.6061 5.11098Z"
                fill="#A9B0D0"
              />
              <path
                d="M8.19 19.8723L3 21L3.80859 16.0505L8.19 19.8723Z"
                fill="#A9B0D0"
              />
            </svg>
          </div>
        </div>

        <div className="tab1__title">Создание пароля</div>
        <p className="mismatch">Пароли не совпадают</p>
        <p className="password-saved">Ваш пароль был изменен</p>

        <div className="personal-account__input-wrap input-password">
          <label className="personal-account__label" htmlFor="current">
            Введите пароль:
            <input
              className="personal-account__input lk-input"
              id="current"
              type="password"
              placeholder="**********"
            />
          </label>
          <p className="lk-password__icon"></p>
        </div>

        <div className="personal-account__input-wrap input-password">
          <label className="personal-account__label" htmlFor="new">
            Повторите пароль:
            <input
              className="personal-account__input lk-input"
              id="new"
              type="password"
              placeholder="**********"
            />
          </label>
          <p className="lk-password__icon"></p>
        </div>

        <div className="lk-btn">
          <button type="reset" className="lk-btn__link white__btn">
            Отмена
          </button>
          <button type="submit" name="save" className="lk-btn__link red__btn">
            Сохранить изменения
          </button>
        </div>
      </form>
    </div>
  );
};
export default Content;
