import { StyleSheet } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { PlayersObjectType, PlayerType } from '../../types';
import { Card } from '../../types';
import CardC from '../Card';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Display from '../../constants/Display';

export type RefType = {
  [key: string]: React.MutableRefObject<{
    playCardAnimation: () => void;
    otherCards: () => void;
  } | null>;
};

export type CardsPlacesType = {
  [key: string]: number;
};
export default function PlayerCards({
  player,
  position,
  playerTurn,
  playCard,
  isTest,
  playerId,
  spectate,
}: {
  player: PlayerType;
  playerTurn: number;
  playCard: (card: Card, key: keyof PlayersObjectType) => void;
  isTest: boolean;
  position: 'top' | 'right' | 'left' | 'bottom';
  playerId: string;
  spectate?: boolean;
}) {
  const containerButtonStyles = useMemo(
    () =>
      position === 'top'
        ? styles.imageTopContainer
        : position === 'right'
        ? styles.imageRightContainer
        : position === 'left'
        ? styles.imageLeftContainer
        : styles.imageBottomContainer,
    []
  );
  const translateY = useSharedValue(Display.setHeight(27.5));
  const translateX = useSharedValue(
    position === 'left' || position === 'right' ? -Display.setWidth(25) : 0
  );
  const isThePlayer = useMemo(() => player.name === playerId, []);
  function initialCardsPlaces() {
    let obj: CardsPlacesType = {};
    let cards = [...player.cards];
    cards = cards.filter((card) => !card.isPlayed.is);

    cards.forEach((item, i) => {
      obj[item.name] = i;
    });
    return obj;
  }
  const [cardsPlaces, setCardPlaces] = useState(initialCardsPlaces());
  useEffect(() => {
    setCardPlaces({ ...initialCardsPlaces() });
  }, [player.cards]);
  const cards = useMemo(
    () =>
      player.cards.filter(
        (card) => !card.isPlayed.is || card.isPlayed.isGroundCard
      ),
    [player.cards]
  );
  const cardsWithoutGround = useMemo(
    () => player.cards.filter((card) => !card.isPlayed.is),
    [player.cards]
  );

  const style = useAnimatedStyle(() => {
    return {
      [position === 'left' ? 'left' : 'right']: withTiming(translateX.value, {
        duration: 500,
        easing: Easing.linear,
      }),
      top:
        position == 'top'
          ? withTiming(translateY.value, {
              duration: 500,
              easing: Easing.linear,
            })
          : undefined,
      transform: [
        {
          rotate:
            position === 'top'
              ? '180deg'
              : position === 'left'
              ? '90deg'
              : position === 'right'
              ? '-90deg'
              : '0deg',
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        style,
        containerButtonStyles,
        isTest || (position === 'bottom' && !spectate)
          ? { zIndex: 10 }
          : undefined,
      ]}
    >
      {/* // !need to fix index */}
      {cards.map((item, i) => (
        <CardC
          i={cardsPlaces[item.name]}
          item={item}
          player={player}
          playerTurn={playerTurn}
          playCard={playCard}
          isTest={isTest}
          key={item.name}
          cardsLength={cardsWithoutGround.length}
          position={position}
          cardsPlaces={cardsPlaces}
          setCardPlaces={setCardPlaces}
          spectate={spectate}
        />
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageBottomContainer: {
    right: 0,
    bottom: Display.setHeight(30),
    left: 0,
    position: 'absolute',
  },
  imageLeftContainer: {
    left: -Display.setWidth(25),
    top: Display.setHeight(49),
    width: Display.setWidth(80),
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    transform: [{ rotate: '90deg' }],
    alignItems: 'center',
  },
  imageRightContainer: {
    right: -Display.setWidth(25),
    width: Display.setWidth(80),
    top: Display.setHeight(51),
    transform: [{ rotate: '-90deg' }],
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTopContainer: {
    right: 0,
    top: Display.setHeight(27.5),
    transform: [{ rotate: '180deg' }],
    left: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
