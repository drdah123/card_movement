import {
  Animated,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { PlayersObjectType, PlayerType, Card } from '../types';
import {
  distanceAmongCards,
  playCardAnimation,
  playedCardBottomAnimation,
  rotateCards,
  translateY,
} from '../../module/functions/cardsAnimation';
import { CardsPlacesType } from './room/PlayerCards';
import Display from '../constants/Display';

export default function CardC({
  playCard,
  i,
  item,
  player,
  position,
  cardsLength,
  cardsPlaces,
  setCardPlaces,
  spectate,
}: {
  cardsPlaces: CardsPlacesType;
  position: 'top' | 'right' | 'left' | 'bottom';
  cardsLength: number;
  playerTurn: number;
  playCard: (f: Card, s: keyof PlayersObjectType) => void;
  isTest: boolean;
  i: number;
  item: Card;
  player: PlayerType;
  setCardPlaces: React.Dispatch<React.SetStateAction<CardsPlacesType>>;
  spectate?: boolean;
}) {
  const width = useRef(new Animated.Value(1)).current;
  const height = useRef(new Animated.Value(1)).current;
  const TranslateX = useRef(
    new Animated.Value(
      distanceAmongCards({ cardsLength, i, position, spectate })
    )
  ).current;
  const TranslateY = useRef(new Animated.Value(0)).current;
  const rotate = useRef(
    new Animated.Value(rotateCards({ i, position, cardsLength, spectate }))
  ).current;
  // ! add card to repeated items
  const cardChooseColor = player.manualMsharia.find((msh) =>
    msh.cards.includes(item.name)
  );
  const style: ViewStyle = {
    width:
      position === 'bottom' && !spectate
        ? Display.setWidth(33)
        : Display.setWidth(12),
    height:
      position === 'bottom' && !spectate
        ? Display.setHeight(20)
        : Display.setHeight(7),
    left:
      position === 'bottom'
        ? !spectate
          ? 0
          : Display.setWidth(45)
        : position === 'right'
        ? Display.setWidth(35)
        : position === 'top'
        ? Display.setWidth(40)
        : Display.setWidth(33),
    transform: [
      {
        translateY: TranslateY,
      },
      {
        rotate: rotate.interpolate({
          inputRange: [0, 600],
          outputRange: ['0deg', '600deg'],
        }),
      },
      {
        translateX: TranslateX,
      },
      {
        scaleX: width,
      },
      {
        scaleY: height,
      },
    ],
  };
  function otherCards() {
    Animated.timing(TranslateY, {
      toValue: translateY({ i, cardsLength, position, spectate }),
      useNativeDriver: true,
      duration: 500,
    }).start();
    Animated.timing(TranslateX, {
      toValue: distanceAmongCards({ i, position, cardsLength, spectate }),
      useNativeDriver: true,
      duration: 500,
    }).start();
    Animated.timing(rotate, {
      toValue: rotateCards({ i, position, cardsLength, spectate }),
      useNativeDriver: true,
      duration: 500,
    }).start();
  }
  useEffect(() => {
    if (!item.isPlayed.is) otherCards();
  }, [cardsPlaces]);
  useEffect(() => {
    if (item.isPlayed.is && item.isPlayed.isGroundCard) {
      playedCardBottomAnimation({
        playCardAnimation: () =>
          playCardAnimation({
            cardsLength,
            i,
            position,
            TranslateY,
            width,
            height,
            TranslateX,
            rotate,
            // @ts-ignore
            isGroundCard: item.isPlayed.isGroundCard,
          }),
        player,
        setCardPlaces,
      });
    }
  }, [item.isPlayed.is && item.isPlayed.isGroundCard]);
  return (
    <Animated.View
      key={item.name + 'card'}
      style={[
        style,
        {
          position: 'absolute',
          zIndex:
            item.isPlayed.is && item.isPlayed.isGroundCard
              ? player.playOrder + 10
              : 0,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => playCard(item, player.name as keyof PlayersObjectType)}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
        }}
      >
        <ImageBackground
          source={item.image}
          style={[
            position === 'bottom'
              ? imageBasicStyle.sizeB
              : imageBasicStyle.size,
          ]}
        >
          <View style={{}} />
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
}

const imageBasicStyle = StyleSheet.create({
  size: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  sizeB: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    borderWidth: 0.2,
    borderColor: 'gray',
    boxShadow: '-5.9px 4.7px 11.8px 0px rgba(0, 0, 0, 0.25)',
  },
});
const cardStyles = StyleSheet.create({
  cardChooseColor: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
});
