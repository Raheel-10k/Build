import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface PostCardProps {
  username: string;
  userAvatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

export default function PostCard({
  username,
  userAvatar,
  image,
  caption,
  likes,
  comments,
  timeAgo,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-xl">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <img
          src={userAvatar}
          alt={username}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{username}</p>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>

      {/* Post Image */}
      <img src={image} alt="Post" className="w-full object-cover" />

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-red-500">
              <Heart className="h-6 w-6" />
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <MessageCircle className="h-6 w-6" />
            </button>
            <button className="flex items-center text-gray-600 hover:text-green-500">
              <Share2 className="h-6 w-6" />
            </button>
          </div>
          <button className="text-gray-600 hover:text-yellow-500">
            <Bookmark className="h-6 w-6" />
          </button>
        </div>

        {/* Likes & Comments Count */}
        <div className="mb-2">
          <p className="font-semibold text-gray-800">{likes.toLocaleString()} likes</p>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-gray-800">{username}</span>
          <span className="ml-2 text-gray-700">{caption}</span>
        </div>

        {/* Comments */}
        <p className="text-gray-500 text-sm">
          View all {comments.toLocaleString()} comments
        </p>
      </div>
    </div>
  );
}