import React from 'react';
import TodoList from '../components/Todos/TodoList';
import styled from 'styled-components';

const AppStyled = styled.div`
  font-family: sans-serif;
`;

const Home = () => {

    return (
      <AppStyled>
          <TodoList/>
      </AppStyled>
    );
};

export default Home;