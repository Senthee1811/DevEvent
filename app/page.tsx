import ExploreBtn from "@/components/ExploreBtn";


export default function Home() {
  return (
    <section>
     <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
     <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in one place.</p>

     <ExploreBtn />

     <div className="mt-20 space-y-7">
      <h3>Featured Events</h3>

      <ul>
        {[1,2,3,4,5].map((event) => (
          <li key={event}>Event {event}</li>

        ))}
      </ul>


     </div>
    </section>
  );
}
