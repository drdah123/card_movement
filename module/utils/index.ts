import { CardName } from '../../repeated_items/cards';
import { MshariaPowerType } from '../../repeated_items/types';

const ChooseColors = {
  1: 'rgba(37, 211, 147, 0.2)',
  2: 'rgba(162, 127, 0, 0.2)',
};

export function isMshroaFull({
  mshroa,
  cards,
}: {
  mshroa: MshariaPowerType;
  cards: CardName[];
}) {
  if (mshroa === 4 && cards.length >= 3) return true;
  if (mshroa === 10 && cards.length >= 4) return true;
  if (mshroa === 40 && cards.length >= 4) return true;
  if (mshroa === 20 && cards.length >= 5) return true;
  return false;
}
export default ChooseColors;
