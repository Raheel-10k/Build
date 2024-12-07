import React, { useState } from 'react';
import { X, Heart, MessageCircle } from 'lucide-react';
import Sidebar from '../components/navigation/Sidebar';

interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  avatar: string;
  score: number;
}

const initialProfiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    age: 24,
    bio: 'Tech enthusiast & UI/UX designer. Love creating beautiful interfaces!',
    interests: ['Design', 'Technology', 'Art'],
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    score: 10
  },
  {
    id: '2',
    name: 'Alex Rodriguez',
    age: 28,
    bio: 'Full-stack developer by day, musician by night. Always learning!',
    interests: ['Coding', 'Music', 'Travel'],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    score: 8
  },
  {
    id: '3',
    name: 'Emily Watson',
    age: 26,
    bio: 'Product Manager passionate about building great user experiences.',
    interests: ['Product', 'Strategy', 'Innovation'],
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    score: 15
  },
  {
    id: '4',
    name: 'Michael Chang',
    age: 29,
    bio: 'Data scientist exploring the frontiers of AI and machine learning.',
    interests: ['AI', 'Data Science', 'Research'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    score: 12
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    age: 25,
    bio: 'Frontend developer specializing in React. Coffee enthusiast.',
    interests: ['React', 'Web Design', 'Coffee'],
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    score: 9
  },
  {
    id: '6',
    name: 'David Kim',
    age: 27,
    bio: 'DevOps engineer making systems run smoothly. Gaming in free time.',
    interests: ['DevOps', 'Gaming', 'Technology'],
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    score: 11
  },
  {
    id: '7',
    name: 'Rachel Martinez',
    age: 23,
    bio: 'Mobile app developer creating beautiful native experiences.',
    interests: ['Mobile Dev', 'UX', 'Fitness'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
    score: 14
  }
];

export default function MeetPeoplePage() {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex >= profiles.length) return;

    const updatedProfiles = [...profiles];
    if (direction === 'right') {
      updatedProfiles[currentIndex].score += 2;
      // In a real app, this would trigger a chat request
      console.log('Chat request sent to', profiles[currentIndex].name);
    } else {
      updatedProfiles[currentIndex].score -= 1;
    }

    setSwipeDirection(direction);
    setProfiles(updatedProfiles);

    // Reset swipe animation and move to next profile
    setTimeout(() => {
      setSwipeDirection(null);
      setCurrentIndex(prev => prev + 1);
    }, 300);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Meet New People</h1>

          {currentProfile ? (
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${
                swipeDirection === 'left' ? '-translate-x-full' : 
                swipeDirection === 'right' ? 'translate-x-full' : ''
              }`}
            >
              <img
                src={currentProfile.avatar}
                alt={currentProfile.name}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {currentProfile.name}, {currentProfile.age}
                    </h2>
                    <p className="text-gray-500">Score: {currentProfile.score}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{currentProfile.bio}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProfile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleSwipe('left')}
                    className="p-4 bg-red-100 rounded-full text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <X className="h-8 w-8" />
                  </button>
                  <button
                    onClick={() => handleSwipe('right')}
                    className="p-4 bg-green-100 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                  >
                    <Heart className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No More Profiles
              </h2>
              <p className="text-gray-600">
                You've seen all available profiles. Check back later!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}