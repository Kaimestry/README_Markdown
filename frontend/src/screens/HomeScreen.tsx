import FormEditor from "../components/FormEditor";
import Preview from "../components/Preview";
import TextToolbar from "../components/TextToolbar";

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-10">
      <TextToolbar />
      <div className="flex gap-5 mx-5">
        <FormEditor />
        <Preview />
      </div>
    </div>
  );
}
