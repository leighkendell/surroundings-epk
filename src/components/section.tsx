import styled from '../helpers/styled-components';

interface Props {
  variation: 'primary' | 'secondary' | 'dark' | 'light';
}

const Section = styled.section<Props>`
  background-color: ${props => props.theme.section[props.variation]};
  color: ${props =>
    props.variation === 'dark' || props.variation === 'primary' ? props.theme.colorWhite : 'currentColor'};
`;

Section.defaultProps = {
  variation: 'light',
};

export default Section;
