import Container from "@/components/ui/Container";
import Hero from "@/components/NotFoundPage/Hero";

export default async function NotFound() {
  return (
    <Container>
      <Hero
        title={"404"}
        subtitle={"La página que buscas no existe"}
        button={"Volver a la página principal"}
      />
    </Container>
  );
}
