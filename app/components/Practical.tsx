"use client";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { after } from "node:test";
import { useState } from "react";

export default function Practical() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [resp, setResp] = useState(Array<string>);

  return (
    <>
      {" "}
      <h2 className="text-3xl text-center my-8">Practical Experience </h2>
      <div className="grid grid-cols-2 gap-4 px-8 text-black ">
        <input
          name="companyName"
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
          type="text"
          placeholder="Company Name"
          onChange={(value) => setCompanyName(value.target.value)}
        />
        <input
          type="text"
          name="positionTitle"
          placeholder="Position Title"
          onChange={(value) => setPositionTitle(value.target.value)}
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
        />

        <div className="col-span-2 flex gap-2 ">
          <input
            type="text"
            name="resp"
            id="resp"
            placeholder="Main responsibilities of your jobs"
            className={
              "bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1 w-full text-center print:hidden "
            }
          />
          <button
            type="button"
            onClick={() => {
              const newResp = (
                document.getElementById("resp")! as HTMLInputElement
              ).value;

              newResp && setResp([...resp, newResp]);
            }}
          >
            <IoMdAddCircle className="text-green-700 bg-white rounded-lg text-2xl print:hidden" />
          </button>
        </div>
        {resp.length > 0 && (
          <div className="flex gap-4 flex-col col-span-2">
            {resp.map((items, key) => (
              <div className="flex gap-2">
                <div
                  className="bg-[#D9DCD6] border-2 border-[#2F6690] rounded-md pl-1 w-full text-center"
                  key={key}
                >
                  {items}
                </div>
                <button
                  data-value={items}
                  type="button"
                  className=" print:hidden"
                  onClick={(e) => {
                    const value = e.currentTarget.dataset.value;
                    const removeItem = resp.filter((item) => {
                      return item !== value;
                    });
                    setResp(removeItem);
                  }}
                >
                  <IoMdRemoveCircle className="text-red-700 bg-white rounded-lg text-2xl" />
                </button>
              </div>
            ))}
          </div>
        )}

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
