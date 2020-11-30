// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ReactDropdown from 'react-dropdown';

import { observer } from 'mobx-react';
import * as React from 'react';
import { MediaTypeSamples } from './MediaTypeSamples';

import { MediaContentModel } from '../../services/models';
import { DropdownOrLabel } from '../DropdownOrLabel/DropdownOrLabel';
import { DropdownLabel } from '../PayloadSamples/styled.elements';
import { MediaTypesSwitch } from '../MediaTypeSwitch/MediaTypesSwitch';
import { InvertedSimpleDropdown, MimeLabel } from './styled.elements';
import styled from '../../styled-components';

export interface PayloadSamplesProps {
  content: MediaContentModel;
  displayTone: string;
}

@observer
export class PayloadSamples extends React.Component<PayloadSamplesProps> {
  render() {
    const mimeContent = this.props.content;
    if (mimeContent === undefined) {
      return null;
    }

    return (
      <MediaTypesSwitch content={mimeContent} renderDropdown={this.renderDropdown} withLabel={false} displayTone={this.props.displayTone}>
        {mediaType => (
          <MediaTypeSamples
            key="samples"
            mediaType={mediaType}
            renderDropdown={this.renderSamplesDropdown}
          />
        )}
      </MediaTypesSwitch>
    );
  }

  private renderDropdown = props => {
    if (this.props.displayTone === 'REQUEST') {
      return <RequestTabHeader><DropdownLabel>Content type: </DropdownLabel><DropdownOrLabel Label={MimeLabel} Dropdown={InvertedSimpleDropdown} {...props} /></RequestTabHeader>;
    } else {
      return <ResponseTabHeader><DropdownLabel>Content type: </DropdownLabel><DropdownOrLabel Label={MimeLabel} Dropdown={InvertedSimpleDropdown} {...props} /></ResponseTabHeader>;
    }
  };

  private renderSamplesDropdown = props => {
    if (this.props.displayTone === 'REQUEST') {
      return <RequestSamplesTabHeader><DropdownLabel>Example: </DropdownLabel><DropdownOrLabel Label={MimeLabel} Dropdown={InvertedSimpleDropdown} {...props} /></RequestSamplesTabHeader>;
    } else {
      return <ResponseSamplesTabHeader><DropdownLabel>Example: </DropdownLabel><DropdownOrLabel Label={MimeLabel} Dropdown={InvertedSimpleDropdown} {...props} /></ResponseSamplesTabHeader>;
    }
  };
}

const RequestTabHeader = styled.div`
  background-color: #CBD3D9;
  border-radius: 10px 10px 0px 0px;
  margin: -20px -20px 0px -20px;
  padding: 4px 4px 4px 4px;
  display: block;
`;

const ResponseTabHeader = styled.div`
  background-color: #CBD3D9;
  border-radius: 10px 10px 0px 0px;
  margin: -20px -20px 0px -20px;
  padding: 4px 4px 4px 4px;
  display: block;
`;

const RequestSamplesTabHeader = styled.div`
  background-color: #CBD3D9;
  margin: 0px -20px 0px -20px;
  padding: 4px;
`;

const ResponseSamplesTabHeader = styled.div`
background-color: #CBD3D9;
margin: 0px -20px 0px -20px;
padding: 4px;
`;
