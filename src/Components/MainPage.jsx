import React from "react";
import Header from "./Header";
import Headline from "./Headline";

export default function MainPage() {
  const headlineHeading = "One Line lorem ipsum dolor sit amet";
  const headlineText =
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet lorem.";

  return (
    <div className="mainPage">
      <Header />
      <div className="headlines">
        <Headline heading={headlineHeading} text={headlineText} />
        <Headline heading={headlineHeading} text={headlineText} />
        <Headline heading={headlineHeading} text={headlineText} />
      </div>
    </div>
  );
}
