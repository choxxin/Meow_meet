import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Endcallbutton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localparticipant = useLocalParticipant();

  const isMeetingOwner =
    localparticipant &&
    call?.state.createdBy &&
    localparticipant.userId === call?.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <Button
      className="bg-red-500"
      onClick={async () => {
        await call.endCall();
        router.push("/");
      }}
    >
      {" "}
      End call for everyone
    </Button>
  );
};

export default Endcallbutton;
