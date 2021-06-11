import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import profileExample from '@assets/images/profile_example.png';
import A from '@atoms';

const Wrapper = styled.div`
  height: 7.3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme: { profileInfoContainerWrapper } }) =>
    profileInfoContainerWrapper};
`;

const Name = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 1.5vh;
  padding-left: 2.5vh;
  user-select: none;
`;

const NameBelow = styled.div`
  font-family: AppleSDGothicNeoM00;
`;

export default function ProfileInfoContainer({ name, participateRate, src }) {
  return (
    <Wrapper>
      <A.ProfileIcon src={src} isSmall />
      <Name>
        <div>{name}</div>
        <NameBelow>
          {participateRate}
          %의 참여도
        </NameBelow>
      </Name>
    </Wrapper>
  );
}

ProfileInfoContainer.propTypes = {
  name: PropTypes.string,
  participateRate: PropTypes.number,
  src: PropTypes.string,
};

ProfileInfoContainer.defaultProps = {
  name: '홍길동',
  participateRate: 99,
  src: profileExample,
};
