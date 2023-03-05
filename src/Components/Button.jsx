import React, { useState } from "react";

export default function Button() {
  const [requestSent, setRequestSent] = useState(false);

  return (
    <>
      {!requestSent ? (
        <button className="requestButton" onClick={() => setRequestSent(true)}>
          Button
        </button>
      ) : (
        <div className="requestSent">
          <img src="/check.webp" alt="confirmed" className="confirmed" />
          <span>Your request has been sent</span>
        </div>
      )}
    </>
  );
}
