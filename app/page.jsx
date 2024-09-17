import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header style={{ display: "inline-flex" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Time to get started!
        </h1>
      </header>

      <h2 style={{ textAlign: "center" }}>
        <Link href="/meals" className="link">
          Meals
        </Link>
      </h2>
      <h2>
        <Link href="meals/share" className="link">
          Share your meals
        </Link>
      </h2>
      <h2>
        <Link href="/community" className="link">
          Community
        </Link>
      </h2>
    </main>
  );
}
