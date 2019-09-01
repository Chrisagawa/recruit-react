import React from 'react';

import { PageHeader } from '../app.styled';
import * as Styled from './menu.styled';

interface Props {
  showMenu: boolean,
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>,
}

export default (props: Props) => {
  const { showMenu, toggleMenu } = props
  
  return (
    <Styled.MenuDrawer 
      visible={showMenu}
      closable={false}
      width="100%"
      placement="left"
    >
      <PageHeader
        title="Menu"
        onBack={() => toggleMenu(false)}
      />
      This is the menu context
    </Styled.MenuDrawer>
  )
};