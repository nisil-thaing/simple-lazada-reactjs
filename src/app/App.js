import React from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import GlobalStyles, { Container } from './App.style';
import RouterTree from './core/components/RouterTree';

import APP_ROUTES from './App.routing';

function App () {
  const { t } = useTranslation();

  return <Container>
    <Helmet>
      <title>{ t('HELLO_REACT_APP') }</title>
    </Helmet>
    <section className="main-content-wrapper">
      <Switch>
        {
          APP_ROUTES.map((route, i) =>
            <RouterTree key={i} {...route} />)
        }
      </Switch>
    </section>
    <GlobalStyles />
  </Container>;
}

export default App;
