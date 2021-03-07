import { render } from 'react-dom';
import { Global } from '@emotion/react';
import { getGlobalStyles } from './styles';

const App = () => {
  return (
    <div>
      Hello World
      <Global styles={getGlobalStyles()} />
    </div>
  );
};

render(<App />, document.body.appendChild(document.createElement('div')));
