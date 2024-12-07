import React from 'react';
import { Grid } from 'lucide-react';
import Sidebar from '../components/navigation/Sidebar';
import { useUserStore } from '../store/userStore';

interface Event {
  id: string;
  image: string;
  title: string;
  date: string;
  type: 'organized' | 'attended';
}

export default function ProfilePage() {
  const user = useUserStore((state) => state.user);

  const events: Event[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      title: 'Web Development Summit 2024',
      date: 'March 25, 2024',
      type: 'organized',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      title: 'UI/UX Design Masterclass',
      date: 'April 5, 2024',
      type: 'attended',
    },
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      <Sidebar />
      <div className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-[#1a1a1d] p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center space-x-6">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-[#e5e7eb]">{user?.name}</h1>
                <p className="text-[#e5e7eb]">@{user?.username}</p>
                {user?.clubDetails && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {user.clubDetails.name} • {user.clubDetails.role}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="bg-[#1a1a1d] p-8 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-6">
              <Grid className="h-5 w-5 text-[#e5e7eb]" />
              <h2 className="text-xl font-semibold text-[#e5e7eb]">Events</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {events.map((event) => (
                <div key={event.id} className="group relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm">{event.date}</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-white bg-opacity-20">
                        {event.type === 'organized' ? 'Organized' : 'Attended'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}