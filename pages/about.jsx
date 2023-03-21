import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <p>My name is John Doe and I am a software developer.</p>
      <Link href="/">Go back to home page</Link>
    </div>
  );
}
