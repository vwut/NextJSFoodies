import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header>
        <h1>
          <Link href=".." className="link">
            Back
          </Link>
        </h1>
        <h1>Meals Page</h1>
      </header>
      <main>
        <h2>
          <Link href="meals/share" className='link'>Share your meals</Link>
        </h2>
        <h2>
          <Link href="meals/post-1" className='link'>Post One</Link>
        </h2>
        <h2>
          <Link href="meals/post-2" className='link'>Post Two</Link>
        </h2>
      </main>
    </>
  );
}
