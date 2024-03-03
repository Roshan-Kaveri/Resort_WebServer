import logo from './logo.svg';
import './App.css';
import NavBar from './components/login_page/NavBar';
import Introduction from './components/login_page/Introduction';
import Background from './components/login_page/Background';
import LoginForm from './components/login_page/.login_form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Background></Background>
        <NavBar></NavBar>
        <div className="flexbox">
        <Introduction></Introduction>
        <LoginForm></LoginForm>
        </div>
       
        
      </header>
    </div>
  );
}

export default App;
