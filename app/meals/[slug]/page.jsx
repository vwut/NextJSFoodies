import Link from "next/link";
import classes from './SlugPage.module.css';

export default function MealPostPage() {
  return (
    <main>
      <header>
        <h1><Link href="/meals" className={classes.back}>Back</Link></h1>
        <h1>Super Special Meal Post One</h1>
      </header>
    </main>
  );
}
