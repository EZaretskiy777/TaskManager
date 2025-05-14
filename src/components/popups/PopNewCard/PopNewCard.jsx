import { useState } from "react";
import * as S from "./styledComponents";
import moment from "moment";
import { themeList } from "../../../enums";
import { color } from "../../../services/utils/color";
import { addTask, getTasks } from "../../../services/api/tasks";
import { useNavigate } from "react-router-dom";
import { useTask } from "../../../providers/TaskProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ru } from "date-fns/locale";

const PopNewCard = () => {
  const navigate = useNavigate();
  const { setTasks, filter } = useTask();

  const [task, setTask] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
    status: "Без статуса",
  });

  const setDataHandler = (attribute, value) => {
    setTask((prevTask) => ({
      ...prevTask,
      [attribute]: value,
    }));
  };

  const createNewTask = () => {
    try {
      if (!validateFields()) {
        return;
      }
      addTask({
        token: JSON.parse(localStorage.getItem("userInfo")).token,
        task,
      })
        .then(() => {
          return getTasks({
            token: JSON.parse(localStorage.getItem("userInfo")).token,
            userId:
              filter === "myTasks"
                ? JSON.parse(localStorage.getItem("userInfo")).user._id
                : "",
          });
        })
        .then((data) => {
          setTasks(data);
          navigate("/");
        });
    } catch (error) {
      toast.error("Ошибка при создании задачи " + error, {
        position: "top-right",
        toastId: "addTask",
      });
    }
  };

  const validateFields = () => {
    for (const objTask of Object.entries(task)) {
      if (String(objTask[1] ?? "").trim().length === 0) {
        toast.error("Необходимо заполнить все поля.", {
          position: "top-right",
        });
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <ToastContainer />
      <S.PopNewCard>
        <S.PopNewCardContainer>
          <S.PopNewCardBlock>
            <S.PopNewCardContent>
              <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
              <S.PopNewCardClose to="/">&#10006;</S.PopNewCardClose>
              <S.PopNewCardWrap>
                <S.PopNewCardForm>
                  <S.PopNewCardFormBlock>
                    <S.PopNewCardSubtitle htmlFor="formTitle">
                      Название задачи
                    </S.PopNewCardSubtitle>
                    <S.PopNewCardInput
                      type="text"
                      name="name"
                      id="formTitle"
                      placeholder="Введите название задачи..."
                      autoFocus
                      onChange={(text) => {
                        setDataHandler("title", text.target.value);
                      }}
                    />
                  </S.PopNewCardFormBlock>
                  <S.PopNewCardFormBlock>
                    <S.PopNewCardSubtitle htmlFor="textArea">
                      Описание задачи
                    </S.PopNewCardSubtitle>
                    <S.PopNewTextArea
                      name="text"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                      onChange={(text) =>
                        setDataHandler("description", text.target.value)
                      }
                    ></S.PopNewTextArea>
                  </S.PopNewCardFormBlock>
                </S.PopNewCardForm>
                <S.PopNewCardCalendar>
                  <S.CalendarTitle>Даты</S.CalendarTitle>
                  <S.Calendar
                    mode="single"
                    selected={task.date}
                    onSelect={(date) => setDataHandler("date", date)}
                    locale={ru}
                    footer={
                      task.date
                        ? `Срок исполнения: ${moment(task.date).format(
                            "DD.MM.YYYY"
                          )}`
                        : "Выберите дату"
                    }
                  />
                </S.PopNewCardCalendar>
              </S.PopNewCardWrap>
              <S.PopNewCardCategories>
                <S.PopNewCardCategoriesText>
                  Категория
                </S.PopNewCardCategoriesText>
                <S.PopNewCardCategoriesThemes>
                  {Object.entries(themeList).map((theme) => {
                    return (
                      <S.PopNewCardCategoriesTheme
                        $color={color(theme[1])}
                        $active={task.topic === theme[1]}
                        key={theme[1]}
                        onClick={() => {
                          setDataHandler("topic", theme[1]);
                        }}
                      >
                        <S.PopNewCardCategoriesThemeText
                          $color={color(theme[1])}
                        >
                          {theme[1]}
                        </S.PopNewCardCategoriesThemeText>
                      </S.PopNewCardCategoriesTheme>
                    );
                  })}
                </S.PopNewCardCategoriesThemes>
              </S.PopNewCardCategories>
              <S.PopNewCardCreateBtn id="btnCreate" onClick={createNewTask}>
                Создать задачу
              </S.PopNewCardCreateBtn>
            </S.PopNewCardContent>
          </S.PopNewCardBlock>
        </S.PopNewCardContainer>
      </S.PopNewCard>
    </>
  );
};

export default PopNewCard;
