import {Users} from "./Users";

export interface MessageListItemResponse {
  messageId: number;
  messageTitle: string;
  messageDescription: string;
  receivers: Users[];
}
