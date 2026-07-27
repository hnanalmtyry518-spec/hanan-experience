import { useInView } from "react-intersection-observer";

function useScrollReveal() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return { ref, inView };
}

export default useScrollReveal;