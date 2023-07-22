"use client";
import Image from "next/image";
import { useState } from "react";
import avatarImg from "@/public/avatar.png";

export default function General() {
  const [name, setName] = useState("Name");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8 relative">
        <input
          type="file"
          name="Image"
          onChange={({ target }) => {
            const file = target.files![0];
            setAvatar(URL.createObjectURL(file));
          }}
          className="absolute opacity-0 cursor-pointer w-[128px] h-[128px]"
        />
        {avatar ? (
          <Image alt="" src={avatar} width={128} height={0} />
        ) : (
          <Image
            alt="avatar"
            className="border-2 border-[#2F6690] rounded-lg bg-[#D9DCD6] p-2"
            src={avatarImg}
            width={128}
          />
        )}
      </div>
      <h2 className="text-3xl text-center my-8">General Information</h2>
      <div className="grid grid-cols-2 gap-4 px-8 text-black ">
        <input
          name="name"
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
          type="text"
          placeholder="First Name"
          onChange={(value) => setName(value.target.value)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(value) => setLastName(value.target.value)}
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
        />
        <input
          type="email"
          name="email"
          onChange={(value) => setEmail(value.target.value)}
          placeholder="Email"
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
        />
        <input
          type="tel"
          name="phoneNumber"
          onChange={(value) => setNumber(value.target.value)}
          placeholder="Phone Number"
          className="bg-[#D9DCD6] border-2 border-[#2F6690] focus-visible:outline-none rounded-md pl-1"
        />
      </div>
    </>
  );
}
