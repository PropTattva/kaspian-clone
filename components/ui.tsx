import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow() {
  return (
    <svg className="btn__arrow" width="10" height="10" viewBox="0 0 9.8 9.8" aria-hidden="true">
      <path d="m.4 9.4 9-9M.4.5h8.9M9.3 9.4V.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline" | "light" | "outline-light" | "navy" | "text";
  className?: string;
};

export function Button({ href, children, variant = "filled", className = "" }: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a className={cls} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</p>;
}

/** Two-line display headline: the second line renders in copper. */
export function Title({
  first,
  second,
  as: Tag = "h2",
  className = "",
}: {
  first: string;
  second?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`title ${className}`.trim()}>
      {first}
      {second && (
        <>
          <br />
          <em>{second}</em>
        </>
      )}
    </Tag>
  );
}
