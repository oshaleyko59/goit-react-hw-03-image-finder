import styled from 'styled-components';
import { Colors } from 'common/const';

/* SearchForm styles */

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  background-color: ${Colors.primary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  background-color: ${Colors.bgSecondary};
  border-radius: 4px;
  overflow: hidden;
  font-size: 24px;
`;

//SearchForm-button
export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: ${Colors.bgAuxiliary};
  opacity: 0.3;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: ${Colors.primary};
  &:hover {
    opacity: 1;
  }
`;

//SearchForm-input
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  line-height: 1.5;
  border: none;
  outline: none;
  padding: 0 8px;
  color: ${Colors.primary};

  &::placeholder {
    font: inherit;
    font-style: italic;
  }
`;

