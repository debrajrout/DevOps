import { types, onSnapshot, destroy } from "mobx-state-tree";

const Todo = types
  .model("Todo", {
    id: types.identifier,
    title: types.string,
    desc: types.string,
    status: types.string,
  })
  .actions((self: any) => ({
    toggle(newStatus: string) {
      self.status = newStatus;
    },
    edit(newTitle: string, newDesc: string) {
      self.title = newTitle;
      self.desc = newDesc;
    },
  }));

const Store = types
  .model("Store", {
    todos: types.array(Todo),
  })
  .actions((self) => {
    const saveTodos = () => {
      const todoJson = JSON.stringify(self.todos);
      localStorage.setItem("todos", todoJson);
    };

    const loaadTodos = () => {
      const todoJson = localStorage.getItem("todos");
      if (todoJson) {
        const tasks = JSON.parse(todoJson);
        self.todos.replace(tasks);
      }
    };
    return {
      addTodo: (title: string, desc: string, status: string) => {
        const id = Math.random().toString();
        const newTodo = Todo.create({
          id,
          title,
          desc,
          status: "To-Do",
        });
        self.todos.push(newTodo);
        saveTodos();
      },

      editTodoById: (id: string, newTitle: string, newDesc: string) => {
        const todoToEdit = self.todos.find((todo) => todo.id === id);
        if (todoToEdit) {
          if (newTitle.trim() !== "") {
            todoToEdit.title = newTitle;
          }
          if (newDesc.trim() !== "") {
            todoToEdit.desc = newDesc;
          }
          saveTodos();
        }
      },

      toggleStatus: (id: string, newStatus: string) => {
        const todoToEdit = self.todos.find((todo) => todo.id === id);
        if (todoToEdit) {
          todoToEdit.toggle(newStatus);
          saveTodos();
        }
      },

      removeTodoById: (id: string) => {
        const todoToRemove = self.todos.find((todo) => todo.id === id);
        if (todoToRemove) {
          destroy(todoToRemove);
          saveTodos();
        }
      },
      saveTodos,
      loaadTodos,
    };
  });

// create an instance from a snapshot
export const store = Store.create({});

onSnapshot(store, (snapshot) => {});
