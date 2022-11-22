import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing Component - coded by joehsn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Our Pricing
  Annually
  Monthly */}

        {/* Basic
  &dollar;19.99
  &dollar;199.99
  500 GB Storage
  2 Users Allowed
  Send up to 3 GB
  Learn More */}

        {/* Professional
  &dollar;24.99
  &dollar;249.99
  1 TB Storage
  5 Users Allowed
  Send up to 10 GB
  Learn More */}

        {/* Master
  &dollar;39.99
  &dollar;399.99
  2 TB Storage
  10 Users Allowed
  Send up to 20 GB
  Learn More */}
        <footer className="attribution">
          Coded by <a href="#">Your Name Here</a>.
        </footer>
      </main>
    </>
  );
}
