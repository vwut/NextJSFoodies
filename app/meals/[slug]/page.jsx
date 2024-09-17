import Link from "next/link";

export default function MealPostPage() {
  return (
    <main>
      <header>
        <h1><Link href="/meals" className='link'>Back</Link></h1>
        <h1>Super Special Meal Post</h1>
      </header>
    </main>
  );
}
