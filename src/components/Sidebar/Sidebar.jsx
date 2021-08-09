import React from "react";
import style from "./Sidebar.module.scss";
import Button from "@material-ui/core/Button";

const elements = [
  { id: "doxylamine", title: "נטילת דוקסילמין" },
  { id: "kalbeten", title: "נטילת קל בטן" },
  { id: "heartRate", title: "מעקב דופק" },
  { id: "dailySteps", title: "מעקב צעדים יומי" },
  { id: "dailyTrain", title: "מעקב אימון יומי" },
];

const Sidebar = ({ currentElements, addElement }) => {
  const isDisabled = (id) => {
    const exist = currentElements.find((el) => el.id === id);
    return !!exist;
  };

  return (
    <div className={style.sidebar}>
      {elements.map(({ id, title }) => (
        <>
          {/* {titleMap[id] && ( */}
          <div key={id} className={style.sidebarItem}>
            <p className={style.title}>{title}</p>
            <Button
              variant="outlined"
              color="primary"
              disabled={isDisabled(id)}
              onClick={() => addElement(id)}
            >
              הוספה
            </Button>
          </div>
          {/* )} */}
        </>
      ))}
    </div>
  );
};

export default Sidebar;
