import styled from '../helpers/styled-components';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacingSmall};
`;

export default NavWrapper;
