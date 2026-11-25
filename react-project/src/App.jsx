
import Home from "./Home";
import "./App.css";

function Data(prop) {
  console.log(prop);

  return (
    <>
      <h2>Data Component</h2>
      <h2>Organisation Name: {prop.obj}</h2>
    </>
  );
}

function Players(prop) {
  return (
    <>
      <h2>List of Players</h2>

      <div className="players-container">
        {prop.data.map((player) => (
          <div className="player-box" key={player.id}>
            <h3>ID: {player.id}</h3>
            <h3>Name: {player.name}</h3>
            <h3>Team: {player.team}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

function App() {
  let players_data = [
    {
      id: 100,
      name: "Sajini",
      team: "India"
    },
    {
      id: 101,
      name: "Priya",
      team: "England"
    },
    {
      id: 102,
      name: "Riya",
      team: "paris"
    },
    {
      id: 103,
      name: "Sakshi",
      team: "Australia"
    }
  ];

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>JS File</h2>
      <p>This is a simple React application.</p>

      <Home />

      <Data obj="World Cup Championship" />

      <Players data={players_data} />
    </>
  );
}

export default App;
