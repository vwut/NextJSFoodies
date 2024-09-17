import Link from "next/link";

export default function SharePage() {
  return (
    <header>
      <h1>
        <Link href='/meals' className='link'>Back</Link>
      </h1>
      <h1>Share Your Meals</h1>
    </header>
  );
}
