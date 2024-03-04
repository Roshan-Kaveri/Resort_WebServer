import logo from './logo.svg';
import './App.css';
import './components/Roombok.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import ROOM_BOOK from './components/RoomBok';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ROOM_BOOK></ROOM_BOOK>
      </header>
    </div>
  );
}

export default App;
