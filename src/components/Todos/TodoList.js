import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Todo from '../../store/Todo';
import TodoItem from './TodoItem';
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 25px;
  button {
    background: transparent;
    padding: 5px 15px;
    width: 200px;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
  }
`

const TodoList = () => {

    const [selectedTodo, setSelectedTodo] = useState([]);


    const addToSelected = (element, id) => {
        element.classList.toggle('selected');
        let array = [...selectedTodo];

        if (array.length === 0) return setSelectedTodo([id]);

        if (array.includes(id)) {
            array = array.filter((item) => item !== id);
        } else {
            array.push(id);
        }
        setSelectedTodo(array);
    };

    return (
      <div>
          <Header>
              <button onClick={() => Todo.addTodo()}>Добавить</button>
              <button disabled={!Todo.accessToGet} onClick={() => Todo.fetchTodos()}>Получить</button>
              <button onClick={() => Todo.clearTodo()}>Очистить</button>
              <button onClick={() => Todo.removeSelectedTodo(selectedTodo)}>Удалить выделенные</button>
          </Header>
          {
              Todo.todos.map((item) => <TodoItem key={item.id} todo={item} setSelected={addToSelected}/>)
          }
      </div>
    );
};

export default observer(TodoList);