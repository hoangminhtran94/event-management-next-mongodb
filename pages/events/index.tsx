import { getAllEvents } from "@/data/dummy-data";
import EventList from "@/components/event/EventList";
import EventSearch from "@/components/event/EventSearch";
import { useRouter } from "next/router";
const AllEvents = () => {
  const router = useRouter();
  const searchEventHandler = (selectdYear: string, selectedMonth: string) => {
    const fullPath = `/events/${selectdYear}/${selectedMonth}`;
    router.push(fullPath);
  };
  const events = getAllEvents();
  return (
    <>
      <EventSearch onSearch={searchEventHandler} />
      <EventList items={events} />
    </>
  );
};
export default AllEvents;

export const getStaticProps = async () => {

}