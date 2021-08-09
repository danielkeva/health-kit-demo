import firebase from "../firebase";
const db = firebase.ref();

export const getAll = () => {
  return db;
};

export const update = (key, value) => {
  console.log("key", firebase.ref("/tasks"));
  return firebase.ref(key).update({ impactsAdherence: value });
};

export const pushElement = (id) => {
  const entry = {
    id,
    type: "task",
  };
  let query = firebase.ref("/carePlans/1/elements");
  query.once("value", (data) => {
    let elements = data.val();
    elements.push(entry);
    query.set(elements);
  });
};

export const removeElement = (id) => {
  let query = firebase.ref("/carePlans/1/elements");
  query.once("value", (data) => {
    let elements = data.val();
    let idx = elements.findIndex((el) => el.id === id);
    if (idx > -1) {
      elements.splice(idx, 1);
    }
    query.set(elements);
  });
};
