const filterUnserializable = (
  obj: Record<string, unknown>,
  filteredValues: unknown[] = [undefined],
): Record<string, unknown> => {
  return Object.keys(obj).reduce<Record<string, unknown>>((ret, key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      return {
        ...ret,
        [key]: filterUnserializable(obj[key] as Record<string, unknown>),
      };
    } else if (!filteredValues.includes(obj[key])) {
      return { ...ret, [key]: obj[key] };
    }

    return ret;
  }, {});
};

export { filterUnserializable };
