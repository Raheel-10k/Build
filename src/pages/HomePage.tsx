import React, { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import EventCard from "../components/event/EventCard";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function HomePage() {
    const [events, setEvents] = useState([
        {
            id: "E12345", // eventId from the provided JSON
            organizer: "Hackathon",
            organizerAvatar:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Placeholder avatar
            eventImage:
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80", // Placeholder event image
            title: "Hackathon 2024",
            description:
                "A 48-hour coding competition with exciting challenges.",
            date: "May 20, 2024", // Converted date format
            location: "Tech Park Auditorium",
            likes: 0, // Placeholder, as no likes provided in the JSON
            comments: 0, // Placeholder, as no comments provided in the JSON
            registrations: 4, // This could be the number of attendees
            timeAgo: "Upcoming", // Placeholder
        },
        {
            id: "H12345",
            organizer: "Hackathon",
            organizerAvatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Placeholder avatar
            eventImage:
                "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80", // Placeholder event image
            title: "Hackathon 2024",
            description:
                "A 48-hour coding competition with exciting challenges.",
            date: "December 24, 2024", // Converted date format
            location: "Tech Park Auditorium",
            likes: 0, // Placeholder
            comments: 0, // Placeholder
            registrations: 1, // This could be the number of attendees
            timeAgo: "Upcoming", // Placeholder
        },
        {
            id: "H23146",
            organizer: "Hackathon",
            organizerAvatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Placeholder avatar
            eventImage:
                "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80", // Placeholder event image
            title: "Event1",
            description: "Details of Event1",
            date: "December 8, 2024", // Converted date format
            location: "Somewhere",
            likes: 0, // Placeholder
            comments: 0, // Placeholder
            registrations: 0, // No attendees
            timeAgo: "Upcoming", // Placeholder
        },
    ]);

    const handleSearch = (value) => {
        console.log(value);
        const filteredEvents = events.filter((event) =>
            event.title.toLowerCase().includes(value.toLowerCase())
        );
        setEvents(filteredEvents);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64 p-8">
                <div className="flex justify-center mb-8">
                    <Search
                        placeholder="Search for an event"
                        enterButton="Search"
                        size="large"
                        onSearch={handleSearch}
                        prefix={<SearchOutlined />}
                        className="max-w-xl w-full"
                    />
                </div>
                <div className="max-w-3xl mx-auto space-y-6">
                    {events.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </div>
    );
}
