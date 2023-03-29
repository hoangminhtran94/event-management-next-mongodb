import EventList from "@/components/event/EventList";
import { EventItem } from "@/utils/models/EventItem";
import { getFeaturedEvents } from "./../data/dummy-data";

export default function Home({
  featuredEvents,
}: {
  featuredEvents: EventItem[];
}) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = getFeaturedEvents();
  if (featuredEvents.length === 0) {
    return { notFound: true };
  }

  return { props: { featuredEvents }, revalidate: 10 };
};
