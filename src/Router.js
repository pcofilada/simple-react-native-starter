import { createRouter } from '@exponent/ex-navigation';

import Main from './components/Main';

const Router = createRouter(() => ({
  main: () => Main,
}));

export default Router;
