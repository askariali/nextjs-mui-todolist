import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Typography variant="h1" className="text-blue-600">
        Hello World
      </Typography>
      <Typography variant="h2">Next.js + Material-UI + TailwindCSS</Typography>
    </div>
  );
}
