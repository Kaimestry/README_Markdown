type ContainerProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export default function Container({ header, children }: ContainerProps) {
  return (
    <main className="flex flex-col items-center rounded-lg w-full border border-border">
      <div className="bg-surface border-b rounded-t-lg border-border w-full">
        {header}
      </div>

      <div className="w-full">{children}</div>
    </main>
  );
}
