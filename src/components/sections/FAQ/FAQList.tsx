import React from "react";
import { motion } from "framer-motion";
import FAQ from "./FAQ";

// Interface for FAQ props
export interface FAQProps {
  category?: string;
  questions: string[];
  activeQuestion: number | null;
  handleQuestionClick: (id: number | null) => void;
}

// FAQList Component
const FAQList: React.FC<FAQProps> = ({
  category,
  questions,
  activeQuestion,
  handleQuestionClick,
}) => {
  const [inView, setInView] = React.useState(false);

  return (
    <motion.ul
      className="m-auto flex max-w-[51.625rem] flex-col "
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: "easeIn",
          },
        },
      }}
      key={category}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: "some" }}
    >
      {questions.map((question, index) => (
        <FAQ 
            key={index}
            question = {question}
            activeQuestion = {activeQuestion}
            handleQuestionClick = {handleQuestionClick}
        />
      ))}
    </motion.ul>
  );
};

export default FAQList;
