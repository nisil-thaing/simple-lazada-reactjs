import React from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import GlobalStyles, { Container } from './App.style';
import RouterTree from './core/components/RouterTree';
import MainHeader from './containers/MainHeader/MainHeader';
import MainFooter from './containers/MainFooter/MainFooter';

import APP_ROUTES from './App.routing';

function App () {
  const { t } = useTranslation();

  return <Container>
    <Helmet>
      <title>{ t('HELLO_REACT_APP') }</title>
    </Helmet>
    <MainHeader />
    <section className="main-content-wrapper">
      <Switch>
        {
          APP_ROUTES.map((route, i) =>
            <RouterTree key={i} {...route} />)
        }
      </Switch>
    </section>
    <MainFooter />
    <GlobalStyles />
  </Container>;
}

export default App;
