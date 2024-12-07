//import React from 'react';
//import { useParams } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Sidebar from "../components/navigation/Sidebar";

const mockEventData = {
    id: "1",
    title: "Web Development Summit 2024",
    description:
        "Join us for the biggest web development conference of the year! Learn from industry experts and network with fellow developers.",
    date: "March 25, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center",
    address: "123 Tech Street, San Francisco, CA 94105",
    organizer: "Tech Conference",
    price: "$299",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    stats: [
        { date: "2024-02-01", registrations: 50, approved: 45, rejected: 5 },
        { date: "2024-02-15", registrations: 120, approved: 100, rejected: 20 },
        { date: "2024-03-01", registrations: 189, approved: 150, rejected: 39 },
    ],
};

export default function EventDetailsPage() {
    //const { id } = useParams();
    const event = mockEventData; // In a real app, fetch event data based on id

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64 p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column - Event Details */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {event.title}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {event.description}
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Date & Time
                                    </h2>
                                    <p className="text-gray-600">
                                        {event.date}
                                    </p>
                                    <p className="text-gray-600">
                                        {event.time}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Location
                                    </h2>
                                    <p className="text-gray-600">
                                        {event.location}
                                    </p>
                                    <p className="text-gray-600">
                                        {event.address}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Organizer
                                    </h2>
                                    <p className="text-gray-600">
                                        {event.organizer}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Price
                                    </h2>
                                    <p className="text-gray-600">
                                        {event.price}
                                    </p>
                                </div>
                            </div>

                            <button className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
                                Register for Event
                            </button>
                        </div>

                        {/* Right Column - Image and Stats */}
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Registration Statistics
                                </h2>
                                <div className="h-80">
                                    <ResponsiveContainer
                                        width="100%"
                                        height="100%"
                                    >
                                        <LineChart data={event.stats}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="date" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line
                                                type="monotone"
                                                dataKey="registrations"
                                                stroke="#4F46E5"
                                                strokeWidth={2}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="approved"
                                                stroke="#10B981"
                                                strokeWidth={2}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="rejected"
                                                stroke="#EF4444"
                                                strokeWidth={2}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
