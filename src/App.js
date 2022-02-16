import React from 'react';
import {hot} from 'react-hot-loader';
import styled from 'styled-components';
import TodoList from './todos/TodoList';

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, sans-serif;
  color: #222222;
`;

const App = () => {
    return (
        <AppContainer>
            <TodoList todos={[
                {
                    text: 'Test Item 1'
                },
                {
                    text: 'Test Item 2'
                },
                {
                    text: 'Test Item 3'
                }
            ]}/>
        </AppContainer>
    );
};

export default hot(module)(App);