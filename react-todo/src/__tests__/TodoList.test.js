// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import TodoList from '../TodoList';

// describe('TodoList Component', () => {
//   test('renders TodoList component with initial todos', () => {
//     render(<TodoList />);
//     expect(screen.getByText('Learn React')).toBeInTheDocument();
//     expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
//   });

//   test('adds a new todo', () => {
//     render(<TodoList />);
//     fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
//       target: { value: 'New Todo' },
//     });
//     fireEvent.click(screen.getByText('Add Todo'));
//     expect(screen.getByText('New Todo')).toBeInTheDocument();
//   });

//   test('toggles todo completion', () => {
//     render(<TodoList />);
//     const todoItem = screen.getByText('Learn React');
//     fireEvent.click(todoItem); // Toggle to complete the todo
//     expect(todoItem).toHaveStyle('text-decoration: line-through');
//     fireEvent.click(todoItem); // Toggle to mark it as not completed
//     expect(todoItem).not.toHaveStyle('text-decoration: line-through');
//   });

//   test('deletes a todo', async () => {
//   render(<TodoList />);
//   const deleteButtons = screen.getAllByText('Delete');



// Click the first delete button

//   fireEvent.click(deleteButtons[0]);

// Wait for the DOM to update

//   await waitFor(() => {
//     expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
//   });
// });

//   test('deletes a todo', () => {
//     render(<TodoList />);
//     const deleteButtons = screen.getAllByText('Delete');
//     fireEvent.click(deleteButtons[0]); // Click the first delete button
//     expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
//   });
// });


// test('deletes a todo', async () => {
//   render(<TodoList />);
//   const deleteButtons = screen.getAllByText('Delete');
  

// Click the first delete button
//   fireEvent.click(deleteButtons[0]);

// Wait for the DOM to update
//   await waitFor(() => {
//     expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
//   });
// });

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
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
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
