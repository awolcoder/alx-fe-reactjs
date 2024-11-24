// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Learn React')).toBeInTheDocument();
    expect(getByText('Build a Todo List')).toBeInTheDocument();
    expect(getByText('Write tests')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    const { getByText, getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText('Add new todo');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    const { getByText } = render(<TodoList />);
    const todo = getByText('Learn React');
    const toggleButton = todo.nextElementSibling;

    fireEvent.click(toggleButton);

    expect(todo).toHaveStyle({ textDecoration: 'line-through' });
  });

  it('deletes a todo', () => {
    const { getByText } = render(<TodoList />);
    const todo = getByText('Build a Todo List');
    const deleteButton = todo.nextElementSibling.nextElementSibling;

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});