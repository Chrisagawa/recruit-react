import React, { useState } from 'react';
import { Icon } from 'antd';

import { PageHeader } from './app.styled';
import CardDetails from './components/CardDetails';
import Menu from './components/Menu';

const App: React.FC = () => {
  const [showMenu, toggleMenu] = useState<boolean>(false)
  return (
    <div className="App">
      <PageHeader
        backIcon={<Icon type="menu" />}
        title="Register card form"
        onBack={() => toggleMenu(true)}
      />
      <CardDetails />
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
