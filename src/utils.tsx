export const getNativeProps = (props, excluded: string[]) => {
  const nativeProps = {};

  for (let key in props) {
    if (!excluded.includes(key)) {
      nativeProps[key] = props[key];
    }
  }

  return nativeProps;
}