import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
function App() {
  return (
    <div className='appBody'>
      <div className='loginContainer'>
        <p className='loginText'>User name</p>
        <input type="text" />
        <p className='loginText'>Password</p>
        <input type="password" />
        <Button variant="secondary">Login</Button>
      </div>
    </div>
  );
}

export default App;
