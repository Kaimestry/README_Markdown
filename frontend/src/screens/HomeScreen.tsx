import FormEditor from "../components/FormEditor";
import TextToolbar from "../components/TextToolbar";

export default function HomeScreen() {
  return (
    <div>
      <TextToolbar />
      <div className="w-full">
        <FormEditor />
      </div>
    </div>
  );
}
