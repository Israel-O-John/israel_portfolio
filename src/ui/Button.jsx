const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 ";

const sizes = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9 rounded-md",
};

export function Button({
  children,
  size = "default",
  className = "",
  ...props
}) {
  return (
    <button className={`${baseStyles} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  children,
  size = "",
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      className={`${baseStyles} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
