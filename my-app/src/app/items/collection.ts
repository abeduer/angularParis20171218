import { Item } from '../shared/interfaces/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: '1213',
    name: 'Aurélien',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: '1232323',
    name: 'Aznive',
    reference: '5678',
    state: State.ENCOURS
  },
  {
    id: '112121',
    name: 'Toto',
    reference: '9876',
    state: State.LIVREE
  }
];
