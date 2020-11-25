import * as React from 'react';
import { ShelfIcon } from '../../common-elements';
import { OperationModel } from '../../services';
import { Markdown } from '../Markdown/Markdown';
import { OptionsContext } from '../OptionsProvider';
import { SelectOnClick } from '../SelectOnClick/SelectOnClick';

import { expandDefaultServerVariables, getBasePath } from '../../utils';
import {
  EndpointInfo,
  HttpVerb,
  OperationEndpointWrap,
  ServerItem,
  ServerRelativeURL,
  ServersOverlay,
  ServerUrl,
} from './styled.elements';

export interface EndpointProps {
  operation: OperationModel;

  hideHostname?: boolean;
  inverted?: boolean;
}

export interface EndpointState {
  expanded: boolean;
}

export class Endpoint extends React.Component<EndpointProps, EndpointState> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // open/close the dropdown
    if (event.keyCode === 13) { // ENTER
      this.toggle();
      event.stopPropagation();
    }

    // hide dropdown
    if (event.keyCode == 9 && event.shiftKey) { // shift-TAB
      if (this.state.expanded) {
        this.toggle();
      }
    }
  };

  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { operation, inverted, hideHostname } = this.props;
    const { expanded } = this.state;

    // TODO: highlight server variables, e.g. https://{user}.test.com
    return (
      <OptionsContext.Consumer>
        {options => (
          <OperationEndpointWrap>
            <EndpointInfo onClick={this.toggle} expanded={expanded} inverted={inverted}
              tabIndex={0} onKeyDown={this.handleKeyDown}>
              <HttpVerb type={operation.httpVerb}> {operation.httpVerb}</HttpVerb>{' '}
              <ServerRelativeURL>{operation.path}</ServerRelativeURL>
              <ShelfIcon
                float={'right'}
                color={inverted ? 'black' : '#0084CE'}
                size={'20px'}
                direction={expanded ? 'up' : 'down'}
                style={{ marginRight: '-25px' }}
              />
            </EndpointInfo>
            <ServersOverlay expanded={expanded}>
              {operation.servers.map((server, idx, theArray) => {
                const normalizedUrl = options.expandDefaultServerVariables
                  ? expandDefaultServerVariables(server.url, server.variables)
                  : server.url;
                return (
                  <ServerItem key={normalizedUrl}>
                    <Markdown source={server.description || ''} compact={true} />
                    <SelectOnClick parentForToggle={idx == (theArray.length - 1) ? this : undefined}>
                      <ServerUrl>
                        <span>
                          {hideHostname || options.hideHostname
                            ? getBasePath(normalizedUrl)
                            : normalizedUrl}
                        </span>
                        {operation.path}
                      </ServerUrl>
                    </SelectOnClick>
                  </ServerItem>
                );
              })}
            </ServersOverlay>
          </OperationEndpointWrap>
        )}
      </OptionsContext.Consumer>
    );
  }
}
