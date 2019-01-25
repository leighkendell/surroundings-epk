import styled from '../helpers/styled-components';

const DownloadList = styled.ul`
  display: grid;
  grid-row-gap: ${props => props.theme.spacingSmall};
  margin: 0;
  padding: 0;
`;

export default DownloadList;
