import EventList from "@/components/event/EventList";
import ResultsTitle from "@/components/event/ResultsTitle";
import Button from "@/components/ui/Button";
import { getFilteredEvents } from "@/data/dummy-data";
import { useRouter } from "next/router";
import ErrorAlert from "./../../components/event/ErrorAlert";
const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2000 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <div className="error">
        <ErrorAlert>
          <p>Invalid search value, please adjust your value!</p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </div>
    );
  }
  const filteredEvent = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <div className="error">
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </div>
    );
  }
  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvent} />;
    </>
  );
};

export default FilteredEventsPage;
