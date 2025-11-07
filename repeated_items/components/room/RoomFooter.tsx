import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Colors from '../../constants/Colors';
import Display from '../../constants/Display';
import { svgs } from '../../Svg/svg';
import { PlayerType } from '../../types';
import Images from '../../constants/Images';

// ! start from here
// ! need to fix مشاريع button and others
export default function RoomFooter({
  player,
  playerTurn,
  roomPlayingTye,
  spectate,
  setIsMshariaOpen,
  isMshariaOpen,
}: // playingTurnNum,
{
  player: PlayerType;
  playerTurn: number;
  roomPlayingTye: string;
  spectate?: boolean;
  setIsMshariaOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMshariaOpen: boolean;
  // playingTurnNum: number;
}) {
  const user = {};

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
            gap: 10,
          }}
        >
          {!spectate ? (
            <>
              {/* header */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                }}
              >
                <View
                  style={{
                    flex: 1.3,
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View style={styles.leftItem}>
                    <Text
                      style={{
                        color: Colors.BACKGROUND_2,
                        fontSize: 10,
                      }}
                    >
                      صن
                    </Text>
                  </View>
                  {/*//! need to edit */}
                  {/* {player  ? <View style={styles.headerItem}>
                <Text style={styles.headerItemText}>سرا</Text>
              </View>: null} */}
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity style={styles.headerItem}>
                    <SvgXml
                      xml={svgs.gift}
                      color={Colors.SECONDARY_50}
                      stroke="#5493EF"
                      width="20"
                      height="20"
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: Colors.PRIMARY_100,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        width: Display.setWidth(18),
                        height: Display.setHeight(3.2),
                        borderRadius: 7,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: 'rgba(192, 192, 192, 1)',
                          borderRadius: 4,
                          paddingHorizontal: 4,
                          paddingVertical: 2,
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          boxShadow: '0px 3.3px 3.3px 0px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <Text
                          style={{
                            color: Colors.BACKGROUND_5,
                            fontSize: 10,
                            letterSpacing: 0.21,
                          }}
                        >
                          beginner
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text
                          style={{ color: Colors.BACKGROUND_2, fontSize: 10 }}
                        >
                          fourthPlayer
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* footer */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  paddingHorizontal: 5,
                }}
              >
                <TouchableOpacity
                  style={
                    playerTurn !== player.playOrder
                      ? styles.icon
                      : { ...styles.icon, backgroundColor: Colors.BACKGROUND_5 }
                  }
                  onPress={() => {}}
                >
                  <Text style={styles.text}>سوا</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => setIsMshariaOpen(!isMshariaOpen)}
                >
                  <Text
                    style={
                      isMshariaOpen
                        ? { ...styles.text, color: Colors.PRIMARY_500 }
                        : styles.text
                    }
                  >
                    المشاريع
                  </Text>
                </TouchableOpacity>
                {roomPlayingTye && roomPlayingTye === 'free' ? (
                  <TouchableOpacity onPress={() => {}} style={styles.icon}>
                    <Text style={styles.text}>قيدها</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </>
          ) : (
            <LinearGradient
              style={{
                borderRadius: 7,
              }}
              colors={['#5493EF', '#83A0FF']}
            >
              <TouchableOpacity style={styles.spectateItem}>
                <Text
                  style={{
                    color: Colors.SECONDARY_50,
                  }}
                >
                  اهداء
                </Text>
                <SvgXml
                  xml={svgs.gift}
                  stroke={Colors.SECONDARY_50}
                  width="20"
                  height="20"
                />
              </TouchableOpacity>
            </LinearGradient>
          )}
        </View>
        <View style={styles.chatIcon}>
          <Image
            source={Images.CHAT_ICON}
            style={{
              width: '100%',
              height: '100%',
              marginLeft: Display.setWidth(1.5),
              tintColor: Colors.BACKGROUND_3,
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  leftItem: {
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 7,
    width: Display.setWidth(14),
    height: Display.setHeight(3.2),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    gap: 5,
  },
  container: {
    backgroundColor: 'rgba(38, 43, 51, 0.4)',
    zIndex: 100,
    width: Display.setWidth(100),
    paddingVertical: 17.5,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Display.setWidth(2.5),
  },
  headerItem: {
    backgroundColor: Colors.SECONDARY_50,
    borderRadius: 7,
    width: Display.setWidth(14),
    height: Display.setHeight(3.2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  spectateItem: {
    borderRadius: 7,
    width: Display.setWidth(25),
    height: Display.setWidth(9),
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerItemText: {
    color: Colors.SECONDARY_600,
    fontSize: 10,
  },
  text: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 12,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flex: 1,
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 8,
    boxShadow: '4px 4px 11.6px 0px rgba(253, 245, 233, 0.1)',
  },
  chatIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    width: 75,
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 50,
    boxShadow: '4.87px 4.87px 14.13px 0px rgba(253, 245, 233, 0.1)',
  },
});
