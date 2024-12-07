import React, { useState } from 'react';
import { Heart, MessageCircle, Calendar, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  organizer: string;
  organizerAvatar: string;
  eventImage: string;
  title: string;
  description: string;
  date: string;
  location: string;
  likes: number;
  comments: number;
  registrations: number;
  timeAgo: string;
}

export default function EventCard({
  id,
  organizer,
  organizerAvatar,
  eventImage,
  title,
  description,
  date,
  location,
  likes,
  comments,
  registrations,
  timeAgo,
}: EventCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-[#1a1a1d] rounded-lg shadow-md">
      {/* Event Header */}
      <div className="flex items-center p-4">
        <img
          src={organizerAvatar}
          alt={organizer}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-semibold text-[#e5e7eb]">{organizer}</p>
          <p className="text-xs text-[#e5e7eb]">{timeAgo}</p>
        </div>
      </div>

      {/* Event Image */}
      <img src={eventImage} alt={title} className="w-full h-64 object-cover" />

      {/* Event Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#e5e7eb] mb-2">{title}</h2>
        <p className="text-[#e5e7eb] mb-4">{description}</p>
        
        <div className="flex items-center text-[#e5e7eb] mb-4">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                isLiked ? 'text-red-500' : 'text-white'
              }`}
            >
              <Heart className="h-6 w-6" fill={isLiked ? 'currentColor' : 'none'} />
              <span>{likesCount}</span>
            </button>
            <button className="flex items-center space-x-1 text-white">
              <MessageCircle className="h-6 w-6" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-white">
              <Share2 className="h-6 w-6" />
            </button>
          </div>
          
          <Link
            to={`/event/${id}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Register Now
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          {registrations} people registered
        </div>
      </div>
    </div>
  );
}