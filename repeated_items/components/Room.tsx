import { ImageBackground, StyleSheet } from 'react-native';
import { useState } from 'react';

import { Card, PlayersIDs, PlayersObjectType } from '../types';
import PlayerCards from '../../repeated_items/components/room/PlayerCards';

import PlayerName from './room/PlayerName';
import RoomFooter from './room/RoomFooter';
import { CardName, initialPlayersState } from '../cards';
import Display from '../constants/Display';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import backgroundsImages from '../constants/backgroundsImages';

const styles = StyleSheet.create({
  container: {
    height: Display.setHeight(100),
    width: Display.setWidth(100),
    backgroundColor: Colors.BACKGROUND_2,
  },
});
export default function Room() {
  // State hooks first
  const [isTest, setIsTest] = useState(true);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [players, setPlayers] = useState<PlayersObjectType>(
    initialPlayersState()
  );
  const [isMshariaOpen, setIsMshariaOpen] = useState(false);
  const [waitingTime, setWaitingTime] = useState(false);

  // !the start add to repeated items

  // ! the end of add to repeated items

  function playCard(card: Card, playerId: PlayersIDs) {
    setPlayers((prv) => {
      if (!prv) return prv;
      prv[playerId].cards = prv[playerId].cards.map((item) =>
        item.name === card.name
          ? {
              ...item,
              isPlayed: { is: true, playingTurnNum: 1, isGroundCard: true },
            }
          : item
      );
      return { ...prv };
    });
  }

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      imageStyle={{
        opacity: 0.1,
        width: '100%',
      }}
      source={Images.BACKGROUND}
    >
      <ImageBackground
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
        imageStyle={[
          {
            opacity: 1,
            width: Display.setWidth(90),
            height: Display.setWidth(90),
            top: Display.setHeight(50) - Display.setWidth(45),
            left: Display.setWidth(5),
            position: 'absolute',
            borderRadius: 30,
            backgroundColor: Colors.BACKGROUND_3,
          },
        ]}
        // @ts-ignore
        source={backgroundsImages.default}
      >
        {/* <Stack.Screen options={{ headerShown: false }} /> */}
        {/* {teams.length > 0 ? (
          <RoomHeader
            teams={teams}
            name={room.name}
            player={memoHooks.player}
          />
        ) : null} */}

        <PlayerName
          playerName="firstPlayer"
          position="right"
          buyer="firstPlayer"
          playerId="firstPlayer"
          playingType="Sun"
          playerLevel="beginner"
          isTest={isTest}
          distributor={false}
        />
        <PlayerName
          playerName="secondPlayer"
          position="left"
          buyer="firstPlayer"
          playerId="secondPlayer"
          playingType="Sun"
          playerLevel="beginner"
          isTest={isTest}
          distributor={false}
        />
        <PlayerName
          playerName="thirdPlayer"
          position="top"
          buyer="firstPlayer"
          playerId="thirdPlayer"
          playingType="Sun"
          playerLevel="beginner"
          isTest={isTest}
          distributor={false}
        />
        <PlayerName
          playerName="fourthPlayer"
          position="bottom"
          buyer="firstPlayer"
          playerId="fourthPlayer"
          playingType="Sun"
          playerLevel="beginner"
          isTest={isTest}
          distributor={false}
        />
        <>
          <PlayerCards
            player={players.firstPlayer}
            playerTurn={playerTurn}
            playerId={players.firstPlayer.name}
            position="right"
            playCard={playCard}
            isTest={isTest}
          />
          <PlayerCards
            player={players.secondPlayer}
            playerTurn={playerTurn}
            playerId={players.secondPlayer.name}
            position="left"
            playCard={playCard}
            isTest={isTest}
          />
          <PlayerCards
            player={players.thirdPlayer}
            playerTurn={playerTurn}
            playerId={players.thirdPlayer.name}
            position="top"
            playCard={playCard}
            isTest={isTest}
          />
          <PlayerCards
            player={players.fourthPlayer}
            playerTurn={playerTurn}
            playerId={players.fourthPlayer.name}
            position="bottom"
            playCard={playCard}
            isTest={isTest}
          />
        </>
        <RoomFooter
          player={players.fourthPlayer}
          setIsMshariaOpen={setIsMshariaOpen}
          isMshariaOpen={isMshariaOpen}
          playerTurn={playerTurn}
          roomPlayingTye="limited"
        />
      </ImageBackground>
    </ImageBackground>
  );
}
