import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import TaskCard from "../TaskCard";

const task = {
  id: 1,
  title: "Task 1",
  image: "task1.jpg",
  created_at: "2023-06-01",
  due_date: "2023-06-10",
  overdue: false,
};

test("renders TaskCard component", () => {
  render(<TaskCard task={task} />);
});

test("renders the task title", () => {
  const { getByText } = render(<TaskCard task={task} />);
  const taskTitle = getByText(task.title);
  expect(taskTitle).toBeInTheDocument();
});

test("renders the task image with correct src and alt attributes", () => {
  const { getByAltText } = render(<TaskCard task={task} />);
  const taskImage = getByAltText(task.title);
  expect(taskImage).toHaveAttribute("src", task.image);
  expect(taskImage).toHaveAttribute("alt", task.title);
});

test("navigates to the task details page on click", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <TaskCard task={task} />
      </Router>
    );
  
    const card = getByText(task.title);
    fireEvent.click(card);
  
    expect(history.location.pathname).toBe(`/tasks/${task.id}`);
  });