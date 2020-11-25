import { darken } from 'polished';
import { Tabs as ReactTabs } from 'react-tabs';

import styled from '../styled-components';

export { Tab, TabList, TabPanel } from 'react-tabs';

export const Tabs = styled(ReactTabs)`
> div {

  > ul {
    list-style: none;
    padding-left: 10px;
    margin: 0;
    margin: 0 -5px;
    display: inline-block;

    > li {
      display: inline-block;

      background-color: ${({ theme }) => theme.codeSample.backgroundColor};
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      padding: 0px 10px 2px 10px;
      color: ${({ theme }) => darken(theme.colors.tonalOffset, theme.rightPanel.textColor)};
      margin: 0
        ${({ theme }) => `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px`};
      border: 1px solid ${({ theme }) => darken(0.05, theme.codeSample.backgroundColor)};
      border-radius: 5px;
      min-width: 60px;
      font-size: 16px;

      &:only-child {
        flex: none;
        min-width: 60px;
      }

      &.tab-success {
        color: ${props => props.theme.colors.responses.success.color};
        background-color: ${props => props.theme.colors.responses.success.backgroundColor};
      }

      &.tab-redirect {
        color: ${props => props.theme.colors.responses.redirect.color};
        background-color: ${props => props.theme.colors.responses.redirect.backgroundColor};
      }

      &.tab-info {
        color: ${props => props.theme.colors.responses.info.color};
        background-color: ${props => props.theme.colors.responses.info.backgroundColor};
      }

      &.tab-error {
        color: ${props => props.theme.colors.responses.error.color};
        background-color: ${props => props.theme.colors.responses.error.backgroundColor};
      }

      &.react-tabs__tab--selected {
        color: white;
        background-color: darkgray;

        &.tab-success {
          background-color: ${props => props.theme.colors.responses.success.color};
        }
  
        &.tab-redirect {
          background-color: ${props => props.theme.colors.responses.redirect.color};
          color: white;
        }
  
        &.tab-info {
          background-color: ${props => props.theme.colors.responses.info.color};
          color: white;
        }
  
        &.tab-error {
          background-color: ${props => props.theme.colors.responses.error.color};
          color: white;
        }
        }
    }
  }
}
  > .react-tabs__tab-panel {
    background-color: '${({ theme }) => theme.codeSample.backgroundColor}';
    border-radius: 10px;
    & > div,
    & > pre {
      padding: ${props => props.theme.spacing.unit * 4}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`;

export const JunkErrorTabs = styled(Tabs)`
  > .react-tabs__tab-panel {
    background-color: 'pink';
  }
`;

export const ResponseTabs = styled(Tabs)`
  > .react-tabs__tab-panel {
    background-color: #F4F8FB;
  }
`;

export const RequestTabs = styled(Tabs)`
  > .react-tabs__tab-panel {
    background-color: #F4F8FB;
  }
`;

export const SmallTabs = styled(Tabs)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${({ theme }) => darken(theme.colors.tonalOffset, theme.rightPanel.textColor)};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${({ theme }) => theme.rightPanel.textColor};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${props => props.theme.spacing.unit * 2}px 0;
    }
  }
`;
