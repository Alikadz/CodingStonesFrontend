import styled from "styled-components";
import { theme } from "../../../style/Theme";

export const StyledInput = styled.input`
  ${({ width }) => width && `width: ${width};`}
  border: 2px solid ${theme.colors.white200};
  border-radius: 4px;
  color: ${theme.colors.grey800};

  &:focus {
    border: 1px solid green;
  }
  position: relative;
`;

export const StyledSelect = styled.select`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  border: 1px solid ${theme.colors.white200};
  color: ${theme.colors.grey800};
  border-radius: 4px;
`;

export const DateInput = styled.input`
  ${({ width }) => width && `width: ${width};`}
  border: 2px solid ${theme.colors.white200};
  color: ${theme.colors.grey800};
  border-radius: 4px;
`;
