import { useEffect, useState } from "react";
import Column from "../Column/Column";
import Card from "../Card/Card";
import { statusList } from "../../enums";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styledComponents";
import { getTasks, changeTask } from "../../services/api/tasks";
import { useTask } from "../../providers/TaskProvider";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { SkeletonTheme } from "react-loading-skeleton";
import SkeletonCard from "../Card/SkeletonCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const { tasks, setTasks, filter } = useTask();
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    getTasks({
      token: JSON.parse(localStorage.getItem("userInfo")).token,
      userId:
        filter === "myTasks"
          ? JSON.parse(localStorage.getItem("userInfo")).user._id
          : "",
    })
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Ошибка при получении списка задач " + error, {
          position: "top-right",
          toastId: "getTasks",
        });
      });
  }, [filter]);

  const dragStartHandler = (event) => {
    const draggedTask = tasks.find((t) => t._id === event.active.id);
    if (draggedTask) {
      setActiveCard(draggedTask);
    }
  };

  const dragEndHandler = (e) => {
    const { active, over } = e;
    setActiveCard(null);

    if (!over) return;
    const currentTaskId = active.id;
    const newStatus = over.id;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === currentTaskId ? { ...task, status: newStatus } : task
      )
    );

    changeTask({
      token: JSON.parse(localStorage.getItem("userInfo")).token,
      task: {
        ...tasks.find((task) => task._id === currentTaskId),
        status: newStatus,
      },
      taskId: currentTaskId,
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
      })
      .catch((error) => {
        toast.error("Ошибка при обновлении задачи " + error, {
          position: "top-right",
          toastId: "changeTask",
        });
      });
  };

  const mainContent =
    !isLoading && tasks.length === 0 ? (
      <S.NoNewTaskP>Новых задач нет</S.NoNewTaskP>
    ) : tasks.length !== 0 ? (
      Object.entries(statusList).map(([_, statusKey]) => (
        <Column key={statusKey} title={statusKey}>
          {tasks
            .filter((task) => task.status === statusKey)
            .map((task) =>
              isLoading ? (
                <SkeletonCard key={task._id} />
              ) : (
                <Card
                  id={task._id}
                  key={task._id}
                  theme={task.topic}
                  title={task.title}
                  date={task.date}
                />
              )
            )}
        </Column>
      ))
    ) : null;

  return (
    <>
      <ToastContainer />
      <SkeletonTheme color="#202020" highlightColor="#444">
        <S.Main>
          <S.MainContainer>
            <S.MainBlock>
              <S.MainContent>
                <DndContext
                  onDragStart={dragStartHandler}
                  onDragEnd={dragEndHandler}
                  modifiers={[restrictToWindowEdges]}
                >
                  {mainContent}
                  <DragOverlay>
                    {activeCard ? (
                      <Card
                        id={activeCard._id}
                        theme={activeCard.topic}
                        title={activeCard.title}
                        date={activeCard.date}
                        onClick={() => {}}
                      />
                    ) : null}
                  </DragOverlay>
                </DndContext>
              </S.MainContent>
            </S.MainBlock>
          </S.MainContainer>
        </S.Main>
      </SkeletonTheme>
    </>
  );
};

export default Main;
