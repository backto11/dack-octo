import './../../App.css';
import Catalog from '../../features/catalog/Catalog';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './Header';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import LoginPage from '../../features/login/LoginPage';
import RegisterPage from '../../features/register/RegisterPage';
import TestErrors from '../../features/testerrors/TestErrors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark': 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background:{
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar />
      <CssBaseline />
    
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
     
      <Container>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/testerrors' component={TestErrors} />
        <Route path='/server-error' component={ServerError} />
        <Route component={NotFound} />
        </Switch>
        
      </Container>
    </ThemeProvider>



  );
}

export default App;
