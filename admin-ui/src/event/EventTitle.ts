import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "address";

export const EventTitle = (record: TEvent): string => {
  return record.address || record.id;
};
