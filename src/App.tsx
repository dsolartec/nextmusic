import React from 'react';
import { IonApp } from '@ionic/react';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Library from './pages/Library';
import Main from './pages/Main';

// Styles
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import './assets/scss/general.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <IonApp>
      <Header />
      <Switch>
        <Route exact path="/library" component={Library} />
        <Route exact path="/" component={Main} />
      </Switch>
    </IonApp>
  </BrowserRouter>
);

export default App;
