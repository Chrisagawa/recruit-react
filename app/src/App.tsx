import React from 'react';
import { PageHeader, Icon } from 'antd';

import CardDetails from './components/CardDetails';

const App: React.FC = () => {
  return (
    <div className="App">
      <PageHeader
        backIcon={<Icon type="menu" />}
        title="Register card form"
        onBack={() => null}
      />
      <CardDetails />
    </div>
  );
}

export default App;
