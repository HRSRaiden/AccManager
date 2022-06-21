import logo from './logo.svg';
import './App.css';
import LogoImg from "./resources/loginImg.png";
import SignIn from "./SignIn/SignIn";
import MainApp from './MainApp/MainApp';

function viewScreen(screen)
{
  if(screen === 1)
    return(
      <SignIn/>
    )

  else if(screen === 2)
    return(<MainApp />)
}

function App() {
  return (
    <div className="App">
      {viewScreen(2)};
    </div>
  );
}

export default App;
