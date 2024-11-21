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

    expect(onDelete).toHaveBeenCalled();
  });

  it("should enter edit mode when edit button is clicked", async () => {
    setup();

    const editButton = screen.getByTestId("todo-edit-button");
    const user = UserEvent.setup();
    await user.click(editButton);

    expect(screen.getByRole("textbox")).toHaveValue(mockTodo.title);
  });

  it("should update the title when edited and submitted", async () => {
    // TODO: This test needs more modifications to the component to pass.
    setup();

    const editButton = screen.getByTestId("todo-edit-button");
    const user = UserEvent.setup();
    await user.click(editButton);
    const editTodoInput = screen.getByRole("textbox");
    user.type(editTodoInput, "updated todo title");
    await user.click(screen.getByTestId("submit-todo-button"));

    expect(screen.getByText("updated todo title")).toBeInTheDocument();
  });
});
