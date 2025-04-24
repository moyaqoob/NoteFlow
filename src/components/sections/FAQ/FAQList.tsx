import React, { type JSX } from "react";
import { motion } from "framer-motion";
import FAQ from "./FAQ";

// Interface for FAQ props
export interface FAQProps {
  category?: string;
  questions: {
    id: number;
    alt: string;
    Icon: ({ width, className, alt }: { width?: number | undefined; className: any; alt: any }) => JSX.Element;
    question: string;
    answer: string;
  }[];
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
      className="m-auto flex max-w-[51.625rem] flex-col -pt-24"
      initial={{x:10,y:100}}
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          transition: {
            staggerChildren: 0.5,
            ease: "easeInOut",
          },
        },
      }}
      key={category}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{once:false,amount:"all"}}
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
