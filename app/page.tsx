import InputForm from "./components/InputForm";
// import NameCard from "./components/NameCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-20 bg-gray-50 h-screen">
      <div className="mb-40">
        <InputForm />
      </div>
      {/* <div className="flex flex-wrap gap-10">
        NameCards will go here
      </div> */}
    </div>
  );
}
