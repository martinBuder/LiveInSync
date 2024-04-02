export type FeaturesEnum = '' | 'todo' | 'shooping' | 'calendar' | 'cleaning';

export interface Home {
  name: string;
  id: string;
  adminUserId: string;
  inclFeatures: FeaturesEnum[];
}
