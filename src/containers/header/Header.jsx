import React from "react";

function Header() {
  return (
    <div className="gpt3__header section-padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's building something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email address" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
