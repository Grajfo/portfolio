"use client";
import AnimatedText from "../Components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../Components/Iconst";
import KmetijaProject from "../../public/images/kmetija-project.png";
import PartyLand from "../../public/images/Posnetek_partyland.png";
import NoImage from "../../public/images/no_image.jpg";

import { motion } from "framer-motion";

interface FetProject {
  type: string;
  title: string;
  summmary?: string;
  img: any;
  link: string;
  github: string;
}

const FramerImage = motion(Image);

const FeaturedProject = (project: FetProject) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounderd-br-2xl
        rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={project.link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full"
      >
        <FramerImage
          src={project.img}
          alt={project.title}
          width={1000}
          height={600}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="( max-width: 768px) 100vw,
           (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 
      lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        xs:text-base"
        >
          {project.type}
        </span>
        <Link
          href={project.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light
          sm:text-sm"
          >
            {project.title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {project.summmary}
        </p>
        <div className="mt-2 flex items-center dark:text-light">
          <Link href={project.github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={project.link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 
            text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = (project: FetProject) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
      rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={project.link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={project.img}
          alt={project.title}
          width={1000}
          height={600}
          className=""
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="( max-width: 768px) 100vw,
           (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base"
        >
          {project.type}
        </span>
        <Link
          href={project.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold dark:text-light
          lg:text-2xl"
          >
            {project.title}
          </h2>
        </Link>
        <div
          className="w-full mt-2 flex items-center justify-between dark:text-light
        md:text-base"
        >
          <Link
            href={project.link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>

          <Link href={project.github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function page() {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <div
          className="pt-16 w-full h-full inline-block z-0 bg-light dark:bg-dark p-32
        xl:p-24 lg-p-16 md:p12 sm:p-8"
        >
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl_gap-x-16 lg:gap-x-8 md:gap-x-0
          sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Geust house & camp Jelinc"
                summmary="
                Visit Kmetija Kamp Jelincic for a magical farm adventure! Explore the Soča River, Bovec area, and mountains from our cozy base. It's the perfect spot for awesome, playful escapades! 🌳🚀"
                link="https://kmetijakampjelincic.si/index_en.html"
                type="Website"
                img={KmetijaProject}
                github="https://github.com/Grajfo/kmetijakampjelincic"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Movie Finder"
                link="https://moviebrowser-zeta.vercel.app/"
                type="Website"
                img={NoImage}
                github="https://github.com/Grajfo/movie_app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Recipe Finder"
                link=""
                type="Website"
                img={NoImage}
                github="https://github.com/Grajfo/Recipe_app"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="E-commerce site"
                summmary="
                Discover a one-stop online shop for balloons and event decorations! Find quality and durable products perfect for all your special occasions. Your search for top-notch balloons ends here! 🎈✨"
                link="https://partyland.si/"
                type="E-commerce website"
                img={PartyLand}
                github="github.com"
              />
            </div>

            <div className="col-span-3 sm:col-span-12">
              <Project
                title="Arcade-Games"
                link="/"
                type="Mobile video game"
                img={NoImage}
                github="https://github.com/Grajfo/Arcade-Games"
              />
            </div>
            <div className="col-span-3 sm:col-span-12">
              <Project
                title="Dog breed analyzer"
                link="/"
                type="data science applications"
                img={NoImage}
                github="https://github.com/Grajfo/Analyze_dog_breeds_with_AI"
              />
            </div>
            <div className="col-span-3 sm:col-span-12">
              <Project
                title="Hospital meal prep api"
                link="/"
                type="Restful api"
                img={NoImage}
                github="https://github.com/Grajfo/hospital_meal.preperation_api_and_client/tree/main/HospitalApi"
              />
            </div>
            <div className="col-span-3 sm:col-span-12">
              <Project
                title="AHP Calculator"
                link="/"
                type="Application"
                img={NoImage}
                github="https://github.com/Grajfo/AHP-Calculator"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
