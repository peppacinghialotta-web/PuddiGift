
import Lock from "./Component/Lock";


function App() {
  return (
    <div>
      <Lock onUnlock={() => console.log("Unlock clicked")} />
    </div>
  );
}

export default App;