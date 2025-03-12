import { ReactElement } from 'react';

export const getChildId = (children: ReactElement) => {
  const props = children.props as { id?: string };
  if ('id' in props) {
    return props.id;
  }
};
