import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TwilioChat from 'twilio-chat';

import { Form } from '@unform/web';

import { Input } from '~/components/Form';

import MessageList from './MessageList';

export default function ChatBox({ RoomName }) {
  const token = useSelector((state) => state.auth.accessToken);
  const [messages, setMessages] = useState([]);
  const [channel, setChannel] = useState();

  useEffect(() => {
    addMessage({ body: 'Connecting...' });
    async function startedChat() {
      const client = await TwilioChat.create(token);
      const channelName = `general-${RoomName}`;

      let chan;
      if (!(chan = await client.getChannelByUniqueName(channelName))) {
        chan = await client.createChannel({
          uniqueName: channelName,
          friendlyName: 'General',
        });
      }

      await chan.join();
      setChannel(chan);

      addMessage({
        body: `Joined ${channelName} channel`,
      });

      chan.on('messageAdded', ({ author, body }) => {
        addMessage({ author, body });
      });

      chan.on('memberJoined', (member) => {
        addMessage({ body: `${member.identity} has joined the channel.` });
      });

      chan.on('memberLeft', (member) => {
        addMessage({ body: `${member.identity} has left the channel.` });
      });
    }

    startedChat();

    return () => {
      window.addEventListener('beforeunload', () => channel.leave());
    };
  }, []);

  function addMessage(message) {
    setMessages([...messages, message]);
  }

  function handleNewMessage({ message }, { reset }) {
    channel.sendMessage(message);

    reset();
  }

  return (
    <>
      <MessageList messages={messages} />

      <Form className="MessageForm" onSubmit={handleNewMessage}>
        <Input type="text" name="message" placeholder="Enter your message..." />
        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>
      </Form>
    </>
  );
}
