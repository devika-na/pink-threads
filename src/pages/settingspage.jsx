import "../styles/settings.css";
import { useState } from "react";

function SettingsPage() {

  const [theme, setTheme] = useState("pink");

  return (

    <div className={`settings-page ${theme}`}>

      <div className="settings-container">

        <h1 className="title">Settings</h1>

        {/* ACCOUNT SETTINGS */}

        <div className="settings-card">

          <h2>Account Settings</h2>

          <div className="profile-section">

            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="profile"
              className="profile-img"
            />

            <button className="change-btn">
              Change Photo
            </button>

          </div>

          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="@username" />
          </div>

          <div className="input-group">
            <label>Bio</label>
            <textarea placeholder="Write your bio..." />
          </div>

          <div className="input-group">
            <label>Pronouns</label>

            <select>
              <option>She/Her</option>
              <option>They/Them</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div className="input-group">
            <label>Profile Theme</label>

            <select
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="pink">Soft Pink</option>
              <option value="lavender">Lavender</option>
              <option value="dark">Dark</option>
            </select>
          </div>

        </div>

        {/* PRIVACY */}

        <div className="settings-card">

          <h2>Privacy Settings</h2>

          <div className="toggle-row">
            <span>Public Account</span>
            <input type="checkbox" />
          </div>

          <div className="toggle-row">
            <span>Followers Only</span>
            <input type="checkbox" />
          </div>

          <div className="toggle-row">
            <span>Anonymous Questions</span>
            <input type="checkbox" />
          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="settings-card">

          <h2>Notification Settings</h2>

          <div className="checkbox-group">

            <label>
              <input type="checkbox" />
              Replies
            </label>

            <label>
              <input type="checkbox" />
              Comments
            </label>

            <label>
              <input type="checkbox" />
              Likes
            </label>

            <label>
              <input type="checkbox" />
              Mentions
            </label>

            <label>
              <input type="checkbox" />
              Circle Updates
            </label>

          </div>

        </div>

        {/* PERSONALIZATION */}

        <div className="settings-card">

          <h2>Personalization</h2>

          <div className="input-group">

            <label>Feed Mood</label>

            <select>
              <option>Soft Girl</option>
              <option>Study Mood</option>
              <option>Fashion</option>
              <option>Self Care</option>
              <option>Motivational</option>
            </select>

          </div>

          <div className="interests">

            <button>Fashion</button>
            <button>Skincare</button>
            <button>Study Life</button>
            <button>Fitness</button>
            <button>Room Decor</button>
            <button>Relationships</button>
            <button>Wellness</button>

          </div>

        </div>

        <button className="save-btn">
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default SettingsPage;