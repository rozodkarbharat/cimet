import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Moviesprovider } from './Conext/MoviesContext';
import '@fontsource/inter';
import { StyledEngineProvider } from '@mui/joy';
import { BrowserRouter } from 'react-router-dom';

export const Moviescontext = createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Moviesprovider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Moviesprovider> </BrowserRouter>
);

