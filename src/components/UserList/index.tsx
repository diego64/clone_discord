import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Marcelli Ferreira" />
      <UserRow nickname="Marcio Gomes" />
      <UserRow nickname="Otto Batista" />
      <UserRow nickname="Lidia Freitas" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Ferreira" isBot />
      <UserRow nickname="Alex Souza Silva" />
      <UserRow nickname="Marcelli Ferreira" />
      <UserRow nickname="Lidia Freitas" />
      <UserRow nickname="Otto Batista" />
      <UserRow nickname="Rafael Dantas" />
      <UserRow nickname="Hebert Felipe" />
      <UserRow nickname="Diego Tavares" />
      <UserRow nickname="Marcio Gomes" />
      <UserRow nickname="Marco Martins" />
      <UserRow nickname="Bruno" />
      <UserRow nickname="Bruno Couto" />
      <UserRow nickname="Rodrigo Dias" />
    </Container>
  );
};

export default UserList;
