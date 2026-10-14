import Container from "./Container";

type PreviewProps = {
  text: string;
};

export default function Preview({ text }: PreviewProps) {
  return (
    <Container
      header={
        <div className="pl-3 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-sm font-semibold p-2 text-text">preview</h1>
        </div>
      }
    >
      <div className="m-5 min-h-5 text-sm whitespace-pre-wrap">{text}</div>
    </Container>
  );
}
