import {StyleSheet, Platform} from 'react-native';
import useUnits from 'rxn-units';

const useStyles = () => {
  const {vmin} = useUnits();

  return StyleSheet.create({
    Overlay_Root: {
      ...Platform.select({
        web: {userSelect: 'none'}
      }),
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: vmin(1),
      padding: 0
    },
    Overlay_Text: {
      color: 'white',
      fontSize: vmin(1.75),
      fontWeight: '600',
      textShadowColor: 'black',
      textShadowOffset: {width: vmin(0.25), height: vmin(0.2)},
      textShadowRadius: vmin(0.01)
    }
  });
};

export default useStyles;
