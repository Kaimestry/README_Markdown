import Container from "./Container";

export default function Preview() {
  return (
    <Container
      header={
        <div className="pl-3 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-sm font-semibold p-2 text-text">preview</h1>
        </div>
      }
    >
      <div className="text-lg m-3 border">Readme Review</div>
    </Container>
  );
}
