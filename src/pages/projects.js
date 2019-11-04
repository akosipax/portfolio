import React from "react"
import ImageZoom from "react-medium-image-zoom"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css"
import styles from "../css/projects.module.css"

import chromeExtBeforeGIF from "../images/screenshots/chromeext-before.gif"
import chromeExtAfterGIF from "../images/screenshots/chromeext-after.gif"
import psTests from "../images/screenshots/ps-testscripts.png"
import psFrontEnd from "../images/screenshots/ps-frontend.png"

const ProjectsPage = () => (
  <Layout title="My work.">
    <SEO title="Projects" />
    <h3>Pepperplate Snipper</h3>
    <p>
      The Pepperplate Snipper takes a screenshot of the recipes in your
      Pepperplate account and uploads them to your Dropbox account.
    </p>
    <p>
      This project is ongoing and source code can be found in{" "}
      <a className="linkRegular" href="https://github.com/paxcodes/peppsnipp">
        GitHub
      </a>
      .
    </p>
    <div
      className={`${styles.screenshots} screenshots grid`}
      aria-label="screenshots of the project"
    >
      <figure>
        <ImageZoom
          image={{
            src: psTests,
            alt: "Tests for Dropbox oAuth2",
            className: "shadow-md w-64 h-32 object-cover object-top",
          }}
        />
        <figcaption className="text-xs py-2 italic">
          Tests for Dropbox oAuth2
        </figcaption>
      </figure>
      <figure>
        <img
          src={psFrontEnd}
          alt="The prototype"
          className="shadow-md w-64 h-32 object-cover object-top"
        />
        <figcaption className="text-xs py-2 italic">The prototype</figcaption>
      </figure>
    </div>
    <ul className="my-6">
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        Test-driven: PyTest + Cypress
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        (Python) Flask
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        (Python) Selenium
      </li>
      <li className={styles.item}>
        <span role="img" aria-label="check">
          ✅
        </span>{" "}
        (Javascript/React) Gatsby.js
      </li>
    </ul>

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
        <ImageZoom
          image={{
            src: chromeExtBeforeGIF,
            alt: "results before the broadcasts were uploaded",
            className: "shadow-md w-64",
          }}
        />
        <figcaption className="text-xs py-2 italic">
          before the broadcasts were uploaded to SoundCloud
        </figcaption>
      </figure>
      <figure>
        <ImageZoom
          image={{
            src: chromeExtAfterGIF,
            alt: "results after the broadcasts were uploaded",
            className: "shadow-md w-64",
          }}
        />
        <figcaption className="text-xs py-2 italic">
          after the broadcasts were uploaded to SoundCloud
        </figcaption>
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
