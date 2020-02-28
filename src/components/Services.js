import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Mocktails",
        info:
          "Stir ginger drink, club soda, lime juice, and grenadine in a pitcher. Poured into tall glasses with ice. Garnished with lime rounds and or maraschino cherries."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Family Friendly: The Endless Wall Trail's mild grades, short length, and exciting views make for a wonderful hike with children."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "The shuttle runs Monday through Friday beginning at 7:15 am and provides free service around the City, with trips to local stores, senior centers, libraries, City Hall and parks."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
