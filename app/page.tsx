"use client";
import Education from "./components/Education";
import General from "./components/General";
import Practical from "./components/Practical";

export default function Home() {
  function submitHandeler(e: any) {
    e.preventDefault();
    window.print();
    console.log(e.target.lastName);
  }

  return (
    <main className="pt-8 bg-[#16425B] text-white h-screen">
      <h1 className="text-5xl text-center">CV CREATOR</h1>
      <form onSubmit={submitHandeler} className="flex justify-center flex-col ">
        <General />
        <Education />
        <Practical />
        <button
          type="submit"
          className="my-4 text-xl bg-[#D9DCD6] w-fit self-center text-black rounded-lg py-2 px-4 print:hidden"
        >
          Print
        </button>
      </form>
    </main>
  );
}
