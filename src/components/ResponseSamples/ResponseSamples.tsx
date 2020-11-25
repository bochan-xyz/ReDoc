import { observer } from 'mobx-react';
import * as React from 'react';

import { OperationModel } from '../../services/models';

import { Tab, TabList, TabPanel, ResponseTabs } from '../../common-elements';
import { PayloadSamples } from '../PayloadSamples/PayloadSamples';
import styled from '../../styled-components';

export interface ResponseSamplesProps {
  operation: OperationModel;
}

@observer
export class ResponseSamples extends React.Component<ResponseSamplesProps> {
  operation: OperationModel;

  render() {
    const { operation } = this.props;
    const responses = operation.responses.filter(response => {
      return response.content && response.content.hasSample;
    });

    return (
      (responses.length > 0 && (
        <ResponseSpacer>

          <ResponseTabs defaultIndex={0}>

            <ResponseTop>&nbsp;&nbsp;Response samples
            <TabList>
                {responses.map(response => (
                  <Tab className={'tab-' + response.type} key={response.code} tabIndex={'0'}>
                    {response.code}
                  </Tab>
                ))}
              </TabList>
            </ResponseTop>
            {responses.map(response => (
              <TabPanel key={response.code}>
                <ResponseArea>
                  <PayloadSamples content={response.content!} displayTone='RESPONSE' />
                </ResponseArea>
              </TabPanel>
            ))}
          </ResponseTabs>
        </ResponseSpacer>
      )) ||
      null
    );
  }
}

const ResponseArea = styled.div`
  color: black;
`;

const ResponseTop = styled.div`
  display: block;
`;

const ResponseSpacer = styled.div`
  padding-top: 20px;
`;
