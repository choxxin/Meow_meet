"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./ui/button";
const Meetingsetup = ({
  setissetupcompleted,
}: {
  setissetupcompleted: (value: boolean) => void;
}) => {
  const [ismiccamToggleOn, setismiccamToggleOn] = useState(false);

  const call = useCall();

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
    </div>
  );
};

export default Meetingsetup;
