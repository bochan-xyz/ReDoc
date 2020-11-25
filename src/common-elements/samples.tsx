import styled from '../styled-components';
import { PrismDiv } from './PrismDiv';

export const SampleControls = styled.div`
  font-size: 10px;
  text-align: right;
  color: blue;
  background-color: #E8EEF2;
  border: 1px solid #CBD3D9;
  margin: 0px -20px 0px -20px;

  > span {
    display: inline-block;
    padding: 2px 10px;
    cursor: pointer;

    :hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const SampleControlsWrap = styled.div`
  &:hover ${SampleControls} {
    opacity: 1;
  }
`;

export const StyledPre = styled(PrismDiv.withComponent('pre'))`
  font-family: ${props => props.theme.typography.code.fontFamily};
  font-size: ${props => props.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${({ theme }) => (theme.typography.code.wrap ? 'pre-wrap' : 'pre')};
`;
