"use client";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { useGetCallById } from "@/hooks/usegetcallbyId";
import { useParams } from "next/navigation";
import Meetingsetup from "@/components/Meetingsetup";
import MeetingRoom from "@/components/MeetingRoom";
import Loader from "@/components/Loader";
const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  //  const {id} = useParams()

  const { user, isLoaded } = useUser();
  const [issetupcompleted, setissetupcompleted] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);
  if (isCallLoading || !isLoaded) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!issetupcompleted ? (
            <Meetingsetup setissetupcompleted={setissetupcompleted} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
