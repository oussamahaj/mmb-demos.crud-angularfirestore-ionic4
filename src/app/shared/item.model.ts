import { Timestamp } from '@firebase/firestore-types';

export enum ItemField {
  CREATED_AT = 'createdAt',
  PUBLISHED_AT = 'publishedAt',
  TAGS = 'tags'
}
export interface Tag {
  id?: string;
  name: string;
}
export class Item {
  id?: string;
  title: string;
  description: string;
  createdAt: Timestamp;
  modifiedAt: Timestamp;
  publishedAt: Timestamp;
  tags: Tag[];
  link: string;
  enclosure: string;
  author: string;
}
