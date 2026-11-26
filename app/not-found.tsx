import { Button, Title } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="page-hero page-hero--short">
      <div className="container page-hero__inner">
        <Title as="h1" first="Page not found." second="Let’s get you back." className="title--hero" />
        <p className="page-hero__sub">The page you were looking for has moved or no longer exists.</p>
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
