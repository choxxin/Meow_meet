"use client";
import React from "react";
import HomeCard from "./HomeCrad";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModals from "./MeetingModals";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast";
// import { TiTick } from "react-icons/ti";
const initialValues = {
  dataTime: new Date(),
  description: "",
  link: "",
};
const MeetingTypeList = () => {
  const router = useRouter();
  const { toast } = useToast();
  // Add your logic here to handle meeting state and navigation to meeting pages{
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const [values, setvalues] = useState(initialValues);
  const [callDetail, setcallDetail] = useState<Call>();
  const user = useUser(); // return the current auth state
  const client = useStreamVideoClient();
  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dataTime) {
        toast({ title: "Please select a date and time" });
        return;
      }
      const id = crypto.randomUUID(); //gives random id
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create call");

      const startsAt =
        values.dataTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setcallDetail(call);
      //dobt;
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: `Meeting Created ✅`,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting ",
      });
    }
  };

  return (
    <section className="grid grid-col-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />
      <MeetingModals
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
