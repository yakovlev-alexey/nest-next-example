const useFeature = (
  features: Record<string, boolean>,
  feature: string,
  defaultValue = false,
) => {
  return features[feature] || defaultValue;
};

export { useFeature };
