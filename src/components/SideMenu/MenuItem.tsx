import { observer } from 'mobx-react';
import * as React from 'react';

import { ShelfIcon } from '../../common-elements/shelfs';
import { IMenuItem, OperationModel } from '../../services';
import { shortenHTTPVerb } from '../../utils/openapi';
import { MenuItems } from './MenuItems';
import { MenuItemLabel, MenuItemLi, MenuItemTitle, OperationBadge } from './styled.elements';
import { querySelector } from '../../utils/dom';

export interface MenuItemProps {
  item: IMenuItem;
  onActivate?: (item: IMenuItem) => void;
  withoutChildren?: boolean;
}

@observer
export class MenuItem extends React.Component<MenuItemProps> {
  ref = React.createRef<HTMLLabelElement>();

  handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter' || event.key === 'ArrowRight') {
      this.props.onActivate!(this.props.item);
      event.stopPropagation();

      // set the focus to the heading of the endpoint
      const qryString = `[data-focusid="${this.props.item.id}"]`;
      const elemForFocus = querySelector(qryString);
      (elemForFocus as any)?.focus();  // this shows as a 'does not exist' error, but it does.
    }
  };

  activate = (evt: React.MouseEvent<HTMLElement>) => {
    if (this.props.item.depth === 0) {
      evt.preventDefault();
    } else {
      this.props.onActivate!(this.props.item);
    }
    evt.stopPropagation();
  };

  componentDidMount() {
    this.scrollIntoViewIfActive();
  }

  componentDidUpdate() {
    this.scrollIntoViewIfActive();
  }

  scrollIntoViewIfActive() {
    if (this.props.item.active && this.ref.current) {
      this.ref.current.scrollIntoViewIfNeeded();
    }
  }

  render() {
    const { item, withoutChildren } = this.props;
    return (
      <MenuItemLi onClick={this.activate} depth={item.depth}
        data-item-id={item.id} tabIndex={(item.depth === 0) ? undefined : 0}
        onKeyDown={this.handleKeyDown}>
        {item.type === 'operation' ? (
          <OperationMenuItemContent {...this.props} item={item as OperationModel} />
        ) : (
            <MenuItemLabel depth={item.depth} active={item.active} type={item.type} ref={this.ref}>
              <MenuItemTitle title={item.name}>
                {item.name}
                {this.props.children}
              </MenuItemTitle>
              {(item.depth > 0 && item.items.length > 0 && (
                <ShelfIcon float={'right'} direction={item.expanded ? 'up' : 'down'} />
              )) ||
                null}
            </MenuItemLabel>
          )}
        {!withoutChildren && item.items && item.items.length > 0 && (
          <MenuItems
            expanded={item.expanded}
            items={item.items}
            onActivate={this.props.onActivate}
          />
        )}
      </MenuItemLi>
    );
  }
}

export interface OperationMenuItemContentProps {
  item: OperationModel;
}

@observer
export class OperationMenuItemContent extends React.Component<OperationMenuItemContentProps> {
  ref = React.createRef<HTMLLabelElement>();

  componentDidUpdate() {
    if (this.props.item.active && this.ref.current) {
      this.ref.current.scrollIntoViewIfNeeded();
    }
  }

  render() {
    const { item } = this.props;
    return (
      <MenuItemLabel
        depth={item.depth}
        active={item.active}
        deprecated={item.deprecated}
        ref={this.ref}
      >
        <OperationBadge type={item.httpVerb}>{shortenHTTPVerb(item.httpVerb)}</OperationBadge>
        <MenuItemTitle width="calc(100% - 38px)">
          {item.name}
          {this.props.children}
        </MenuItemTitle>
      </MenuItemLabel>
    );
  }
}
