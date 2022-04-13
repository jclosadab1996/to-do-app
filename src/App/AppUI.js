import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
// import './App.css';

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                    {error && <p>Desesperateee....</p>}
                    {loading && <p>Estamos cargando, no desesperes....</p>}
                    {(!loading && !searchedTodos.lenght) && <p>Crea tu primer To do</p>}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed = {todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
            </React.Fragment>
    );
}

export { AppUI }