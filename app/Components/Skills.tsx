import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light
        lg:py-2 lg:px4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2
        className="font-bold text-8xl mt-64 w-full text-center
    md:text-6xl md:mt-32"
      >
        Skills
      </h2>

      <div
        className="w-full h-screen relative flex items-center 
    justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    xs:bg-circularLightSm xs:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light p-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Web design" x="32vw" y="-5vw" />
        <Skill name="Typescript" x="0vw" y="-20vw" />
        <Skill name=".NET" x="-25vw" y="18vw" />
        <Skill name="wordpress" x="-25vw" y="-18vw" />
        <Skill name="MySQL" x="18vw" y="18vw" />
        <Skill name="TailwindCss" x="32vw" y="-10vw" />
      </div>
    </>
  );
}

export default Skills;