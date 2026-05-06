import React from 'react';
import styles from './Resources.module.css';

const tutorials = [
  { id: 1, title: "Coloring Basics", desc: "Learn the fundamentals of coloring techniques for beginners.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80" },
  { id: 2, title: "Crocheting Basics", desc: "Start with simple stitches and beginner-friendly crochet steps.", img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=500&q=80" },
  { id: 3, title: "Journaling Starter Guide", desc: "Explore easy journaling ideas to begin your creative practice.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80" },
];

const stores = [
  { name: "Michaels", desc: "Art and craft supplies for painting, journaling, and more.", logo: "https://d1io3yog0oux5.cloudfront.net/_1c8e829c5b86625b38fb17d25596aa43/michaelsnewsroom/files/theme/images/logo-header.svg" },
  { name: "Target", desc: "Affordable beginner hobby tools and supplies in one place.", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/960px-Target_logo.svg.png" },
  { name: "Joann Fabric", desc: "Yarn, fabric, and DIY materials for creative hobbies.", logo: "https://joanns-fabric.com/wp-content/uploads/2025/12/joann-fabric-logo-1-300x70.png" },
  { name: "Walmart", desc: "Basic starter kits and budget-friendly materials.", logo: "https://i5.walmartimages.com/dfw/63fd9f59-14e2/9d304ce6-96de-4331-b8ec-c5191226d378/v1/spark-icon.svg" },
];

const bundles = [
  { title: "Beginner Crochet Kit", desc: "Includes yarn, crochet hook, and starter guide.", img: "https://images.unsplash.com/photo-1521432540519-7fe9d4fe3d0d?auto=format&fit=crop&w=600&q=80" },
  { title: "Journaling Bundle", desc: "Includes journal, washi tape, stickers, and pens.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" },
];

function Resources() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>All the resources you need</h1>
        <p>Everything you need to start and continue your hobbies — from beginner tutorials to where to find materials.</p>
      </section>

      <section className={styles.section}>
        <h2>Beginner Tutorials</h2>
        <div className={styles.tutorialGrid}>
          {tutorials.map(t => (
            <div key={t.id} className={styles.tutorialCard}>
              <img src={t.img} alt={t.title} className={styles.tutorialImg} />
              <div className={styles.tutorialBody}>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <button className={styles.watchBtn}>Watch Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.center}>
          <button className={styles.outlineBtn}>View All Tutorials</button>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <h2>Find the perfect material</h2>
        <p>Find both large chain stores and local shops where you can get hobby supplies.</p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Find a store near you..." />
          <span>🔍</span>
        </div>
        <div className={styles.storeGrid}>
          {stores.map(s => (
            <div key={s.name} className={styles.storeCard}>
              <img src={s.logo} alt={s.name} className={styles.storeLogo} />
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Upcoming hobby starter bundles</h2>
        <p className={styles.subtext}>We are partnering with brands to offer beginner-friendly hobby kits and exclusive deals.</p>
        <div className={styles.bundleGrid}>
          {bundles.map(b => (
            <div key={b.title} className={styles.bundleCard}>
              <img src={b.img} alt={b.title} className={styles.bundleImg} />
              <div className={styles.bundleBody}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Resources;
