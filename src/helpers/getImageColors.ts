import ImageColors from 'react-native-image-colors';

const getImageColors = async (uri: string, config?: any) => {
  const colors = await ImageColors.getColors(uri, config);
  const platformColors = [];

  if (colors.platform === 'ios') {
    platformColors.push(colors.primary);
    platformColors.push(colors.secondary);
  };
  if (colors.platform === 'android') {
    platformColors.push(colors.dominant);
    platformColors.push(colors.average);
  };

  return platformColors;
};

export default getImageColors;
