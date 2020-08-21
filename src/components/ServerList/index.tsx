import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={1} />
      <ServerButton mentions={36}/>
      <ServerButton />
      <ServerButton mentions={8} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={25} />
      <ServerButton />
      <ServerButton mentions={120}/>
    </Container>
  );
};

export default ServerList;
