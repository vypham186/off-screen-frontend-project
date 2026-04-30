import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Quiz.module.css';

interface Option {
  text: string;
  scores: Record<string, number>;
}

interface Question {
  id: number;
  text: string;
  emoji: string;
  options: Option[];
}

interface HobbyResult {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  difficulty: string;
  cost: string;
  timeToLearn: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How do you most like to spend a free afternoon?",
    emoji: "☀️",
    options: [
      { text: "Making something with my hands", scores: { pottery: 3, crocheting: 3, watercolor: 2 } },
      { text: "Getting outside and moving", scores: { rock_climbing: 3, hiking: 3 } },
      { text: "Relaxing at home", scores: { journaling: 3, cooking: 2, watercolor: 2 } },
      { text: "Listening to or playing music", scores: { guitar: 3 } }
    ]
  },
  {
    id: 2,
    text: "What kind of results do you prefer from a hobby?",
    emoji: "🎯",
    options: [
      { text: "Something I can hold or display", scores: { pottery: 3, crocheting: 3 } },
      { text: "A skill I improve over time", scores: { guitar: 3, rock_climbing: 2 } },
      { text: "A mental or emotional outlet", scores: { journaling: 3, watercolor: 2 } },
      { text: "Something I can share or eat", scores: { cooking: 3 } }
    ]
  },
  {
    id: 3,
    text: "How much time can you dedicate per week?",
    emoji: "⏱️",
    options: [
      { text: "Under 1 hour", scores: { journaling: 3, watercolor: 2 } },
      { text: "1 to 3 hours", scores: { crocheting: 2, cooking: 2 } },
      { text: "3 to 6 hours", scores: { pottery: 2, guitar: 2, rock_climbing: 2 } },
      { text: "6 or more hours", scores: { guitar: 3, rock_climbing: 3 } }
    ]
  },
  {
    id: 4,
    text: "What is your budget for getting started?",
    emoji: "💰",
    options: [
      { text: "Free or nearly free", scores: { journaling: 3, hiking: 3 } },
      { text: "Under $30", scores: { watercolor: 3, crocheting: 3 } },
      { text: "$30 to $100", scores: { cooking: 2, pottery: 2 } },
      { text: "Happy to invest more", scores: { guitar: 3, rock_climbing: 3 } }
    ]
  },
  {
    id: 5,
    text: "Do you prefer solo or social hobbies?",
    emoji: "🤝",
    options: [
      { text: "Completely solo", scores: { journaling: 3, watercolor: 3 } },
      { text: "Solo but with an online community", scores: { crocheting: 2, cooking: 2 } },
      { text: "Either works for me", scores: { pottery: 2, guitar: 2, hiking: 2 } },
      { text: "Love doing things with others", scores: { rock_climbing: 3, cooking: 2 } }
    ]
  },
  {
    id: 6,
    text: "Which word best describes your ideal vibe?",
    emoji: "✨",
    options: [
      { text: "Meditative and peaceful", scores: { pottery: 3, watercolor: 3, journaling: 2 } },
      { text: "Exciting and physical", scores: { rock_climbing: 3, hiking: 3 } },
      { text: "Creative and expressive", scores: { guitar: 3, watercolor: 2, crocheting: 2 } },
      { text: "Practical and rewarding", scores: { cooking: 3, crocheting: 2 } }
    ]
  }
];

