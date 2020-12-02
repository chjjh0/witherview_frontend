import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.input`
  width: 533px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #9e9e9e;
  font-size: 20px;
  font-family: AppleSDGothicNeoM00;
  line-height: 1.7;
  text-align: left;
  color: #9e9e9e;
  &:focus {
    outline: none;
    border-bottom: 3px solid #5f5fd9;
    color: #3d3d3d;
  }
`;

export default function InputBar({
  className,
  placeholder,
  onChange,
  name,
  type,
}) {
  return (
    <Wrapper
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

InputBar.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

InputBar.defaultProps = {
  className: '',
  placeholder: '',
  onChange: () => {},
  name: '',
  type: '',
};
