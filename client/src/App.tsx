import React from 'react';
import './index.scss'
import { useRouter } from './router/router';

const App: React.FC = () => {
  const routes = useRouter(false)
  return (
    <div>
      {routes}
    </div>
  )
}

export default App;
