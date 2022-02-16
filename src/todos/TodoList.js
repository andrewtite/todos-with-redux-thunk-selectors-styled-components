import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {markTodoAsCompleteRequest, loadTodos, removeTodoRequest} from '../thunks';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
    getTodosLoading,
    getIncompleteTodos,
    getCompletedTodos,
} from "../selectors";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

export const TodoList = ({completedTodos = [], incompleteTodos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading Todos...</div>;
    const content = (
        <ListWrapper>
            <NewTodoForm/>
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo, i) => <TodoListItem key={i}
                                                  todo={todo}
                                                  onRemovePressed={onRemovePressed}
                                                  onCompletedPressed={onCompletedPressed}
            />)}
            <h3>Completed:</h3>
            {completedTodos.map((todo, i) => <TodoListItem key={i}
                                                            todo={todo}
                                                            onRemovePressed={onRemovePressed}
                                                            onCompletedPressed={onCompletedPressed}
            />)}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompleteRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);