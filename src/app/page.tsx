import Redirect from '@/components/base/redirect';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col p-5 pb-16 sm:p-10 sm:pt-32 bg-primary text-secondary">
      <Image
        src="/icon.svg"
        className="mb-10 sm:hidden"
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="pb-3 text-3xl">Salut ! Je suis Benjamin</h1>
      <p className="pb-2">Software Engineer</p>
      <p className="my-8 sm:px-40 font-light">
        Après presque une décennie dans le travail social, je me suis reconverti
        dans le développement web en 2021. J&apos;ai maintenant une expérience
        variée, associée à une grande curiosité et un véritable intérêt pour le
        domaine technologique. Je prends beaucoup de plaisir à concevoir,
        maintenir et faire évoluer les projets sur lesquels je travaille.
      </p>
      <div className="flex">
        <Redirect href="https://github.com/BenjaminChoron">Github</Redirect>
        <Redirect href="https://www.linkedin.com/in/bchoron/">
          LinkedIn
        </Redirect>
      </div>
    </main>
  );
}
