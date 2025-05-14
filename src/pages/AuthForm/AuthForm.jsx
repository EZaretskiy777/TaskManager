import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../services/api/user";
import { useAuth } from "../../providers/AuthProvider";
import * as S from "./styledComponents";
import { useState } from "react";

const AuthForm = ({ isSignUp = false }) => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
  const [errorText, setErrorText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = isSignUp
        ? await signUp(data)
        : await signIn({ email: data.email, password: data.password });

      if (response) {
        localStorage.setItem("userInfo", JSON.stringify(response));
        setIsAuth(true);
        navigate("/");
      }
    } catch (err) {
      setErrorText(
        err.message ||
          (isSignUp
            ? "Ошибка при регистрации. Попробуйте позже."
            : "Ошибка при входе. Проверьте логин и пароль.")
      );
    }
  };

  const handlerNavigate = () => {
    reset();
    setErrorText("");
    navigate(isSignUp ? "/login" : "/register");
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <S.ModalTtlH2>{isSignUp ? "Регистрация" : "Вход"}</S.ModalTtlH2>
            </S.ModalTtl>
            <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
              {isSignUp && (
                <>
                  <S.ModalInput
                    $notLastChild={true}
                    type="text"
                    placeholder="Имя"
                    {...register("name", {
                      required: "Введите имя",
                    })}
                    $error={!!errors.name}
                  />
                  {errors.name && <S.ErrorP>{errors.name.message}</S.ErrorP>}
                </>
              )}

              <>
                <S.ModalInput
                  $notLastChild={true}
                  type="email"
                  placeholder="Эл. почта"
                  {...register("email", {
                    required: "Введите email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Неверный формат email",
                    },
                  })}
                  $error={!!errors.email}
                />
                {errors.email && <S.ErrorP>{errors.email.message}</S.ErrorP>}
              </>

              <>
                <S.ModalInput
                  type="password"
                  placeholder="Пароль"
                  {...register("password", {
                    required: "Введите пароль",
                    minLength: {
                      value: 6,
                      message: "Пароль должен быть не менее 6 символов",
                    },
                  })}
                  $error={!!errors.password}
                />
                {errors.password && (
                  <S.ErrorP>{errors.password.message}</S.ErrorP>
                )}
              </>

              {errorText && <S.ErrorP>{errorText}</S.ErrorP>}

              <S.ModalBtnEnter
                type="submit"
                $disabled={Object.keys(errors).length > 0}
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </S.ModalBtnEnter>

              <S.ModalFormGroup>
                <S.ModalFormGroupP>
                  {isSignUp ? "Уже есть аккаунт?" : "Нужно зарегистрироваться?"}
                </S.ModalFormGroupP>
                <S.ModalFormGroupLink onClick={handlerNavigate}>
                  {isSignUp ? "Войдите здесь" : "Регистрируйтесь здесь"}
                </S.ModalFormGroupLink>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};

AuthForm.propTypes = {
  isSignUp: PropTypes.bool.isRequired,
};

export default AuthForm;
