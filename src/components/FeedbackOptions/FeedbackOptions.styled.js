import styled from '@emotion/styled';

export const BoxBtn = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  text-transform: capitalize;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: rgb(211 211 211);
    color: white;
  }
`;
