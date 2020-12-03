import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import C from '@components';
import Logo from '@assets/images/witherview_logo_title_dark.png';

const Wrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
  -moz-box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
  box-shadow: 0px -5px 44px -2px rgba(4, 4, 161, 0.27);
  background-color: white;
`;

const WrapLeft = styled.img`
  width: 169px;
`;

const WrapContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapRightInner = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  width: 50%;
  min-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 140);

export default function LandingHeader({ topRef, middleOneRef }) {
  const history = useHistory();
  const executeScroll = (ref) => scrollToRef(ref);

  return (
    <Wrapper>
      <WrapContainer>
        <WrapLeft src={Logo} />
        <WrapRightInner>
          <C.TextButtonProps onClick={() => executeScroll(topRef)} text="홈" />
          <C.TextButtonProps
            onClick={() => executeScroll(middleOneRef)}
            text="위더뷰란?"
          />
          <C.TextButtonProps text="혼자연습" />
          <C.TextButtonProps text="면접스터디" />
          <C.Button
            theme="outline"
            width={230}
            text="LOG IN"
            func={() => history.push('/login')}
          />
        </WrapRightInner>
      </WrapContainer>
    </Wrapper>
  );
}

LandingHeader.propTypes = {
  topRef: PropTypes.object.isRequired,
  middleOneRef: PropTypes.object.isRequired,
};
