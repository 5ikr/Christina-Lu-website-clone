import React from 'react'

const Work = () => {

  const constants = [
    {
      id: "bank-of-america",
      title: "Bank of America Online Banking",
      category: "Academic Project",
      tags: [
        "UI/UX Design",
        " · Information Architecture",
        " · Interaction Design",
      ],
      description:
        "Redesigned Bank of America's online banking by simplifying payment flows, consolidating information, and adapting Material Design 3 for clarity and consistency.",
      assetUrl:
        "https://framerusercontent.com/images/owMyLps0dafLKOc2Bcgmb9WRjE.jpg?scale-down-to=512&width=5400&height=4320 512w,https://framerusercontent.com/images/owMyLps0dafLKOc2Bcgmb9WRjE.jpg?scale-down-to=1024&width=5400&height=4320 1024w,https://framerusercontent.com/images/owMyLps0dafLKOc2Bcgmb9WRjE.jpg?scale-down-to=2048&width=5400&height=4320 2048w,https://framerusercontent.com/images/owMyLps0dafLKOc2Bcgmb9WRjE.jpg?scale-down-to=4096&width=5400&height=4320 4096w,https://framerusercontent.com/images/owMyLps0dafLKOc2Bcgmb9WRjE.jpg?width=5400&height=4320 5400w",
    },
    {
      id: "recursive-flora",
      title: "Recursive Flora",
      category: "Communication Design",
      tags: [
        "Communication Design",
        " · AI Coding",
        " · Data Visualization",
        " · Creative Direction",
      ],
      description:
        "A data-driven, co-created zine and website exploring overthinking, translating emotional complexity into shared understanding.",
      assetUrl:
        "https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=512&width=5400&height=4320 512w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=1024&width=5400&height=4320 1024w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=2048&width=5400&height=4320 2048w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=4096&width=5400&height=4320 4096w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?width=5400&height=4320 5400w",
    },
    {
      id: "noelle",
      title: "noelle",
      category: "Product Design",
      tags: [
        "0 → 1 Product Design",
        " · Competitor Analysis",
        " · Interaction Design",
      ],
      description:
        "noelle helps designers resurface saved resources at the right moment, and find patterns so taste stops being a feeling and starts being a language.",
      assetUrl:
        "https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=512&width=5400&height=4320 512w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=1024&width=5400&height=4320 1024w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=2048&width=5400&height=4320 2048w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?scale-down-to=4096&width=5400&height=4320 4096w,https://framerusercontent.com/images/dPADpyV0fv6eu8MWeQ5ItdDBQ.jpg?width=5400&height=4320 5400w",
    },
    {
      id: "pratt-portal",
      title: "Pratt Institute Student & Staff Portal",
      category: "Product Design",
      tags: ["UI/UX Design", " · User Research", " · Interaction Design"],
      description:
        "Usability testing and design recommendations for Pratt's universal student/staff portal. Focused on introducing progressive disclosure for the printing feature.",
      assetUrl:
        "https://framerusercontent.com/images/LR5IhTh64gEzMH9A2C9Gbeprs0.png?scale-down-to=512&width=5400&height=4320 512w,https://framerusercontent.com/images/LR5IhTh64gEzMH9A2C9Gbeprs0.png?scale-down-to=1024&width=5400&height=4320 1024w,https://framerusercontent.com/images/LR5IhTh64gEzMH9A2C9Gbeprs0.png?scale-down-to=2048&width=5400&height=4320 2048w,https://framerusercontent.com/images/LR5IhTh64gEzMH9A2C9Gbeprs0.png?scale-down-to=4096&width=5400&height=4320 4096w,https://framerusercontent.com/images/LR5IhTh64gEzMH9A2C9Gbeprs0.png?width=5400&height=4320 5400w",
    },
  ];


  return (
    <section id='work'>
      <div className="title">featured Work</div>

      <div className='grid-layout'>
        {constants.map((item) => (
          <div>
            <div className="img">
              <img src={item.assetUrl} />
            </div>
            
            <div className="content">
              <h1>{item.title}</h1>
              <h2>{item.tags}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work
