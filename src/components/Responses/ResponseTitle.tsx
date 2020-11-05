import * as React from 'react';

import { ShelfIcon } from '../../common-elements';
import { Markdown } from '../Markdown/Markdown';

export interface ResponseTitleProps {
  code: string;
  title: string;
  type: string;
  empty?: boolean;
  opened?: boolean;
  className?: string;
  onClick?: () => void;
  parent: any;
}

export class ResponseTitle extends React.PureComponent<ResponseTitleProps> {

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13) { // ENTER
      this.props.onClick?.call(this.props.parent);
      event.stopPropagation();
    }
  };

  render() {
    const { title, type, empty, code, opened, className, onClick } = this.props;
    return (
      <div className={className} onClick={(!empty && onClick) || undefined}
        tabIndex={empty ? undefined : 0} onKeyDown={empty ? undefined : this.handleKeyDown}
      >
        {!empty && (
          <ShelfIcon
            size={'1.5em'}
            color={type}
            direction={opened ? 'down' : 'right'}
            float={'left'}
          />
        )}
        <strong>{code} </strong>
        <Markdown compact={true} inline={true} source={title} />
      </div>
    );
  }
}
