import React, { useState, useEffect } from 'react';
import TwilioChat from 'twilio-chat';
import { toast } from 'react-toastify';

import { store } from '~/store';
import api from '~/services/api';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

export default function ChatBox({ RoomName }) {
  const userStorage = store.getState().user;
  const [messages, setMessages] = useState([]);
  const [username] = useState(userStorage.profile.name);
  const [token, setToken] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);

  function addMessage(message) {
    const messageData = {
      ...message,
      me: message.author === username,
    };
    setMessages([...messages, messageData]);
  }

  async function getAllChanels() {
    const chanelList = await chatClient.getPublicChannelDescriptors();
    return chanelList;
  }

  async function createGeneralChannel() {
    addMessage({ body: 'Creating general channel...' });

    const gerenalChat = await chatClient
      .createChannel({
        uniqueName: `general-${RoomName}`,
        friendlyName: 'General',
      })
      .then(async () => {
        const joinChanel = await joinInChanel(`general-${RoomName}`);

        return joinChanel;
      })
      .catch(() => toast.error('Não foi possivel entrar na sala'));

    return gerenalChat;
  }

  async function joinInChanel(chanelName = null) {
    const defaultName = chanelName ? chanelName : `general-${RoomName}`;
    const enterRoom = await chatClient
      .getSubscribedChannels()
      .then(() => {
        chatClient
          .getChannelByUniqueName(defaultName)
          .then((currentChannel) => {
            addMessage({ body: 'Joining general channel...' });
            setChannel(currentChannel);

            currentChannel
              .join()
              .then(() => {
                addMessage({
                  body: `Joined ${defaultName} channel as ${username}`,
                });
                window.addEventListener('beforeunload', () =>
                  currentChannel.leave(),
                );
              })
              .catch(() => toast.error('Não foi possivel entrar na sala'));
          })
          .catch(async () => {
            const newChanel = await createGeneralChannel(chatClient);
            return newChanel;
          });
      })
      .catch(() => toast.error('Não foi possivel entrar na sala'));

    return enterRoom;
  }

  function configureChannelEvents() {
    channel.on('messageAdded', ({ author, body }) => {
      addMessage({ author, body });
    });

    channel.on('memberJoined', (member) => {
      addMessage({ body: `${member.identity} has joined the channel.` });
    });

    channel.on('memberLeft', (member) => {
      addMessage({ body: `${member.identity} has left the channel.` });
    });
  }

  function handleNewMessage(text) {
    if (channel) {
      channel.sendMessage(text);
    }
  }

  useEffect(() => {
    addMessage({ body: 'Connecting...' });
    async function getToken(username) {
      const data = await api.get('/token', { username });
      setToken(data);
      const newChatClient = await new TwilioChat(token.jwt);
      setChatClient(newChatClient);
      await joinInChanel();
      configureChannelEvents();
    }
    getToken(username);
  }, []);

  return (
    <>
      <MessageList messages={messages} />
      <MessageForm onMessageSend={handleNewMessage()} />
    </>
  );
}
