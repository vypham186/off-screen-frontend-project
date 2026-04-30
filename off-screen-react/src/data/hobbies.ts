export interface Hobby {
  id: number;
  name: string;
  tags: string[];
  category: string;
  description: string;
  timeToLearn: string;
  difficulty: string;
  cost: string;
  imageUrl: string;
}

const hobbies: Hobby[] = [
  {
    id: 1,
    name: "Pottery",
    tags: ["Arts & Crafts"],
    category: "Arts & Crafts",
    description: "Shape clay into beautiful objects.",
    timeToLearn: "2-3 weeks",
    difficulty: "Beginner",
    cost: "$$",
    imageUrl: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Rock Climbing",
    tags: ["Outdoor", "Fitness & Sports"],
    category: "Fitness & Sports",
    description: "Build strength and problem-solving skills on the wall.",
    timeToLearn: "1-3 weeks",
    difficulty: "Intermediate",
    cost: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Guitar",
    tags: ["Music & Instruments"],
    category: "Music & Instruments",
    description: "A timeless instrument with an enormous community of learners.",
    timeToLearn: "6-12 weeks",
    difficulty: "Intermediate",
    cost: "$$$$",
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Crocheting",
    tags: ["Arts & Crafts"],
    category: "Arts & Crafts",
    description: "A relaxing and portable hobby.",
    timeToLearn: "1-3 weeks",
    difficulty: "Beginner",
    cost: "$",
    imageUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Watercolor Painting",
    tags: ["Arts & Crafts"],
    category: "Arts & Crafts",
    description: "A meditative and affordable art form.",
    timeToLearn: "1-2 weeks",
    difficulty: "First-Timer",
    cost: "$",
    imageUrl: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Journaling",
    tags: ["Do-At-Home"],
    category: "Do-At-Home",
    description: "Boost mental clarity and creativity.",
    timeToLearn: "Start today",
    difficulty: "First-Timer",
    cost: "$",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Hiking",
    tags: ["Outdoor", "Fitness & Sports"],
    category: "Outdoor",
    description: "Explore nature trails at your own pace.",
    timeToLearn: "Start today",
    difficulty: "First-Timer",
    cost: "$",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Cooking",
    tags: ["Food & Drink"],
    category: "Food & Drink",
    description: "Master new cuisines from your own kitchen.",
    timeToLearn: "Ongoing",
    difficulty: "Beginner",
    cost: "$$",
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=80"
  }
];

export default hobbies;