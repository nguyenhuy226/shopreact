import styled from "styled-components";

export const FieldStyle = styled.div`
  text-align: left;
  &.error {
    .form-control {
      border-color: red;
      color: red;
      ::placeholder {
        color: red;
      }
    }
  }
`;
export const ErrorStyle = styled.span`
  color: red;
  posititon: absolute;
  font-size: 0.875rem;
  font-style: italic;
  left: 0;
  top: 100%;
`;
