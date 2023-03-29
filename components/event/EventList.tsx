import { EventItem } from "@/utils/models/EventItem";
import EventsItem from "./EventsItem";
import classes from "./EventList.module.css";
const EventList = ({ items }: { items: EventItem[] }) => {
  return (
    <ul className={classes.list}>
      {items.map((item, index) => (
        <EventsItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
