import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        epPrimary: "text-Montserrat hover:bg-bluePrimary-600 w-fit text-md font-medium bg-bluePrimary-700 text-white",
        secondary: "text-Montserrat border-2 border-solid border-bluePrimary-600  w-fit text-md font-medium text-bluePrimary-700"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-10 max-sm:h-8 max-sm:rounded max-md:h-9 rounded-md px-3 text-xs",
        xs: "h-8 rounded-none px-2 text-xs",
        lg: "h-14 rounded-md px-10",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "epPrimary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
