import styled from '../helpers/styled-components';

interface Props {
  variation: 'primary' | 'secondary' | 'dark' | 'light';
  angled?: boolean;
}

const Section = styled.section<Props>`
  position: relative;
  background-color: ${props => props.theme.section[props.variation]};
  color: ${props =>
    props.variation === 'dark' || props.variation === 'primary' ? props.theme.colorWhite : 'currentColor'};

  ${props =>
    props.angled &&
    `
    background-color: transparent;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${props.theme.section[props.variation]};
      clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0% 100%);
      z-index: -1;
    }
  `}
`;

Section.defaultProps = {
  variation: 'light',
};

export default Section;
