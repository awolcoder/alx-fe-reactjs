import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom to enable toBeInTheDocument, toHaveStyle, etc.
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Enter a new todo'), {
      target: { value: 'New Todo' }
    });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem); // Toggle to complete the todo
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem); // Toggle to mark it as not completed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton); // Delete the todo
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
