"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
const Meetingsetup = ({
  setissetupcompleted,
}: {
  setissetupcompleted: (value: boolean) => void;
}) => {
  const { toast } = useToast();
  const [ismiccamToggleOn, setismiccamToggleOn] = useState(false);
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");
  const call = useCall();
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Meeting Link Copied",
      });
    } catch (err) {
      toast({
        title: "Meeting Link Copied",
      });
    }
  };
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [router]);
  if (!call) throw new Error("Stream call must be within StreamCall Component");

  useEffect(() => {
    if (ismiccamToggleOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [ismiccamToggleOn, call.camera, call.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white ">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="h-16 flex items-center justify-center gap-3 ">
        <label className="flex items-center  justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={ismiccamToggleOn}
            onChange={(e) => setismiccamToggleOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>

      <div className="flex gap-6">
        <Button
          className="bg-green-500 rounded-md px-4 py-2.5 "
          onClick={() => {
            call.join();
            setissetupcompleted(true);
          }}
        >
          {" "}
          Join Meeting
        </Button>
        <Button
          className="bg-blue-1 rounded-md px-4 py-2.5 "
          onClick={copyToClipboard}
        >
          {" "}
          Copy Link
        </Button>
      </div>
    </div>
  );
};

export default Meetingsetup;
