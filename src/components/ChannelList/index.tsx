import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Divisões do Projeto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Mensagem Geral" />
      <ChannelButton channelName="Servidores" />
      <ChannelButton channelName="Banco dados" />
      <ChannelButton channelName="Back-end" />
      <ChannelButton channelName="Front-end" />
      <ChannelButton channelName="Mobile" />
      <ChannelButton channelName="Desing e Marketing" />
      <ChannelButton channelName="Comercial" />
    </Container>
  );
};

export default ChannelList;
