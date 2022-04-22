import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import GLTFModel1 from './assets/VTOGlasses/models3D/glasses1.glb'
import GLTFModel2 from './assets/VTOGlasses/models3D/glasses2.glb'

import './styles/index.scss'

import { HomePage } from "./js/components/HomePage";
import VTOGlasses from "./js/components/VTOGlasses";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

render(
  <AppContainer>
    <Router>
      <Switch>
        <Route path="/product1">
          <VTOGlasses currentModel={GLTFModel2} />
        </Route>

        <Route path="/product2">
          <VTOGlasses currentModel={GLTFModel1} />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </AppContainer>,
  document.querySelector('#root')
);
