export type FeaturesEnum = 'todo' | 'shopping' | 'calendar' | 'cleaning';

export interface Home {
  name: string;
  id: string;
  adminUsersId: string[];
  connectedUsers: homeUser[];
  features: FeaturesEnum[];
}

export interface homeUser {
  id: string;
  name: string;
}
