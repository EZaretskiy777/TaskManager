import { useEffect, useState, useRef } from "react";
import moment from "moment";
import * as S from "./styledComponents";
import { useParams } from "react-router-dom";
import {
  getTasks,
  getTask,
  deleteTask,
  changeTask,
} from "../../../services/api/tasks";
import "react-day-picker/style.css";
import { color } from "../../../services/utils/color";
import { useTask } from "../../../providers/TaskProvider";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { statusList } from "../../../enums";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ru } from "date-fns/locale";

const PopBrowse = () => {
  const [task, setTask] = useState({
    status: "",
    date: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { id: taskId } = useParams();
  const { setTasks, filter } = useTask();
  const navigate = useNavigate();
  const taskState = useRef();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const funcTask = await getTask({
          token: JSON.parse(localStorage.getItem("userInfo")).token,
          taskId,
        });
        setTask(funcTask);
        setCurrentMonth(funcTask.date);
        setLoading(false);
      } catch (error) {
        toast.error("Ошибка при получении задачи " + error, {
          position: "top-right",
          toastId: "Task",
        });
      }
    };
    fetchTask();
  }, [taskId]);

  const deleteTaskHandler = () => {
    const deleteTaskFunc = async () => {
      deleteTask({
        token: JSON.parse(localStorage.getItem("userInfo")).token,
        taskId,
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
        })
        .catch((error) => {
          toast.error("Ошибка при удалении задачи " + error, {
            position: "top-right",
            toastId: "deleteTask",
          });
        });
    };
    deleteTaskFunc();
  };

  const changeTaskHandler = () => {
    if (!validateFields()) {
      return;
    }
    const changeTaskFunc = async () => {
      changeTask({
        token: JSON.parse(localStorage.getItem("userInfo")).token,
        task,
        taskId,
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
          setIsEdit(false);
        })
        .catch((error) => {
          toast.error("Ошибка при обновлении задачи " + error, {
            position: "top-right",
            toastId: "changeTask",
          });
        });
    };
    changeTaskFunc();
  };

  const editTaskHandler = () => {
    taskState.current = task;
    setIsEdit(true);
  };

  const cancelEditTaskHandler = () => {
    setTask(taskState.current);
    setIsEdit(false);
  };

  const setDataHandler = (attribute, value) => {
    setTask((prevTask) => ({
      ...prevTask,
      [attribute]: value,
    }));
  };

  const statusThemesCalc = () => {
    if (isEdit) {
      return Object.entries(statusList).map((status) => {
        return (
          <S.StatusTheme
            key={status[1]}
            $current={status[1] === task.status}
            onClick={() => {
              setDataHandler("status", status[1]);
            }}
          >
            <S.StatusThemeText>{status[1]}</S.StatusThemeText>
          </S.StatusTheme>
        );
      });
    } else {
      return (
        <S.StatusTheme $current={true}>
          <S.StatusThemeText>{task.status}</S.StatusThemeText>
        </S.StatusTheme>
      );
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <S.PopBrows>
            <S.PopBrowsContainer>
              <S.PopBrowsBlock>
                <S.PopBrowserContent>
                  <S.PopBrowsTopBlock>
                    <S.PopBrowsTtl>{task.title}</S.PopBrowsTtl>
                    <S.CategoriesTheme
                      $color={color(task.topic)}
                      $active={true}
                    >
                      <S.CategoriesThemeText $color={color(task.topic)}>
                        {task.topic}
                      </S.CategoriesThemeText>
                    </S.CategoriesTheme>
                  </S.PopBrowsTopBlock>
                  <S.PopBroswStatus>
                    <S.PopBrowsStatusText>Статус</S.PopBrowsStatusText>
                    <S.StatusThemes>{statusThemesCalc()}</S.StatusThemes>
                  </S.PopBroswStatus>
                  <S.PopBrowsWrap>
                    <S.PopBrowsForm>
                      <S.PopBrowsFormBlock>
                        <S.PopBrowsFormLabel>
                          Описание задачи
                        </S.PopBrowsFormLabel>
                        <S.TextArea
                          name="text"
                          readOnly={!isEdit}
                          placeholder="Введите описание задачи..."
                          value={task.description}
                          onChange={(text) =>
                            setDataHandler("description", text.target.value)
                          }
                        />
                      </S.PopBrowsFormBlock>
                    </S.PopBrowsForm>
                    <S.PopNewBrowserCalendar>
                      <S.CalendarTitle>Даты</S.CalendarTitle>
                      <S.Calendar
                        disabled={!isEdit}
                        locale={ru}
                        mode="single"
                        selected={task.date}
                        onSelect={(date) => setDataHandler("date", date)}
                        month={currentMonth}
                        onMonthChange={(month) => setCurrentMonth(month)}
                        footer={
                          task.date
                            ? `Срок исполнения: ${moment(task.date).format(
                                "DD.MM.YYYY"
                              )}`
                            : "Выберите дату"
                        }
                      />
                    </S.PopNewBrowserCalendar>
                  </S.PopBrowsWrap>
                  <S.ThemeDownCategory>
                    <S.ThemeDownCategoryText>Категория</S.ThemeDownCategoryText>
                    <S.CategoriesTheme $color="orange" $active={true}>
                      <S.CategoriesThemeText $color="orange">
                        Web Design
                      </S.CategoriesThemeText>
                    </S.CategoriesTheme>
                  </S.ThemeDownCategory>
                  <S.PopBrowsBtnBrowse>
                    <S.BtnGroup>
                      <S.PopBrowsBtnBg
                        $hide={!isEdit}
                        onClick={changeTaskHandler}
                      >
                        Сохранить
                      </S.PopBrowsBtnBg>
                      <S.PopBrowsBtn
                        $hide={!isEdit}
                        onClick={cancelEditTaskHandler}
                      >
                        Отменить
                      </S.PopBrowsBtn>
                      <S.PopBrowsBtn $hide={isEdit} onClick={editTaskHandler}>
                        Редактировать задачу
                      </S.PopBrowsBtn>
                      <S.PopBrowsBtn onClick={deleteTaskHandler}>
                        Удалить задачу
                      </S.PopBrowsBtn>
                    </S.BtnGroup>
                    <S.PopBrowsBtnBg>
                      <S.PopBrowsLink to="/">Закрыть</S.PopBrowsLink>
                    </S.PopBrowsBtnBg>
                  </S.PopBrowsBtnBrowse>
                </S.PopBrowserContent>
              </S.PopBrowsBlock>
            </S.PopBrowsContainer>
          </S.PopBrows>
        </>
      )}
    </>
  );
};

export default PopBrowse;
