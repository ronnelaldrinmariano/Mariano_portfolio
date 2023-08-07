import React, { useEffect, useState } from "react";

const TypingText = ({ texts, typingSpeed, loopDelay }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      let currentIndex = currentTextIndex;
      let currentWord = texts[currentIndex];
      let nextWordIndex = (currentIndex + 1) % texts.length;
      let nextWord = texts[nextWordIndex];

      let delta = isDeleting ? -1 : 1;
      let remainingText = isDeleting
        ? currentText.slice(0, currentText.length - 1)
        : currentWord.slice(0, currentText.length + 1);

      setCurrentText(remainingText);

      if (remainingText === currentWord) {
        setIsDeleting(true);
        if (isDeleting && remainingText === "") {
          setIsDeleting(false);
          setCurrentTextIndex(nextWordIndex);
        }
      } else if (remainingText === "") {
        setIsDeleting(false);
        setCurrentTextIndex(nextWordIndex);
      }
    }, typingSpeed);

    return () => clearInterval(textChangeInterval);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed]);

  useEffect(() => {
    const loopInterval = setTimeout(() => {
      setIsDeleting(true);
    }, loopDelay);

    return () => clearTimeout(loopInterval);
  }, [currentTextIndex, loopDelay]);

  return <span className="text-[30px]">{currentText}</span>;
};

export default TypingText;
