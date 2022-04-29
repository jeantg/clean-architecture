export const makeClassName = (
  prefix: string,
  target: string,
  object = true
): any =>
  object
    ? {
        className: `${prefix}-${target}`,
      }
    : `${prefix}-${target}`;
