import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from 'react-router-dom';

function Home() {
  const { t } = useTranslation();
  return (
    <h2>{t('page.meta.title')}</h2>
  );
}

function PasswordGenerator() {
  const { t } = useTranslation();
  return (
    <h2>{t('page.meta.title')}</h2>
  );
}

function Footer(props) {
  return (
    <footer className='footer'>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom>
          Titre
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          Description
        </Typography>
      </Container>
    </footer>
  );
}

function App() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
