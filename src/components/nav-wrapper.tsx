import styled from '../helpers/styled-components';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: calc(1280px + (${props => props.theme.spacingSmall} * 2));
  margin: 0 auto;
  padding: ${props => props.theme.spacingSmall};
`;

export default NavWrapper;
