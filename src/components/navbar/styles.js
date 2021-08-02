import styled from 'styled-components'

export const Container = styled.nav`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 21px;
  }
`;

export const Dropdown = styled.div`
  .dropdown-option {
    padding: 20px 25px;
    outline: 0;
    color: #fff;
    font-size: 18px;
    transition: 0.25s;

    &:hover,
    &:focus {
      opacity: 0.55;
    }
  }
`;
