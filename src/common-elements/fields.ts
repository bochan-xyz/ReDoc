import { transparentize } from 'polished';

import styled, { extensionsHook } from '../styled-components';
import { PropertyNameCell } from './fields-layout';
import { ShelfIcon } from './shelfs';

export const ClickablePropertyNameCell = styled(PropertyNameCell)`
  cursor: pointer;

  ${ShelfIcon} {
    height: ${({ theme }) => theme.schema.arrow.size};
    width: ${({ theme }) => theme.schema.arrow.size};
    polygon {
      fill: ${({ theme }) => theme.schema.arrow.color};
    }
  }
`;

export const FieldLabel = styled.span`
  vertical-align: middle;
  font-size: ${({ theme }) => theme.typography.code.fontSize};
  line-height: 20px;
`;

export const TypePrefix = styled(FieldLabel)`
  color: ${props => transparentize(0.2, props.theme.schema.typeNameColor)};
`;

export const TypeName = styled(FieldLabel)`
  color: ${props => props.theme.schema.typeNameColor};
`;

export const TypeTitle = styled(FieldLabel)`
  color: ${props => props.theme.schema.typeTitleColor};
  word-break: break-word;
`;

export const TypeFormat = TypeName;

export const RequiredLabel = styled(FieldLabel.withComponent('div'))`
  color: ${props => props.theme.schema.requireLabelColor};
  font-size: ${props => props.theme.schema.labelsTextSize};
  font-weight: normal;
  margin-left: 20px;
  line-height: 1;
`;

export const RecursiveLabel = styled(FieldLabel)`
  color: ${({ theme }) => theme.colors.warning.main};
  font-size: 13px;
`;

export const NullableLabel = styled(FieldLabel)`
  color: #008383;
  font-size: 13px;
`;

export const PatternLabel = styled(FieldLabel)`
  color: #008383;
  &::before,
  &::after {
    font-weight: bold;
  }
`;

export const ExampleValue = styled(FieldLabel)`
  border-radius: 2px;
  ${({ theme }) => `
    color: #008383;
    padding: 0 ${theme.spacing.unit}px;
    border: 1px solid ${transparentize(0.9, theme.colors.text.primary)};
}`};
  & + & {
    margin-left: 0;
  }
  ${extensionsHook('ExampleValue')};
`;

export const ExtensionValue = styled(ExampleValue)``;

export const ConstraintItem = styled(FieldLabel)`
  ${({ theme }) => `
    color: #0084CE;
    margin: 0 ${theme.spacing.unit}px;
    padding: 0 ${theme.spacing.unit}px;
}`};
  & + & {
    margin-left: 0;
  }
  ${extensionsHook('ConstraintItem')};
`;
