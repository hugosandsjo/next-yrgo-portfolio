import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Image src="/grassyhill.jpg" width="500" height="500" alt="grassy hill" />
    </main>
  );
}
