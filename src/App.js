import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Random Dad Joke Generator</h1>
      <p id="content"> </p>
      <button id="button">Get a Random Joke!</button>
    </div>
  );
}

const button = document.getElementById("button");
if (button) {
  button.addEventListener("click", getJoke);
}

async function getJoke() {
  const jokeContent = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });

  const joke = await jokeContent.json();
  console.log(joke.joke);
  const jokeText = document.getElementById("content");
  jokeText.innerHTML = joke.joke;
}

export default App;
