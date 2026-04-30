import React, { useState } from 'react';
import styles from './Community.module.css';

const trendingEvents = [
  { id: 1, title: "Chai & Charms", date: "Sat, Mar 7", location: "New Brunswick, NJ", price: "$50-$75", desc: "A cozy crafting meetup with tea, trinkets, and good company.", img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Rutgers Marathon", date: "Mon, Mar 9", location: "New Brunswick, NJ", price: "$25", desc: "Join thousands of runners for the annual community marathon.", img: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Matcha Making Class", date: "Fri, Mar 13", location: "New Brunswick, NJ", price: "$65", desc: "Learn the art of ceremonial matcha preparation from scratch.", img: "https://images.unsplash.com/photo-1548349950-4a1f00c00c31?auto=format&fit=crop&w=600&q=80" },
];

const onlineEvents = [
  { id: 4, title: "Sewing 101", date: "Thu, Mar 5", price: "Free", desc: "Beginner-friendly workshop with required registration.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "Photoshop Color Grading", date: "Thu, Mar 5", price: "Free", desc: "Learn the basics of color grading step by step.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Figma Components", date: "Thu, Mar 5", price: "$15", desc: "Hands-on walkthrough of reusable Figma components.", img: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?auto=format&fit=crop&w=600&q=80" },
];

const TAGS = ['#art', '#journaling', '#exercise', '#cooking', '#trinkets'];

function Community() {
  const [activeNav, setActiveNav] = useState('Overview');
  const [search, setSearch] = useState('');

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>
          <span>👥</span>
          <span>Community</span>
        </div>
        <ul className={styles.sidebarNav}>
          {['Overview', 'Events', 'Challenges', 'Blog'].map(item => (
            <li
              key={item}
              className={activeNav === item ? styles.active : ''}
              onClick={() => setActiveNav(item)}
            >
              <span className={styles.navIcon}>
                {item === 'Overview' ? '🏠' : item === 'Events' ? '📅' : item === 'Challenges' ? '📈' : '📋'}
              </span>
              {item}
            </li>
          ))}
        </ul>
        <hr className={styles.divider} />
        <ul className={styles.sidebarNav}>
          {['My Events', 'My Challenges', 'My Discussions'].map(item => (
            <li key={item}>
              <span className={styles.navIcon}>
                {item === 'My Events' ? '📌' : item === 'My Challenges' ? '⭐' : '💬'}
              </span>
              {item}
            </li>
          ))}
        </ul>
        <hr className={styles.divider} />
        <button className={styles.createBtn}>+ Create Post</button>
      </aside>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Community</h1>
          <p>A place to connect, share progress, and discover events and challenges together.</p>
        </div>

        <div className={styles.summaryRow}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryHead}>
              <h3>Upcoming Events</h3>
              <a href="#" className={styles.viewAll}>View All</a>
            </div>
            {[
              { title: "Coffee & Crocheting", date: "Thu, Mar 5", location: "New Brunswick, NJ", pill: "Crocheting", pillClass: styles.pillCrocheting },
              { title: "Pottery Painting Class", date: "Fri, Mar 6", location: "Princeton, NJ", pill: "Pottery", pillClass: styles.pillPottery }
            ].map(item => (
              <div key={item.title} className={styles.summaryItem}>
                <div className={styles.summaryThumb} />
                <div className={styles.summaryText}>
                  <strong>{item.title}</strong>
                  <span>📅 {item.date}</span>
                  <span>📍 {item.location}</span>
                  <span className={`${styles.pill} ${item.pillClass}`}>{item.pill}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryHead}>
              <h3>Monthly Challenge</h3>
              <a href="#" className={styles.viewAll}>View All</a>
            </div>
            <div className={styles.challengeImg} />
            <span className={`${styles.pill} ${styles.pillCrocheting}`}>Crocheting</span>
            <strong className={styles.challengeTitle}>Multi-Color Jellyfish Beanie</strong>
            <p className={styles.challengeDesc}>Brief blurb about the details of this months challenge.</p>
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.summaryHead}>
              <h3>Blog & Discussions</h3>
              <a href="#" className={styles.viewAll}>View All</a>
            </div>
            {[
              { title: "Cats & Crochet", desc: "Brief blurb about the cats and crochet discussion board.", tags: ["Trending", "Crocheting"] },
              { title: "Pottery Fails", desc: "Brief blurb about pottery fails discussion.", tags: ["New", "Pottery"] }
            ].map(item => (
              <div key={item.title} className={styles.blogItem}>
                <div className={styles.blogAvatar} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                  <div className={styles.tagRow}>
                    {item.tags.map(t => (
                      <span key={t} className={`${styles.pill} ${t === 'New' ? styles.pillNew : styles.pillTrending}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.searchRow}>
          <div className={styles.searchBox}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search for Inspiration..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <button className={styles.filterBtn}>Filter ▼</button>
        </div>

        <div className={styles.tagRow}>
          <span className={styles.tagLabel}>Popular Tags:</span>
          {TAGS.map(t => (
            <span key={t} className={styles.tagPill}>{t}</span>
          ))}
        </div>

        <h2>Trending Topics</h2>
        <div className={styles.topicGrid}>
          {trendingEvents.map(e => (
            <div key={e.id} className={styles.topicCard}>
              <img src={e.img} alt={e.title} className={styles.topicImg} />
              <div className={styles.topicBody}>
                <strong>{e.title}</strong>
                <span className={styles.meta}>📅 {e.date}</span>
                <span className={styles.meta}>📍 {e.location}</span>
                <span className={styles.meta}>💰 {e.price}</span>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Online Events</h2>
        <div className={styles.topicGrid}>
          {onlineEvents.map(e => (
            <div key={e.id} className={styles.topicCard}>
              <img src={e.img} alt={e.title} className={styles.topicImg} />
              <div className={styles.topicBody}>
                <strong>{e.title}</strong>
                <span className={styles.meta}>📅 {e.date}</span>
                <span className={styles.meta}>💰 {e.price}</span>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <aside className={styles.right}>
        <div className={styles.rightBox}>
          <h3>Quick Actions</h3>
          {['Add an Event', 'Join a Challenge', 'Write a Post'].map(action => (
            <div key={action} className={styles.quickAction}>
              <span>📌 {action}</span>
              <span>›</span>
            </div>
          ))}
        </div>

        <div className={styles.rightBox}>
          <h3>Saved Posts</h3>
          {[
            { title: "Pottery Painting Class", sub: "Fri, Mar 6 · Princeton, NJ", pill: "Pottery", pillClass: styles.pillPottery },
            { title: "Multi-Color Jellyfish Beanie", sub: "Crocheting challenge", pill: "Crocheting", pillClass: styles.pillCrocheting }
          ].map(p => (
            <div key={p.title} className={styles.savedItem}>
              <div className={styles.savedThumb} />
              <div>
                <strong>{p.title}</strong>
                <span className={styles.savedSub}>{p.sub}</span>
                <span className={`${styles.pill} ${p.pillClass}`}>{p.pill}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rightBox}>
          <h3>Report</h3>
          <p>Help us keep this information accurate, up to date, and safe.</p>
          <button className={styles.reportBtn}>Report</button>
        </div>
      </aside>
    </div>
  );
}

export default Community;
