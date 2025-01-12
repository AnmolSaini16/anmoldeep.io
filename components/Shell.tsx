import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const shellVariants = cva("flex flex-col gap-20 pt-14 pb-20", {
  variants: {
    variant: {
      default: "container",
      sidebar: "",
      centered: "container max-w-2xl justify-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

function Shell({
  className,
  as: Comp = "section",
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  );
}

export { Shell, shellVariants };
