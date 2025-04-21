import Image from "next/image";
import { logos } from "../../utils/content";

export default function Logo() {
  return (
    <section className="bg-gradient-to-top ">
      <div className="m-auto max-w-[90rem] px-24  max-xl:py-28">
        <p className="text-primary-50 last m-auto mb-20 text-center text-xl">
          Organizations powered by{" "}
          <span className="font-bold tracking-tight md:text-base">NoteFlow</span>
        </p>
        <div className="grid  ">
          <ul className="flex justify-between items-center gap-x-6">
            {logos.slice(0, 4).map((logo) => {
              return (
                <li key={logo.id}>
                  <Image
                    className="h-10 w-28 md:gap-0"
                    src={logo.src}
                    alt={logo.alt}
                    key={logo.id}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="flex justify-between gap-x-4">
            {logos.slice(4).map((logo) => {
              return (
                <li key={logo.id}>
                  <Image
                    className="h-10 w-28"
                    src={logo.src}
                    alt={logo.alt}
                    key={logo.id}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}