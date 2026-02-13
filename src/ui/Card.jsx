import { cn } from "./utils";

/* 
   Main Card Wrapper
*/
export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border p-6 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* 
   Card Sections
 */

export function CardHeader({ className, children }) {
  return <div className={cn("mb-4 space-y-1", className)}>{children}</div>;
}

export function CardTitle({ className, children }) {
  return <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>;
}

export function CardDescription({ className, children }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}

export function CardContent({ className, children }) {
  return <div className={cn("text-sm", className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return (
    <div className={cn("mt-4 flex items-center gap-3", className)}>
      {children}
    </div>
  );
}
