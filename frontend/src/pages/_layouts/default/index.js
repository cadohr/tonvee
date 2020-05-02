import React from 'react';
import PropTypes from 'prop-types';

import connectionOptions from '~/config/TwilioConfig';

import VideoProvider from '~/components/VideoProvider';
import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <VideoProvider options={connectionOptions}>
        <Header />
        {children}
      </VideoProvider>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
