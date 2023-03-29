import EventContent from "@/components/event/EventContent";
import EventLogistics from "@/components/event/EventLogistics";
import { getEventById } from "@/data/dummy-data";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import EventSummary from "./../../components/event/EventSummary";
import { EventItem } from "@/utils/models/EventItem";

const EventDetails = ({ event }: { event: EventItem }) => {
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetails;

export const getServerSideProps: GetServerSideProps<{
  event: EventItem;
}> = async (context) => {
  const { params } = context;
  const eventId = params!.eventId;
  const event = getEventById(eventId as string);
  if (!event) {
    return { notFound: true };
  }
  return { props: { event: event } };
};
