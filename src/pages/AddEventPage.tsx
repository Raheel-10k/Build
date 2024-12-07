import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Clock, Image as ImageIcon } from "lucide-react";
import Sidebar from "../components/navigation/Sidebar";
import { useUserStore } from "../store/userStore";
import axios from "axios"; // Import axios for making API requests

export default function AddEventPage() {
    const navigate = useNavigate();
    const user = useUserStore((state) => state.user);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        club: "",
        image: "",
    });

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // If user doesn't belong to a club, show an access denied message
    if (!user?.clubDetails) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Sidebar />
                <div className="ml-64 p-8">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-red-600 mb-4">
                            Access Denied
                        </h2>
                        <p className="text-gray-600">
                            Only community members can create events. Please
                            join a club to create events.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Handle the event form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Show loading state
        setErrorMessage(""); // Clear previous error messages
        setSuccessMessage(""); // Clear previous success messages

        try {
            const eventData = {
                ...formData,
                club: user?.clubDetails?.name, // Use the club name from the user data
            };

            // Make API request to register the event
            const response = await axios.post(
                "http://localhost:8001/events/register",
                eventData
            );
            setSuccessMessage("Event created successfully!");
            navigate("/home"); // Navigate to the home page after success
        } catch (error) {
            setErrorMessage("Failed to create event. Please try again.");
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-64 p-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Create New Event
                    </h1>

                    {/* Display success or error message */}
                    {successMessage && (
                        <div className="text-green-600 mb-4">
                            <p>{successMessage}</p>
                        </div>
                    )}
                    {errorMessage && (
                        <div className="text-red-600 mb-4">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-lg shadow-md space-y-6"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Event Title
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter event title"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Describe your event"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Date
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="date"
                                        required
                                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                date: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Time
                                </label>
                                <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="time"
                                        required
                                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                time: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    required
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Event location"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            location: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Event Image URL
                            </label>
                            <div className="relative">
                                <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="url"
                                    required
                                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="https://example.com/image.jpg"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            image: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Creating Event..." : "Create Event"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
