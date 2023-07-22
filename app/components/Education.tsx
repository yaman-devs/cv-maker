"use client";

import { useState } from "react";

export default function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <>
      {" "}
      <h2 className="text-3xl text-center my-8">Educational Experience</h2>
      <div className="grid grid-cols-2 gap-4 px-8 text-black ">
        <input
          name="schoolName"
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
          type="text"
          placeholder="School Name"
          onChange={(value) => setSchoolName(value.target.value)}
        />
        <input
          type="text"
          name="titleOfStudy"
          placeholder="Title Of Study"
          onChange={(value) => setTitleOfStudy(value.target.value)}
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
        />
        <input
          type="date"
          name="startDate"
          onChange={(value) => setStartDate(value.target.value)}
          placeholder="Start Date"
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
        />
        <input
          type="date"
          name="EndDate"
          onChange={(value) => setEndDate(value.target.value)}
          placeholder="End Date"
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
        />
      </div>
    </>
  );
}
