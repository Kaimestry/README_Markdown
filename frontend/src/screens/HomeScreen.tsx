import FormEditor from "../components/FormEditor";
import Preview from "../components/Preview";
import TextToolbar from "../components/TextToolbar";

export default function HomeScreen() {
  return (
    <main className="min-h-screen flex flex-col gap-10 pb-10">
      <TextToolbar />

      <div className="flex gap-5 mx-5 items-start">
        <div className="flex-1 min-w-0">
          <FormEditor />
        </div>

        <div className="flex-1 min-w-0">
          <Preview />
        </div>
      </div>
    </main>
  );
}
