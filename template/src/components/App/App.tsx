import './App.css';
import { APP_NAME, VERSION } from 'const/application';
import logo from './logo.svg';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Starting <code>{APP_NAME}</code> {VERSION}.
      </p>
      <p>
        Custom React template containing eslint, prettier, unicorn, husky and
        lintstagged
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
