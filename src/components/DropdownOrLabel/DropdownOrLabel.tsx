import * as React from 'react';

import { DropdownProps, MimeLabel, SimpleDropdown } from '../../common-elements/dropdown';

export interface DropdownOrLabelProps extends DropdownProps {
  Label?: React.ComponentClass;
  Dropdown?: React.ComponentClass;
}

export function DropdownOrLabel(props: DropdownOrLabelProps): JSX.Element {
  const { Dropdown = SimpleDropdown } = props;
  if (props.options.length === 1) {
    return <MimeLabel>{props.options[0].label}</MimeLabel>;
  }
  return <Dropdown {...props} />;
}
