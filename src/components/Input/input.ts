import styled from "styled-components";

const InputWrapper = styled.label`
  gap: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  }
  input {
    padding: 10px;
    outline: none;
    color: var(--secondary-color);
    background-color: white;
    border: 1px solid var(--placeholder-color);

    &::placeholder {
      color: var(--placeholder-color);
      font-size: 14px;
    }
  }

  .placeholder {
    color: var(--placeholder-color);
    font-size: 14px;
  }
  .radio-list {
    gap: 10px;
  }
`;
export default InputWrapper;
