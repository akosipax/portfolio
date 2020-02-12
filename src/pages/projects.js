import React from "react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BuiltWith from "../components/builtWith"

import "../css/global.css"
import styles from "../css/projects.module.css"

import chromeExtBeforeGIF from "../images/screenshots/chromeext-before.gif"
import chromeExtAfterGIF from "../images/screenshots/chromeext-after.gif"
import psTests from "../images/screenshots/peppsnipp/ps-testscripts.png"
import psFrontEnd1 from "../images/screenshots/peppsnipp/ps-frontend1.png"
import psFrontEnd2 from "../images/screenshots/peppsnipp/ps-frontend2.png"
import psFrontEnd3 from "../images/screenshots/peppsnipp/ps-frontend3.png"
import selenium from "../images/logos/selenium.png"
import pytest from "../images/logos/pytest.png"
import python from "../images/logos/python.svg"
import qt from "../images/logos/qt.svg"

const ProjectsPage = () => (
  <Layout title="My work.">
    <SEO title="Projects" />
    <h3>
      <a href="https://github.com/paxcodes/peppsnipp">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The Pepperplate Snipper
      </a>
    </h3>
    <BuiltWith
      items={[
        {
          href: "https://www.python.org/",
          description: "Python",
          src: python,
        },
        {
          href: "https://docs.pytest.org/en/latest/",
          description: "PyTest",
          src: pytest,
        },
        {
          href: "https://selenium-python.readthedocs.io/",
          description: "Selenium",
          src: selenium,
        },
        {
          href: "https://pypi.org/project/PyQt5/",
          description: "PyQt5",
          src: qt,
        },
      ]}
    />
    <p>
      The Pepperplate Snipper exports recipes in your Pepperplate account as
      JSON and/or PNG screenshots.
    </p>
    <div
      className={`${styles.screenshots} screenshots flex text-center`}
      aria-label="screenshots of the project"
    >
      <figure className="flex-1">
        <Zoom>
          <img
            src={psTests}
            alt="Tests for the Pepperplate Crawler"
            className="shadow-md h-32 object-cover object-top"
          />
        </Zoom>
        <figcaption className="text-xs py-2 italic">
          Tests for the Pepperplate Crawler
        </figcaption>
      </figure>
      <figure className="flex-1">
        <Zoom>
          <img
            src={psFrontEnd1}
            alt="The GUI"
            className="shadow-md h-32 object-cover object-top"
          />
        </Zoom>
        <figcaption className="text-xs py-2 italic">The GUI</figcaption>
      </figure>
      <figure className="flex-1">
        <Zoom>
          <img
            src={psFrontEnd3}
            alt="The GUI"
            className="shadow-md h-32 object-cover object-top"
          />
        </Zoom>
        <figcaption className="text-xs py-2 italic">The GUI</figcaption>
      </figure>
    </div>

    <h3>
      <a href="https://babysleep.app">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The Baby Schedule Maker
      </a>
    </h3>
    <p>
      This page provides a sample nap schedule but unlike most—if not all—baby
      schedule generators, the time and length of naps or awake times can be
      adjusted.
    </p>
    <ul>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Test-driven: PHPUnit + Cypress
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        (PHP) Laravel
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        (Javascript) Vue.js + Vuex
      </li>
    </ul>

    <h3>SoundCloud Chrome Extension</h3>
    <p>
      A private chrome extension to check whether broadcasts are properly
      uploaded to SoundCloud. This turned a tedious 15-minute task into
      something that can be done in a few seconds.
    </p>
    <div
      className={`${styles.screenshots} screenshots grid`}
      aria-label="animation showing how the extension works"
    >
      <figure>
        <Zoom>
          <img
            src={chromeExtBeforeGIF}
            alt="results before the broadcasts were uploaded"
            className="shadow-md w-64"
          />
        </Zoom>
        <figcaption className="text-xs py-2 italic">
          before the broadcasts were uploaded to SoundCloud
        </figcaption>
      </figure>
      <figure>
        <Zoom>
          <img
            src={chromeExtAfterGIF}
            alt="results after the broadcasts were uploaded"
            className="shadow-md w-64"
          />
          <figcaption className="text-xs py-2 italic">
            after the broadcasts were uploaded to SoundCloud
          </figcaption>
        </Zoom>
      </figure>
    </div>
    <ul className="mt-8">
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Javascript
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Private Chrome Extension
      </li>
    </ul>

    <h3>
      <a href="https://www.insightforliving.ca">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        Insight for Living Canada
      </a>
    </h3>
    <p>
      Website for the organization, Insight for Living Canada&mdash;the
      Bible-teaching ministry of Charles (Chuck) Swindoll.
    </p>
    <ul>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Drupal 7
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Backend Development
      </li>
      <li className={`${styles.item} leading-tight`}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Social Media Metadata <em>for beautiful share previews</em>
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        ConstantContact and SoundCloud Integration
      </li>
    </ul>

    <h3>
      <a href="https://www.theshiyrpoets.com">
        <span role="img" aria-label="link">
          🔗
        </span>{" "}
        The SHIYR Poets
      </a>
    </h3>
    <p>
      Website for the band, The SHIYR Poets. The SHIYR Poets (pronounced
      “Sheer”) are Brian Doerksen, Calum Rees, Brian Thiessen and Teresa Trask.
      They aim to render each psalm in its entirety, singing songs of
      desperation, desire, justice and praise.
    </p>
    <ul>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Drupal 7
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Full-Stack Development
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Phase 1: Paypal Buttons
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Phase 2: Drupal Commerce
      </li>
    </ul>
  </Layout>
)

export default ProjectsPage
