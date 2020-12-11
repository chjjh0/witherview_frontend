import React from 'react';
import InterviewChat from './InterviewChat';

export default {
  title: 'interviewChat',
  component: InterviewChat,
};

export const ChatWithUser = (args) => <InterviewChat {...args} />;