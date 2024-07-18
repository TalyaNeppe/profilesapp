import "./App.css";

function App() {
  const sentences = [
    "Happy Birthday!",
    "get better.",
    "we love you!",
    "eat trash",
    "Why are you here?",
  ];
  return <h1>{sentences[Math.floor(Math.random() * sentences.length)]}</h1>;
}

export default App;
