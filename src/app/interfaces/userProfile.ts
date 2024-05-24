export interface UserProfile {
  id?: string;
  name: string;
  mail: string;
  homes?: Array<string>;
  mainHome?: string;
}
