import { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LevelNames } from '../../types';
import Colors from '../../constants/Colors';
import Display from '../../constants/Display';
import Images from '../../constants/Images';
// ! need to add waiting number
export default function PlayerName({
  playerName,
  position,
  playingType,
  buyer,
  playerId,
  playerLevel,
  isTest,
  distributor,
  spectate,
  playerImageUri,
}: {
  position: 'top' | 'right' | 'left' | 'bottom';
  playerName: string;
  playingType: string | null;
  buyer: string;
  playerId: string;
  playerLevel: LevelNames;
  isTest: boolean;
  distributor: boolean;
  spectate?: boolean;
  playerImageUri?: string;
}) {
  if (position === 'bottom' && !spectate) return;
  const containerButtonStyles = useMemo(
    () =>
      position === 'top'
        ? styles.MshariaTopButtonsContainer
        : position === 'right'
        ? styles.MshariaRightButtonsContainer
        : position === 'left'
        ? styles.MshariaLeftButtonsContainer
        : styles.MshariaBottomButtonsContainer,
    []
  );
  return (
    <View style={containerButtonStyles}>
      <View
        style={{
          zIndex: 10,
        }}
      >
        <Image
          source={Images.EAGLE}
          style={{
            borderRadius: 50,
            width: 50,
            height: 50,
            backgroundColor: Colors.DEFAULT_BLACK,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.BACKGROUND_3,
          borderRadius: 8,
          width: 80,
          marginRight: -20,
          marginLeft: position !== 'right' ? -20 : 0,
          marginTop: 5,
          height: 40,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.BACKGROUND_4,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopEndRadius: 8,
            borderTopStartRadius: 8,
            paddingLeft: position === 'left' ? 10 : 0,
            paddingRight: position === 'right' ? 10 : 0,
            boxShadow: '0px 4px 5.2px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Text
            style={{
              color: Colors.DEFAULT_WHITE,
              fontSize: Display.setHeight(1),
            }}
          >
            مبتدئ
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingLeft: position === 'left' ? 10 : 0,
            paddingRight: position === 'right' ? 10 : 0,
          }}
        >
          <Text
            style={{
              color: Colors.DEFAULT_WHITE,
              fontSize: Display.setHeight(1),
            }}
          >
            {isTest || !playerName
              ? playerId.slice(0, 16)
              : playerName.slice(0, 16)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const sharedStyles = StyleSheet.create({
  basic: {
    paddingVertical: 20,
    borderRadius: 5,
    flexDirection: 'row',
    position: 'absolute',
  },
});
const styles = StyleSheet.create({
  footerPlayerName: {
    backgroundColor: Colors.PRIMARY_600,
    borderRadius: 2,
    height: Display.setWidth(3.7),
    width: Display.setWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    gap: 5,
    zIndex: 10,
    position: 'absolute',
    bottom: '-22%',
    boxShadow: '0px 3.33px 3.33px 0px rgba(0, 0, 0, 0.25)',
  },
  MshariaBottomButtonsContainer: {
    ...sharedStyles.basic,
    bottom: Display.setHeight(20),
    left: Display.setWidth(47.5),
    zIndex: 10,
  },
  MshariaTopButtonsContainer: {
    ...sharedStyles.basic,
    zIndex: 10,
    top: Display.setHeight(20),
    left: Display.setWidth(47.5),
  },
  MshariaLeftButtonsContainer: {
    ...sharedStyles.basic,
    top: Display.setHeight(45),
    left: 0,
    zIndex: 10,
  },
  MshariaRightButtonsContainer: {
    ...sharedStyles.basic,
    flexDirection: 'row-reverse',
    top: Display.setHeight(45),
    right: 0,
    zIndex: 10,
  },
});
