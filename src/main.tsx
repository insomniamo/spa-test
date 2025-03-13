import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/utils/redux/store'; // Подключаем стор

import '@base/style.scss';
import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Content from '@/components/Content/Content';

import NewsList from './components/NewsList/NewsList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Оборачиваем приложение в Provider */}
      <Container>
        <Header />
        <Content>
          <NewsList />
        </Content>
        <Footer />
      </Container>
    </Provider>
  </StrictMode>
);
