import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "landing/letter.svg",
    description: (
      <>
        PaperEdit feels like a standard text editor, and should make anyone who
        is used to working with text feel right at home.{" "}
        <a href="docs/concepts#cutting-sections">Cutting audio</a> is as easy as{" "}
        <strike>striking</strike> text.
      </>
    ),
  },
  {
    title: <>Uncluttered</>,
    imageUrl: "landing/broom.svg",
    description: (
      <>
        PaperEdit strives to keep it's UI as clean as possible, so you can focus
        on your content instead of on the application you use.
      </>
    ),
  },
  {
    title: <>Completely Private</>,
    imageUrl: "landing/browser.svg",
    description: (
      <>
        PaperEdit works entirely within your browser and{" "}
        <a href="concepts#privacy-and-security">
          never sends any data anywhere
        </a>
        . You can work on sensistive material with the confidence it never
        leaves your machine.
      </>
    ),
  },
  {
    title: <>Flexible and Adaptable</>,
    imageUrl: "landing/plumbing.svg",
    description: (
      <>
        PaperEdit imports and <a href="docs/exports">exports</a> a variety of
        plain text formats such as CSV and JSON, so you can always plug it into
        your workflow with ease.
      </>
    ),
  },
  {
    title: <>Keyboard Centered</>,
    imageUrl: "landing/electronics.svg",
    description: (
      <>
        PaperEdit is meant to be driven from the keyboard. Edit and Navigate
        your project without ever reaching for the mouse.{" "}
        <a href="docs/keybindings">Keybindings</a> are customizable as
        well, so you can make it fit exactly your preferences.
      </>
    ),
  },
  {
    title: <>Instant Preview</>,
    imageUrl: "landing/timer.svg",
    description: (
      <>
        Know exactly how long your edit is at any moment with a dedicated{" "}
        <a href="docs/getting-started#skip-striked-sections">
          Edited Time Counter
        </a>
        . You can also skip cut out sections during playback so you can hear
        exactly what is going to be exported.
      </>
    ),
  },
  {
    title: <>Audio Exports</>,
    imageUrl: "landing/musical-note.svg",
    description: (
      <>
        <a href="docs/exports#mp3-or-wav">Export audio</a> cuts of your current
        edit to easily send to colaborators.
      </>
    ),
  },
  {
    title: <>Installable and Offline Ready</>,
    imageUrl: "landing/connection.svg",
    description: (
      <>
        PaperEdit can be <a href="docs/settings#install">installed</a> from the
        browser and used completely offline like a native app. Work on your
        commute, on the airplane or anywhere you like.
      </>
    ),
  },
  {
    title: <>Free</>,
    imageUrl: "landing/freedom.svg",
    description: (
      <>
        PaperEdit is free to use. No subscriptions, license keys, iLoks nor any
        other obstacles. If you use PaperEdit for work please consider donating.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div class="alert alert--warning" role="alert">
        <strong>NOTE:</strong> PaperEdit is currently in open testing phase.
        Features might be added or removed and things might not be as stable as
        you might expect.
      </div>

      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="hero__logo">
            <svg
              class="logo"
              id="logo"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" fill="#C75C5C" r="32" />
              <path
                d="M44 38c-6.188 0-8.187-2.868-8.187-2.868L16 14c0 19.062 19.525 24.06 19.525 30.259 0 1.896.476 3.467 1.035 4.667C37.729 51.895 40.616 54 44 54a8 8 0 000-16zm0 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                fill="#231F20"
                opacity=".2"
              />
              <path
                d="M44 36c-6.188 0-8.187-2.868-8.187-2.868L16 12c0 19.062 19.525 24.06 19.525 30.259 0 1.896.476 3.467 1.035 4.667C37.729 49.895 40.616 52 44 52a8 8 0 000-16zm0 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                fill="#E0E0D1"
              />
              <path
                d="M28.187 35.132S26.188 38 20 38a8 8 0 000 16c3.384 0 6.271-2.105 7.44-5.074a10.99 10.99 0 001.035-4.667C28.475 38.06 48 33.062 48 14L28.187 35.132zM20 50c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                fill="#231F20"
                opacity=".2"
              />
              <path
                d="M28.187 33.132S26.188 36 20 36a8 8 0 000 16c3.384 0 6.271-2.105 7.44-5.074a10.99 10.99 0 001.035-4.667C28.475 36.06 48 31.062 48 12L28.187 33.132zM20 48c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                fill="#E0E0D1"
              />
              <circle cx="32" cy="33" fill="#4F5D73" r="1.5" />
            </svg>
          </div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            Edit audio how you <strike>edit</strike> text
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("https://paperedit.app")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
