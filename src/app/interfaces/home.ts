import { Category } from './category';

export type FeaturesEnum = 'todo' | 'shopping' | 'calendar' | 'cleaning';

export interface Home {
  name: string;
  id: string;
  adminUsersId: string[];
  connectedUsers: homeUser[];
  features: FeaturesEnum[];
  shopCategorie?: Category[];
  calendarCategory?: Category[];
}

export interface homeUser {
  id: string;
  name: string;
}
