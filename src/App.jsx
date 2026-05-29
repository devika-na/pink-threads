import { useState } from "react";

import DMPage from "./pages/DMPage";
import SettingsPage from "./pages/SettingsPage";

function App() {

  const [page, setPage] = useState("dm");

  return (

    <div>

      {/* TOP BUTTONS */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "15px",
          background: "#ffd6e7"
        }}
      >

        <button onClick={() => setPage("dm")}>
          DM Page
        </button>

        <button onClick={() => setPage("settings")}>
          Settings
        </button>

      </div>

      {/* PAGE SWITCHING */}

      {page === "dm" && <DMPage />}

      {page === "settings" && <SettingsPage />}

    </div>
  );
}

export default App;