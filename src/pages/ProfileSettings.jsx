import { useState } from 'react';

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        profession: 'Web Developer',
        bio: 'Freelance developer specializing in React and Node.js',
        password: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [editMode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (profile.newPassword && profile.newPassword.length < 6) {
            newErrors.newPassword = 'Password must be at least 6 characters';
        }

        if (profile.newPassword !== profile.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        // In a real app, you would send this to your backend
        console.log('Profile updated:', profile);
        setEditMode(false);

        // Reset password fields
        setProfile(prev => ({
            ...prev,
            password: '',
            newPassword: '',
            confirmPassword: ''
        }));
    };

    return (
        <div className="profile-page">
            <h1>Profile Settings</h1>

            <div className="profile-card">
                <div className="profile-header">
                    <h2>Personal Information</h2>
                    <button
                        className="edit-btn"
                        onClick={() => setEditMode(!editMode)}
                    >
                        {editMode ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            disabled={!editMode}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            disabled={!editMode}
                        />
                    </div>

                    <div className="form-group">
                        <label>Profession</label>
                        <input
                            type="text"
                            name="profession"
                            value={profile.profession}
                            onChange={handleChange}
                            disabled={!editMode}
                        />
                    </div>

                    <div className="form-group">
                        <label>Bio</label>
                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            disabled={!editMode}
                        />
                    </div>

                    {editMode && (
                        <>
                            <h3>Change Password</h3>

                            <div className="form-group">
                                <label>Current Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={profile.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={profile.newPassword}
                                    onChange={handleChange}
                                    className={errors.newPassword ? 'error' : ''}
                                />
                                {errors.newPassword && (
                                    <span className="error-message">{errors.newPassword}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={profile.confirmPassword}
                                    onChange={handleChange}
                                    className={errors.confirmPassword ? 'error' : ''}
                                />
                                {errors.confirmPassword && (
                                    <span className="error-message">{errors.confirmPassword}</span>
                                )}
                            </div>

                            <button type="submit" className="save-btn">
                                Save Changes
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;