import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import EventCard from '../components/event/EventCard';

export default function HomePage() {
  const events = [
    {
      id: '1',
      organizer: 'Tech Conference',
      organizerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      eventImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      title: 'Web Development Summit 2024',
      description: 'Join us for the biggest web development conference of the year! Learn from industry experts and network with fellow developers.',
      date: 'March 25, 2024',
      location: 'San Francisco, CA',
      likes: 234,
      comments: 45,
      registrations: 189,
      timeAgo: '2 days ago',
    },
    {
      id: '2',
      organizer: 'Design Workshop',
      organizerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      eventImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      title: 'UI/UX Design Masterclass',
      description: 'A hands-on workshop covering the latest trends in UI/UX design. Perfect for beginners and intermediate designers.',
      date: 'April 5, 2024',
      location: 'New York, NY',
      likes: 156,
      comments: 28,
      registrations: 92,
      timeAgo: '1 day ago',
    },
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      <Sidebar />
      <div className="ml-64 p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}