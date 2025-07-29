import { useState } from 'react';

export default function InstructorSettings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: '',
    receiveNotifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile({
      ...profile,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle save (e.g., API call)
    console.log('Saved settings:', profile);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-10 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-700">🔧 Instructor Settings</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows="3"
            placeholder="Tell us about your expertise..."
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="receiveNotifications"
            checked={profile.receiveNotifications}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-600">Receive notifications</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
