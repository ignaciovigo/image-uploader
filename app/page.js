"use client";
import Done from "@/components/Done";
import InputBox from "@/components/InputBox";
import Loading from "@/components/Loading";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("initial");

  const newUrl = (data,state) => {
    setUrl(data)
    setStatus(state)
  }
  return (
    <main className='min-h-screen grid place-content-center bg-[#111111]'>
      
      <section className='rounded-lg px-4 py-6 gap-6 w-[402px] h-[469px] flex flex-col justify-center items-center ff-first'>
      {
        status === 'initial' && <InputBox  newUrl={newUrl}/>
      }
      {
        status === 'loading' && <Loading />
      }
      {
        status === 'done' && <Done url={url} newUrl={newUrl} />

      }
      </section>
    </main>
  );
}
