import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Learn Algorithms",
    Svg: require("../../static/img/feature_book.svg").default,
    description: (
      <>
        Learn the basics of algorithms and overview of how to think about
        implementing algorithms.
      </>
    ),
  },
  {
    title: "Implement Data Structures",
    Svg: require("../../static/img/feature_pendulum.svg").default,
    description: (
      <>
        Implement the data structures from scratch and learn about the time and
        space complexity of every operations.
      </>
    ),
  },
  {
    title: "Well Curated Learning",
    Svg: require("../../static/img/feature_learning.svg").default,
    description: (
      <>
        Learn only the things that actually matters nd then explore the things
        that sparks your adrenaline.
      </>
    ),
  },
  {
    title: "In Depth Learning",
    Svg: require("../../static/img/feature_planet.svg").default,
    description: (
      <>
        Learn about how the things in javascript works under the hood from
        closures, protoypal inheritance and much more.
      </>
    ),
  },
  {
    title: "Make Connections",
    Svg: require("../../static/img/feature_globe.svg").default,
    description: (
      <>
        Join our discord server and make friends with awesome people and share
        your learnings to make this world a better place.
      </>
    ),
  },
  {
    title: "Get Free Resources",
    Svg: require("../../static/img/feature_bookStack.svg").default,
    description: (
      <>
        The Internet is full of great free resources and here you will get some
        of those which helped me a lot and will help you too.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
