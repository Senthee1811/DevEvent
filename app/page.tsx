import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";

// Remove trailing slash (e.g., http://localhost:3000/)
const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL!.replace(/\/$/, "");

const Home = async () => {
  // Fetch events from backend (no cache)
  const response = await fetch(`${BaseUrl}/api/events`, { cache: "no-store" });
  const data = await response.json();

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>

      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in one place.
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="space-y-5">
          {data.events &&
            data.events.length > 0 &&
            data.events.map((event: IEvent) => (
              <li key={event._id} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
