import { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const GlassCard = ({ className, children, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div {...rest} className={cn("glass-tint rounded-3xl p-6 hover-lift", className)}>
    {children}
  </div>
);
