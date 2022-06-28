import React, { useEffect, useRef } from 'react';
import Todo from '../../store/Todo';
import styled from 'styled-components';
import { useAnimate } from '../../useAnimate';

const TodoContainer = styled.div`
  padding: 5px 15px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  opacity: 1;
  background: transparent;
  &.remove {
    background: red;
    opacity: 0;
    transform: scale(0.9);
  }
  &.animate {
    background: blue;
    opacity: 0;
    transform: scale(1.1);
  }
  &:nth-child(odd).selected {
    background: #e8e8e8;
  }

  &:nth-child(even).selected {
    background: #dedede;
  }
`;

const TodoItem = ({todo, setSelected}) => {
    const ref = useRef();

    const removeItem = useAnimate(() =>  Todo.removeTodo(todo.id), ref, 'remove')
    const setAnimate = useAnimate(() =>  {}, ref, 'animate')

    useEffect(() => {
        if(ref.current) setAnimate(null, ref.current)
    }, [ref])

    return (
      <TodoContainer onClick={() => setSelected(ref.current, todo.id)} ref={ref}>
          {todo.id}
          <button onClick={removeItem}>Удалить</button>
      </TodoContainer>
    );
};

export default TodoItem;