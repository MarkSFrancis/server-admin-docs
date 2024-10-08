export const errToString = (err: unknown): string => {
  if (typeof err === 'string') return err;
  if (err === null || err === undefined) return 'Error';
  if (typeof err === 'object') {
    if ('message' in err) return (err as Error).message;

    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    const errString = err.toString();

    return errString;
  } else {
    // Is non-object primitive type (e.g. boolean or number)

    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return err.toString();
  }
};
