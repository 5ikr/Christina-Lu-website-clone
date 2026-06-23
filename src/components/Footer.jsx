import React from 'react'
import ExternalLink from './ExternalLink';

const Footer = () => {
  return (
    <section id="footer">
      <ul>
        <div className="copy">©2026</div>
        <div className="others">
          <li>
            <a href="#">instagram</a>
          </li>
          <li>
            <a href="#">x</a>
          </li>
          <li>
            <a href="#">linkedin</a>
          </li>
          <li>
            <a href="#">resume</a>
          </li>
        </div>
      </ul>
      <div className="content">
        <ExternalLink tooltipText="this illustration is inspired by the 吉祥结, a traditional good-luck knot. my family's from taiwan, so it's a little detail that feels like home :)">
          <div className="hover-img">
            <img srcset="https://framerusercontent.com/images/g1RH0AVUOicXiIpCrDHE8oCVREg.png?scale-down-to=2048&width=860&height=2588 680w" />
          </div>
        </ExternalLink>
        <p>here's a good luck charm for you</p>
      </div>
    </section>
  );
}

export default Footer
