
import { SCHEMA } from "../constant";
import { getAll, upsert, updateFields, deleteById, deleteAll } from "../service/service";

// ✅ Return live RealmResults (auto updates when DB changes)
export const listTodosLive = () => getAll(SCHEMA.TODO, "id", false);

// ✅ Create / Insert
export const addTodo = (taskText) => {
  const newId = Date.now().toString(); // generate unique string id
  upsert(SCHEMA.TODO, {
    id: newId,
    task: taskText,
    done: false,
  });
};

// ✅ Update (toggle done)
export const toggleTodo = (id, value) => {
  updateFields(SCHEMA.TODO, id, {
    done: value,
  });
};

// ✅ Edit todo text
export const updateTodo = (id, newTask) => {
  updateFields(SCHEMA.TODO, id, {
    task: newTask,
  });
};

// ✅ Delete single todo
export const removeTodo = (id) => deleteById(SCHEMA.TODO, id);

// ✅ Delete all todos
export const clearTodos = () => deleteAll(SCHEMA.TODO);
