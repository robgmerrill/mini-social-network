import Head from "next/head";
import Link from "next/link";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <h1>Home Page New</h1>
      <button onClick={() => toast.success("Hello Toast")}>Toast</button>
    </div>
  );
}
