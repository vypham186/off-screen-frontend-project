import React, { useState } from 'react';
import HobbyCard from '../HobbyCard/HobbyCard';
import hobbies from '../../data/hobbies';
import styles from './Explore.module.css';

const CATEGORIES = ['All', 'Arts & Crafts', 'Fitness & Sports', 'Outdoor', 'Music & Instruments', 'Food & Drink', 'Do-At-Home'];
const DIFFICULTIES = ['First-Timer', 'Beginner', 'Intermediate', 'Advanced'];

function Explore() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [maxCost, setMaxCost] = useState(350);

  const costMap: Record<string, number> = { '$': 25, '$$': 75, '$$$': 150, '$$$$': 300 };

  function toggleDifficulty(d: string) {
    setDifficulties(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    );
  }

  const filtered = hobbies.filter(h => {
    const matchSearch = h.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'All' || h.category === activeCategory || h.tags.includes(activeCategory);
    const matchDiff = difficulties.length === 0 || difficulties.includes(h.difficulty);
    const matchCost = (costMap[h.cost] || 0) <= maxCost;
    return matchSearch && matchCategory && matchDiff && matchCost;
  });

  return (
    <main>
      <section className={styles.hero}>
        <h1>Explore Hobbies</h1>
        <p>Browse and discover your next passion</p>
        <div className={styles.searchBar}>
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search hobbies"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.pills}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.pill} ${activeCategory === cat ? styles.pillActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className={styles.layout}>
        <aside className={styles.filters}>
          <h3>Filters</h3>
          <hr />
          <div className={styles.filterGroup}>
            <h4>Category</h4>
            {CATEGORIES.filter(c => c !== 'All').map(cat => (
              <label key={cat}>
                <input
                  type="checkbox"
                  checked={activeCategory === cat}
                  onChange={() => setActiveCategory(activeCategory === cat ? 'All' : cat)}
                />
                {cat}
              </label>
            ))}
          </div>
          <hr />
          <div className={styles.filterGroup}>
            <h4>Difficulty</h4>
            {DIFFICULTIES.map(d => (
              <label key={d}>
                <input
                  type="checkbox"
                  checked={difficulties.includes(d)}
                  onChange={() => toggleDifficulty(d)}
                />
                {d}
              </label>
            ))}
          </div>
          <hr />
          <div className={styles.filterGroup}>
            <div className={styles.costHeader}>
              <h4>Budget</h4>
              <span>${maxCost}</span>
            </div>
            <input
              type="range"
              min={0}
              max={350}
              value={maxCost}
              onChange={e => setMaxCost(Number(e.target.value))}
              className={styles.slider}
            />
          </div>
        </aside>

        <section className={styles.results}>
          <div className={styles.resultsMeta}>
            <span>Showing {filtered.length} hobbies</span>
            <select className={styles.sortSelect}>
              <option>Sort: Popular</option>
              <option>Sort: A-Z</option>
              <option>Sort: Cost: Low-High</option>
            </select>
          </div>
          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map(h => (
                <HobbyCard key={h.id} hobby={h} />
              ))}
            </div>
          ) : (
            <p className={styles.noResults}>No hobbies match your filters. Try adjusting them!</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Explore;
