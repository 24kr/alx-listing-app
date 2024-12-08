import app from "next/app";

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>

  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton const title="I'm a button" />
    </div>
  );
}
