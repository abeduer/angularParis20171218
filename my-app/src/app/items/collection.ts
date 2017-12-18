import { Item } from '../shared/interfaces/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    name: 'Aurélien',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    name: 'Aznive',
    reference: '5678',
    state: State.ENCOURS
  },
  {
    name: 'Toto',
    reference: '9876',
    state: State.LIVREE
  }
];
