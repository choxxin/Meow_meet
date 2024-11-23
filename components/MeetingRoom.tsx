"use client";
import { cn } from "@/lib/utils";
import html2canvas from "html2canvas"; // Import html2canvas
import { FaRegCopy, FaCamera } from "react-icons/fa";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useRouter, useSearchParams } from "next/navigation";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useState } from "react";
import { LayoutList, Loader, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type callLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const router = useRouter();
  const [layout, setLayout] = useState<callLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const [currentUrl, setCurrentUrl] = useState("");
  const callingState = useCallCallingState();

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  const geminiApiKey =
    process.env.GEMINI_API_KEY || "AIzaSyDi4MQ5UAxYq57fqemS0C1dqiUFDOMGZRE"; // Default to an empty string if undefined
  const genAI = new GoogleGenerativeAI(geminiApiKey);

  // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Replace with your actual Gemini API key
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // Function to send screenshot to the Hugging Face API
  const queryHuggingFace = async (data: Blob) => {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large",
        {
          headers: {
            Authorization: "Bearer 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", // Replace with your Hugging Face token
          },
          method: "POST",
          body: data,
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error querying Hugging Face API:", error);
      return null;
    }
  };
  const checkNSFWWithGemini = async (text: string) => {
    const prompt = `Determine if the following text contains vulgar or NSFW content. Respond with "Yes" or "No". Text: "${text}"`;
    const result = await model.generateContent(prompt);
    return result.response.text().trim(); // Expected to return "Yes" or "No"
  };

  // Function to capture screenshot and process it
  const handleScreenshot = async () => {
    try {
      const element = document.body; // Capture the entire body (or a specific element)
      const canvas = await html2canvas(element); // Capture screenshot
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((blob) => resolve(blob), "image/png");
      });

      if (blob) {
        toast({ title: "Processing screenshot with Hugging Face API..." });

        // Step 1: Get text from the screenshot using Hugging Face API
        const huggingFaceResponse = await queryHuggingFace(blob);
        const generatedText = huggingFaceResponse[0]?.generated_text;

        if (!generatedText) {
          toast({ title: "someone looking at screen" });
          return;
        }

        // Step 2: Show Hugging Face response toast
        toast({
          title: `Hugging Face Response: ${generatedText}`,
          duration: 5000, // This keeps the toast visible for 5 seconds
        });

        // Step 3: Wait for 5 seconds before sending text to Gemini API
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Introduce a 5-second delay

        // Step 4: Now, show the Gemini API toast
        toast({ title: "Sending text to Gemini API for NSFW check..." });

        // Step 5: Check NSFW content with Gemini API
        const nsfwCheck = await checkNSFWWithGemini(generatedText);

        // Step 6: Handle the NSFW check result
        if (nsfwCheck.toLowerCase() === "yes") {
          toast({
            title: "NSFW Content Detected",
            description:
              "The content contains vulgar or inappropriate material.",
            variant: "destructive", // Optional styling for a warning
          });
        } else {
          toast({
            title: "Content Safe",
            description: "No vulgar or NSFW content detected.",
          });
        }
      } else {
        toast({ title: "Failed to capture screenshot." });
      }
    } catch (error) {
      console.error("Error capturing screenshot:", error);
      toast({ title: "Error capturing screenshot." });
    }
  };

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="right" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  if (callingState !== CallingState.JOINED) return <Loader />;

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[900px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn(
            "h-[calc(100vh-86px)]  ml-2 transition-transform duration-300",
            {
              block: showParticipants,
              hidden: !showParticipants,
            }
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        <CallControls onLeave={() => router.push(`/`)} />
        <CallStatsButton />

        {/* Screenshot Button */}
        <button onClick={handleScreenshot}>
          <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <FaCamera size={20} className="text-white" />
          </div>
        </button>

        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <Users size={20} className="text-white" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default MeetingRoom;
