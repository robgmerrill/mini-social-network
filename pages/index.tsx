import Head from "next/head";
import Link from "next/link";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Loader show={true} />
      <Link href="/">Go to somewhere</Link>
    </div>
  );
}
