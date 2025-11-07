import { ImageBackground, StyleSheet } from 'react-native';
import { useCallback, useState } from 'react';

import { Card, PlayersObjectType, PlayerType } from '../types';
import PlayerCards from './room/PlayerCards';

import PlayerName from './room/PlayerName';
import RoomFooter from './room/RoomFooter';
import { CardName, initialPlayersState } from '../cards';
import SendMshariaButtons from '../../module/components/SendMshariaButtons';
import { MshariaPowerType, PlayersIDs } from '../types';
import Display from '../constants/Display';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import backgroundsImages from '../constants/backgroundsImages';
import { isMshroaFull } from '../../module/utils';

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
  const [playingTurnNum, setPlayingTurnNum] = useState(0);
  const [players, setPlayers] = useState<PlayersObjectType>(
    initialPlayersState()
  );
  console.log(
    `🚀 ~ Room ~ players.fourthPlayer.manualMsharia:`,
    players.fourthPlayer.manualMsharia
  );
  console.log('________________________________________________');
  // console.log(
  //   `🚀 ~ Room ~ players.fourthPlayer.sendMsharia:`,
  //   players.fourthPlayer.sendMsharia
  // );
  // Compute room from params
  const [isMshariaOpen, setIsMshariaOpen] = useState(false);
  const [waitingTime, setWaitingTime] = useState(false);

  // !the start add to repeated items
  const [isManualMsharia, setIsManualMsharia] = useState(false);
  const [currentMshroa, setCurrentMshroa] = useState<
    { mshroaPower: MshariaPowerType; id: number } | undefined
  >(undefined);
  // ! the end of add to repeated items

  const sendMshariaHandler = useCallback(
    (key: PlayersIDs, mshroa: MshariaPowerType) => {
      setPlayers((prv) => {
        if (!prv) return prv;
        const sameMsharia = prv[key].sendMsharia.filter(
          (msh) => msh === mshroa
        ).length;
        if (sameMsharia === 2) {
          prv[key].sendMsharia = [];
          // ! add to repeated items
          if (isManualMsharia) {
            prv[key].manualMsharia = [];
            setCurrentMshroa(undefined);
          }
        } else {
          prv[key].sendMsharia =
            prv[key].sendMsharia.length >= 2
              ? [
                  ...prv[key].sendMsharia.filter(
                    (item, i) => i !== 0 && item !== 40
                  ),
                  mshroa,
                ]
              : [...prv[key].sendMsharia, mshroa];
          // ! add to repeated items
          if (isManualMsharia) {
            if (prv[key].manualMsharia.length === 0) {
              prv[key].manualMsharia = [
                {
                  id: 1,
                  MshariaPowerType: mshroa,
                  cards: [],
                },
                ...prv[key].manualMsharia,
              ];
              setCurrentMshroa({
                mshroaPower: mshroa,
                id: 1,
              });
            } else {
              prv[key].manualMsharia = [
                {
                  id: prv[key].manualMsharia.length + 1,
                  MshariaPowerType: mshroa,
                  cards: [],
                },
                ...prv[key].manualMsharia,
              ];
              setCurrentMshroa({
                mshroaPower: mshroa,
                id: prv[key].manualMsharia.length + 1,
              });
            }
          }
        }

        return { ...prv };
      });
    },
    // ! add to repeated items
    [isManualMsharia]
  );
  // ! add to repeated items

  // ! add to repeated items
  const setMshroaCardsHandler = useCallback(
    (player: PlayerType, card: CardName) => {
      if (
        !player ||
        !player.manualMsharia ||
        !isManualMsharia ||
        player.manualMsharia.length === 0
      )
        return undefined;

      setPlayers((prev) => {
        if (!prev) return prev;
        const playerMshariaIndex = prev[player.id].manualMsharia.findIndex(
          (msh) => msh.id === currentMshroa?.id
        );
        if (playerMshariaIndex === -1) return prev;
        const hasSameCard = prev[player.id].manualMsharia[
          playerMshariaIndex
        ].cards.findIndex((c) => c === card);
        // add card
        if (hasSameCard === -1) {
          prev[player.id].manualMsharia[playerMshariaIndex].cards = [
            ...prev[player.id].manualMsharia[playerMshariaIndex].cards,
            card,
          ];
        } else {
          // remove card
          prev[player.id].manualMsharia[playerMshariaIndex].cards = prev[
            player.id
          ].manualMsharia[playerMshariaIndex].cards.filter((c) => c !== card);
        }
        const index = prev[player.id].manualMsharia.findIndex(
          (msh) => msh.id === currentMshroa?.id
        );
        console.log(`🚀 ~ Room ~ index:`, index);
        if (
          isMshroaFull({
            mshroa: prev[player.id].manualMsharia[index].MshariaPowerType,
            cards: prev[player.id].manualMsharia[index].cards,
          })
        )
          setCurrentMshroa({
            mshroaPower:
              prev[player.id].manualMsharia[index === 1 ? 0 : 1]
                .MshariaPowerType,
            id: prev[player.id].manualMsharia[index === 1 ? 0 : 1].id,
          });

        return { ...prev };
      });
    },
    [players, isManualMsharia, currentMshroa]
  );

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
        <SendMshariaButtons
          waitingTime={waitingTime}
          player={players.firstPlayer}
          position="right"
          sendMshariaHandler={sendMshariaHandler}
          isMshariaOpen={isMshariaOpen}
          setIsManualMsharia={setIsManualMsharia}
          isManualMsharia={isManualMsharia}
          setPlayers={setPlayers}
          currentMshroa={currentMshroa}
          setCurrentMshroa={setCurrentMshroa}
        />
        <SendMshariaButtons
          waitingTime={waitingTime}
          player={players.secondPlayer}
          position="right"
          sendMshariaHandler={sendMshariaHandler}
          isMshariaOpen={isMshariaOpen}
          setIsManualMsharia={setIsManualMsharia}
          isManualMsharia={isManualMsharia}
          setPlayers={setPlayers}
          currentMshroa={currentMshroa}
          setCurrentMshroa={setCurrentMshroa}
        />
        <SendMshariaButtons
          waitingTime={waitingTime}
          player={players.thirdPlayer}
          position="top"
          sendMshariaHandler={sendMshariaHandler}
          isMshariaOpen={isMshariaOpen}
          setIsManualMsharia={setIsManualMsharia}
          isManualMsharia={isManualMsharia}
          setPlayers={setPlayers}
          currentMshroa={currentMshroa}
          setCurrentMshroa={setCurrentMshroa}
        />
        <SendMshariaButtons
          waitingTime={waitingTime}
          player={players.fourthPlayer}
          position="bottom"
          sendMshariaHandler={sendMshariaHandler}
          isMshariaOpen={isMshariaOpen}
          setIsManualMsharia={setIsManualMsharia}
          isManualMsharia={isManualMsharia}
          setPlayers={setPlayers}
          currentMshroa={currentMshroa}
          setCurrentMshroa={setCurrentMshroa}
        />
        <>
          <PlayerCards
            player={players.firstPlayer}
            playerTurn={playerTurn}
            playerId={players.firstPlayer.name}
            position="right"
            playCard={() => {}}
            isTest={isTest}
          />
          <PlayerCards
            player={players.secondPlayer}
            playerTurn={playerTurn}
            playerId={players.secondPlayer.name}
            position="left"
            playCard={() => {}}
            isTest={isTest}
          />
          <PlayerCards
            player={players.thirdPlayer}
            playerTurn={playerTurn}
            playerId={players.thirdPlayer.name}
            position="top"
            playCard={() => {}}
            isTest={isTest}
          />
          <PlayerCards
            player={players.fourthPlayer}
            playerTurn={playerTurn}
            playerId={players.fourthPlayer.name}
            position="bottom"
            playCard={(card) => {
              // ! the problem might be here
              setMshroaCardsHandler(
                players.fourthPlayer,
                card.name as CardName
              );
            }}
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