const RESULTS: Record<string, HobbyResult> = {
  pottery: { name: "Pottery", emoji: "🏺", tagline: "Shape something beautiful with your hands", description: "Pottery is meditative, tactile, and endlessly satisfying. From pinch pots to wheel throwing, there is always something new to create.", difficulty: "Beginner", cost: "$$", timeToLearn: "2-3 weeks" },
  crocheting: { name: "Crocheting", emoji: "🧶", tagline: "Create cozy things one stitch at a time", description: "Crocheting is affordable, portable, and deeply relaxing. Start with a simple scarf and work up to intricate patterns.", difficulty: "Beginner", cost: "$", timeToLearn: "1-3 weeks" },
  watercolor: { name: "Watercolor Painting", emoji: "🎨", tagline: "Let color flow and find your inner artist", description: "Watercolor is forgiving, beautiful, and requires very little setup. Perfect for quiet evenings at home.", difficulty: "First-Timer", cost: "$", timeToLearn: "1-2 weeks" },
  journaling: { name: "Journaling", emoji: "📓", tagline: "A daily practice for clarity and creativity", description: "Journaling has zero barriers to entry. A notebook and pen are all you need to start.", difficulty: "First-Timer", cost: "$", timeToLearn: "Start today" },
  rock_climbing: { name: "Rock Climbing", emoji: "🧗", tagline: "Push your limits and conquer new heights", description: "Indoor climbing gyms make rock climbing more accessible than ever. It is a full-body workout that never gets boring.", difficulty: "Intermediate", cost: "$$$", timeToLearn: "1-3 weeks" },
  guitar: { name: "Guitar", emoji: "🎸", tagline: "Make music that moves you and others", description: "Guitar is one of the most rewarding long-term hobbies. Thousands of free tutorials exist online for every skill level.", difficulty: "Intermediate", cost: "$$$$", timeToLearn: "6-12 weeks" },
  hiking: { name: "Hiking", emoji: "🥾", tagline: "Explore the world one trail at a time", description: "Hiking requires nothing more than comfortable shoes. Start with local trails and build up to longer adventures.", difficulty: "First-Timer", cost: "$", timeToLearn: "Start today" },
  cooking: { name: "Cooking", emoji: "🍳", tagline: "Master flavors from your own kitchen", description: "Cooking is a practical and endlessly rewarding hobby. From weeknight meals to elaborate dinner parties.", difficulty: "Beginner", cost: "$$", timeToLearn: "Ongoing" }
};

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(option: Option) {
    if (selected !== null) return;
    setSelected(option.text);
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });
    setScores(newScores);
    setTimeout(() => {
      if (currentQ + 1 >= QUESTIONS.length) {
        setFinished(true);
      } else {
        setCurrentQ(prev => prev + 1);
        setSelected(null);
      }
    }, 600);
  }

  function restart() {
    setCurrentQ(0);
    setScores({});
    setFinished(false);
    setSelected(null);
  }

  function getTopHobby(): HobbyResult {
    if (Object.keys(scores).length === 0) return RESULTS.journaling;
    const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    return RESULTS[top] || RESULTS.journaling;
  }

  const progress = (currentQ / QUESTIONS.length) * 100;
  const q = QUESTIONS[currentQ];

  return (
    <main>
      <section className={styles.hero}>
        <h1>Find Your Perfect Hobby</h1>
        <p>Answer 6 quick questions and we will match you with a hobby made for you.</p>
      </section>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          {!finished ? (
            <div>
              <div className={styles.header}>
                <div className={styles.progressWrap}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                  </div>
                  <span className={styles.counter}>{currentQ + 1} / {QUESTIONS.length}</span>
                </div>
              </div>
              <div className={styles.questionArea}>
                <span className={styles.emoji}>{q.emoji}</span>
                <h2 className={styles.questionText}>{q.text}</h2>
              </div>
              <div className={styles.optionsGrid}>
                {q.options.map(opt => (
                  <button
                    key={opt.text}
                    className={`${styles.optionBtn} ${selected === opt.text ? styles.optionSelected : ''}`}
                    onClick={() => handleSelect(opt)}
                    disabled={selected !== null}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.results}>
              {(() => {
                const hobby = getTopHobby();
                return (
                  <div>
                    <p className={styles.resultsLabel}>Your perfect hobby match is</p>
                    <div className={styles.resultCard}>
                      <div className={styles.resultEmoji}>{hobby.emoji}</div>
                      <h2 className={styles.resultName}>{hobby.name}</h2>
                      <p className={styles.resultTagline}>{hobby.tagline}</p>
                      <p className={styles.resultDesc}>{hobby.description}</p>
                      <div className={styles.resultMeta}>
                        <span>⏱ {hobby.timeToLearn}</span>
                        <span>📊 {hobby.difficulty}</span>
                        <span>💰 {hobby.cost}</span>
                      </div>
                    </div>
                    <p className={styles.resultsMessage}>Ready to give it a try? Explore guides and community events.</p>
                    <div className={styles.resultsActions}>
                      <Link to="/explore" className={styles.btnPrimary}>Explore Hobbies</Link>
                      <button onClick={restart} className={styles.btnSecondary}>Retake Quiz</button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        <div className={styles.howTo}>
          <h3>How it works</h3>
          <ul>
            <li><span>🖱️</span><span>Tap an answer to move to the next question</span></li>
            <li><span>🎯</span><span>6 questions about your lifestyle and budget</span></li>
            <li><span>🤝</span><span>Your answers are matched to 8 hobby profiles</span></li>
            <li><span>🔄</span><span>Not happy with the match? Retake anytime</span></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Quiz;
