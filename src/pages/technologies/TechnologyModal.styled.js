import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${({ align }) => align && `align-items: ${align};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ width }) => width && `width: ${width};`}
`;

export const Input = styled.input`
  font: normal normal normal 17px/20px Inter;
  color: #4d5058;
  padding: .8rem;
  border: 1px solid #dbdee1;
  border-radius: 5px;
  width: 100%;
  outline: none;
`;

export const Label = styled.label`
  font: normal normal normal 17px/20px Inter;
  color: #7c7c7c;
  padding-bottom: 0.5rem;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 5rem;
  gap: 0.5rem;
`;

export const Span = styled.span`
  position: absolute;
  right: 9rem;
  z-index: 2;
  color: ${({ theme }) => theme.colors.grey1000};
`;
