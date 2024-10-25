export type MessageStatus = 'UNREAD' | 'READ' | 'ARCHIVED';

export interface Message {
  id: string;
  email: string;
  message: string;
  status: MessageStatus;
  createdAt: Date;
  updatedAt: Date;
}