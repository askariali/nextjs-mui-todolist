import CreateNewTodo from "@/components/forms/todo/create";
import TodoList from "@/components/todo-list/todo-list";
import { Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography
        variant="h3"
        className="font-bold text-center py-8 text-white"
      >
        Todo List
      </Typography>
      <Stack spacing={2}>
        <CreateNewTodo />
        <TodoList />
      </Stack>
    </Container>
  );
}
