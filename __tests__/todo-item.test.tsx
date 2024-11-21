import { render, screen } from "@testing-library/react";
import TodoItem from "@/components/todo-item";
import UserEvent from "@testing-library/user-event";

describe("TodoItem Component", () => {
  const mockTodo = {
    id: "1",
    title: "Test Todo",
    isCompleted: false,
    createdAt: "2024-11-21T10:00:00.000Z",
  };

  const onDelete = vi.fn();
  const onToggle = vi.fn();

  const setup = () => {
    render(
      <TodoItem data={mockTodo} onDelete={onDelete} onToggle={onToggle} />
    );
  };

  it("should display the todo title", () => {
    setup();
    expect(screen.getByText(mockTodo.title)).toBeInTheDocument();
  });

  it("should mark the todo as done when the checkbox is clicked", async () => {
    setup();
    const checkbox = screen.getByRole("checkbox");
    const user = UserEvent.setup();
    await user.click(checkbox);
    expect(onToggle).toHaveBeenCalled();
  });

  it("should delete the todo when delete button is clicked", async () => {
    setup();
    const deleteButton = screen.getByTestId("todo-delete-button");
    const user = UserEvent.setup();
    await user.click(deleteButton);
    expect(onDelete).toHaveBeenCalled()
  });

  it("should enter edit mode when edit button is clicked", () => {
    setup();
    throw new Error("Not implemented yet");
  });

  it("should update the title when edited and submitted", () => {
    setup();
    throw new Error("Not implemented yet");
  });
});
