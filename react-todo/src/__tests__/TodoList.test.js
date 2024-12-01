import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem); // Toggle to complete the todo
    expect(todoItem).toHaveStyle('text-decoration: none');
    fireEvent.click(todoItem); // Toggle to mark it as not completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', async () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');

    // Click the first delete button
    fireEvent.click(deleteButtons[0]);

    // Wait for the DOM to update
    await waitFor(() => {
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
  });
});
