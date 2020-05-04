import React, { Component, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TwilioChat from 'twilio-chat';
import { toast } from 'react-toastify';

import MessageList from './MessageList';
import MessageForm from './MessageForm';

export default function ChatBox({ RoomName }) {
  const token = useSelector((state) => state.auth.accessToken);
  let channel = null;
  const [messages, setMessages] = useState([]);
  const [chatClient, setChatClient] = useState({});
  // const [channel, setChannel] = useState({});

  useEffect(() => {
    addMessage({ body: 'Connecting...' });
    async function startedChat() {
      const newChatClient = await new TwilioChat(token);
      setChatClient(newChatClient);
      createGeneralChannel(newChatClient)
        .then(joinInChanel())
        .then(configureChannelEvents())
        .catch((error) => {
          this.addMessage({ body: `Error: ${error.message}` });
        });
    }
    startedChat();
  });

  function addMessage(message) {
    setMessages([...messages, message]);
  }

  async function getAllChanels() {
    const chanelList = await chatClient.getPublicChannelDescriptors();
    return chanelList;
  }

  async function createGeneralChannel(chatClient) {
    addMessage({ body: 'Creating general channel...' });
    return new Promise((resolve, reject) => {
      chatClient
        .createChannel({
          uniqueName: `general-${RoomName}`,
          friendlyName: 'General',
        })
        .then(async () => {
          const joinChanel = await joinInChanel(`general-${RoomName}`);

          return joinChanel;
        })
        .catch(() => reject(toast.error('Não foi possivel entrar na sala')));
    });
  }

  async function joinInChanel(chanelName = null) {
    const defaultName = chanelName ? chanelName : `general-${RoomName}`;
    return new Promise((resolve, reject) => {
      chatClient
        .getSubscribedChannels()
        .then(() => {
          chatClient
            .getChannelByUniqueName(defaultName)
            .then((currentChannel) => {
              addMessage({ body: 'Joining general channel...' });
              channel = currentChannel;

              currentChannel
                .join()
                .then(() => {
                  addMessage({
                    body: `Joined ${defaultName} channel`,
                  });
                  window.addEventListener('beforeunload', () =>
                    currentChannel.leave(),
                  );
                })
                .catch(() => toast.error('Não foi possivel entrar na sala'));

              resolve(currentChannel);
            })
            .catch(async () => {
              const newChanel = await createGeneralChannel(chatClient);
              return newChanel;
            });
        })
        .catch(() => reject(toast.error('Não foi possivel entrar na sala')));
    });
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
    console.log(`handleNewMessage: ${channel}`);
    if (channel) {
      channel.sendMessage(text);
    }
  }

  return (
    <>
      <MessageList messages={messages} />
      <MessageForm onMessageSend={handleNewMessage()} />
    </>
  );
}
