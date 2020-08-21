import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(1).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Alex Souza Silva"
            date="18/08/2020"
            content="Como que está o desenvolvimento do formulário ?"
          />
        ))}

        <ChannelMessage
          author="Diego Ferreira"
          date="21/06/2020"
          content={
            <>
              <Mention>@Alex Souza Silva</Mention>, consegui resolver o bug do envio formulário
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
