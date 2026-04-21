import "./Community.css";
import chaicharmsImg from "../../assets/communityimages/chaicharms.jpg";
import rutgersmarathonImg from "../../assets/communityimages/rutgersmarathon.jpg";
import matchamakingImg from "../../assets/communityimages/matchamaking.jpg";

export default function Community() {
  return (
    <div className="community-page">
      {/* For the left sidebar */}
      <aside className="sidebar">
        <h3>Community</h3>
        <ul>
          <li className="active">Overview</li>
          <li>Events</li>
          <li>Challenges</li>
          <li>Blog</li>
        </ul>

        <div className="divider" />

        <ul>
          <li>My Events</li>
          <li>My Challenges</li>
          <li>My Discussions</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <h1>Community</h1>
        <p className="subtitle">
          A place to connect, share progress, and discover events and challenges together.
        </p>

        <div className="tags">
          <span>#art</span>
          <span>#journaling</span>
          <span>#exercise</span>
          <span>#cooking</span>
          <span>#trinkets</span>
        </div>

        <h2>Trending Topics</h2>

        <div className="cards">
          <EventCard
            title="Chai & Charms"
            date="Sat, Mar 7"
            location="New Brunswick, NJ"
            price="$5–$7"
            image={chaicharmsImg}
          />
          <EventCard
            title="Rutgers Marathon"
            date="Mon, Mar 9"
            location="New Brunswick, NJ"
            price="$25"
            image={rutgersmarathonImg}
          />
          <EventCard
            title="Matcha Making Class"
            date="Fri, Mar 13"
            location="New Brunswick, NJ"
            price="$65"
            image={matchamakingImg}
          />
          <EventCard
            title="Chai & Charms"
            date="Sat, Mar 7"
            location="New Brunswick, NJ"
            price="$5–$7"
            image={chaicharmsImg}
          />
          <EventCard
            title="Rutgers Marathon"
            date="Mon, Mar 9"
            location="New Brunswick, NJ"
            price="$25"
            image={rutgersmarathonImg}
          />
          <EventCard
            title="Matcha Making Class"
            date="Fri, Mar 13"
            location="New Brunswick, NJ"
            price="$65"
            image={matchamakingImg}
          />
        </div>
      </main>

      {/* RIGHT PANEL */}
      <aside className="right-panel">
        <h3>Quick Actions</h3>
        <button>Add an Event</button>
        <button>Join a Challenge</button>
        <button>Write a Post</button>
      </aside>
    </div>
  );
}

function EventCard(props: {
  title: string;
  date: string;
  location: string;
  price: string;
  image: string;
}) {
  return (
    <div className="event-card">
      <img src={props.image} alt={props.title} className="card-image" />
      <h4>{props.title}</h4>
      <p>{props.date} · {props.location}</p>
      <p>{props.price}</p>
    </div>
  );
}
