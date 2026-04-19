import { PropsWithChildren, CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
}

export const Reveal = ({ children, delay = 0, className, as: Tag = "div" }: PropsWithChildren<RevealProps>) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag ref={ref as never} style={style} className={cn("reveal", inView && "in", className)}>
      {children}
    </Tag>
  );
};
