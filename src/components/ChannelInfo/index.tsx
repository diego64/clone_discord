import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Back-end</Title>

      <Separator />

      <Description>Conversas de assuntos voltados para o Back-end do sistema</Description>
    </Container>
  );
};

export default ChannelInfo;
