const data = [
  {
    id: 1,
    title: "Meu primeiro todo",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Meu segundo todo",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Meu terceiro todo",
    isCompleted: false,
  },
];

export function App() {
  return (
    <main>
      <h1> Todo List</h1>
      <input type="text" />
      <button>Adicionar</button>
      { data.map(item => (
        <p key={item.id}>{item.id } - {item.title } </p>
      )) }
    </main>
  );
}

export default App;
