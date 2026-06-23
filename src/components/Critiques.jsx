import React from 'react'

const Critiques = () => {
    const constants = [
      {
        title: "Design Critique: Preply (iOS App)",
        desc: "Identified usability issues and proposed design solutions across the iOS student experience for Preply, a language-learning platform that connects students with live tutors.",
      },
      {
        title: "Heuristic Evaluation: Are.na (Desktop Website)",
        desc: "Are.na is deliberately minimal — but minimalism has tradeoffs. Conducted a heuristic evaluation and proposed design recommendations that close the usability gaps without compromising the platform's distinctive aesthetic.",
      },
      {
        title: "Speculative Emotional Design: Fluent",
        desc: "Invisible workplace labour disproportionately falls on women, but making it visible creates new risks. Designed a speculative Slack plugin that surfaces and redistributes non-promotable work.",
      },
    ];

    let toolText = "this iernal link!";

  return (
    <section id="critiques">
      <div className="title">other design projects & critiques</div>
      <div className="content-div">
        {constants.map((item) => (
          <div className="content">
            <div className="h1">
              <ExternalLink tooltipText="this is an external link!">
                <h1>{item.title}</h1>
              </ExternalLink>
            </div>
            <div className="p">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Critiques
