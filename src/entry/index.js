import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './style.css';
import App from './App';

const renderDom = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}
renderDom(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('Accepting the updated printMe module!');
    renderDom(App);
  })
}