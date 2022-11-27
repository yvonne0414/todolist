import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const mockTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(mockTodos);

  const handleChange = (value) => {
    setInputValue(value);
  };

  // 新增項目
  const handleAddTodo = () => {
    if (inputValue.trim().length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random() * 100, title: inputValue, isDone: false },
      ];
    });

    setInputValue('');
  };

  // 刪除項目
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 輸入
  const handleKeyDown = () => {
    if (inputValue.trim().length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random() * 100, title: inputValue, isDone: false },
      ];
    });

    setInputValue('');
  };

  // 切換樣式
  const handleToggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  };

  // 切換編輯模式
  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit: isEdit,
          };
        }
        return { ...todo, isEdit: false };
      });
    });
  };

  // 儲存編輯項目
  const handleSave = ({ id, title }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title, isEdit: false };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDeleteTodo}
      />
      <Footer numOfTodos={todos.length} />
    </div>
  );
};

export default TodoPage;
