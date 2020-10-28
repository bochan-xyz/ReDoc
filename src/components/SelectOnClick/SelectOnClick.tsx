import * as React from 'react';

import { ClipboardService } from '../../services';

export interface SelectOnClickProps {
  parentForToggle?: any;
}

export class SelectOnClick extends React.PureComponent<SelectOnClickProps> {
  private child: HTMLDivElement | null;

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {

    // ENTER is the same as click on it
    if (event.keyCode === 13) { // ENTER
      this.handleClick();
      event.stopPropagation();
    }

    // tab out closes the dropdown that this is in
    if (event.keyCode == 9 && !event.shiftKey) {
      const { parentForToggle } = this.props;
      if (parentForToggle != undefined) {
        parentForToggle.toggle();
      }
    }
  };

  handleClick = () => {
    ClipboardService.selectElement(this.child);
  };

  render() {
    const { children } = this.props;
    return (
      <div ref={el => (this.child = el)} onClick={this.handleClick}
        tabIndex={0} onKeyDown={this.handleKeyDown}>
        {children}
      </div>
    );
  }
}
