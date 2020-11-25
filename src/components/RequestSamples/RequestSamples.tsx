import { observer } from 'mobx-react';
import * as React from 'react';
import { isPayloadSample, OperationModel, RedocNormalizedOptions } from '../../services';
import { PayloadSamples } from '../PayloadSamples/PayloadSamples';
import { SourceCodeWithCopy } from '../SourceCode/SourceCode';

import { Tab, TabList, TabPanel, RequestTabs } from '../../common-elements';
import { OptionsContext } from '../OptionsProvider';
import styled from '../../styled-components';

export interface RequestSamplesProps {
  operation: OperationModel;
}

@observer
export class RequestSamples extends React.Component<RequestSamplesProps> {
  static contextType = OptionsContext;
  context: RedocNormalizedOptions;
  operation: OperationModel;

  render() {
    const { operation } = this.props;
    const samples = operation.codeSamples;

    const hasSamples = samples.length > 0;
    const hideTabList = samples.length === 1 ? this.context.hideSingleRequestSampleTab : false;
    return (
      (hasSamples && (
        <ResponseSpacer>

          <RequestTabs defaultIndex={0}>
            <RequestTop>&nbsp;&nbsp;Request samples
            <TabList hidden={hideTabList}>
                {samples.map(sample => (
                  <Tab key={sample.lang + '_' + (sample.label || '')} tabIndex={'0'} >
                    {sample.label !== undefined ? sample.label : sample.lang}
                  </Tab>
                ))}
              </TabList>
            </RequestTop>
            {samples.map(sample => (
              <TabPanel key={sample.lang + '_' + (sample.label || '')} >
                {isPayloadSample(sample) ? (
                  <RequestArea>
                    <PayloadSamples content={sample.requestBodyContent} displayTone='REQUEST' />
                  </RequestArea>
                ) : (
                    <SourceCodeWithCopy lang={sample.lang} source={sample.source} />
                  )}
              </TabPanel>
            ))}
          </RequestTabs>
        </ResponseSpacer>
      )) ||
      null
    );
  }
}

const RequestArea = styled.div`
  color: black;
`;

const RequestTop = styled.div`
  display: block;
`;

const ResponseSpacer = styled.div`
  padding-top: 20px;
`;
