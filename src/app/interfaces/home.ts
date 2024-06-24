export type FeaturesEnum = 'todo' | 'shopping' | 'calendar' | 'cleaning';

export interface Home {
  name: string;
  id: string;
  adminUsersId: string[];
  features: FeaturesEnum[];
}
