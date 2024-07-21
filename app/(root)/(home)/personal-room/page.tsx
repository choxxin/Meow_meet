"use client";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/Videoplayer";
import React, { useState } from "react";

const page = () => {
  const [gifIndex, setgifIndex] = useState<number>(5);
  const handleRandomGif = () => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * arr.length);
    setgifIndex(randomIndex);
  };
  const arr = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3cwNXhvMnA5bXhzcGE4cDJ2MmJlYTVmZWtnb2xmNGhqeDFqeThqdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jUJgL0iByjsAS2MQH1/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2VqaHlmY2E2anlzYzVkeTZ4azhoNWFna2plZHd1ZGJiMDNxcmpxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/muzaYMXAENjiw/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajRncnNhMm12aG5nbGVpMnZhbjFnNzZ2ejhmdHlsdWFyNXEzbHV1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vMSXa7KFGx49aeeXhe/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHpkbm0wbnMyZDV6ZWFjbDRsc3c0a3F2MXdhNnhxeG85am5lMGpvcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUpvkRuLKE4xMBJLvH/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmIwa213dzNkZmtudnNsbDQ4MTcxNzdoMGxuNjV6bTdqd2prZTBwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6IcLJFT5bHqZ4zYWi5/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGtuaWtnMmNwOHJpdDV3Mjg4YjMwZGFseTJxbmV6Z3YyY21sYWZjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2seKKLp1n0sEeJLYTK/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2poanl0NHlsa2ozc2xtenFjd2F5NDIwZ3dwdTA2dmFqYTFjZzZ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dgnKp1yg4uJioLUxe0/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGh5M2RhbXZicm81ZDN2Z25uYjRqYXhmeXV2NTJjeDd3OGt2YWI3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dSdSQmzlJopuqueF2i/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3U0dmZiZTltbzlsZ3JwdXgzYXo0NzNkMWIzN2FwZHA0MnJqODlzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2tRotesF1srMinrbTg/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnY2dXVnZmY3cTJqZG5icnVnZHFwZHN1N25vcG5odmJ0MzhhcnEwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v2WuhMBzb3h5e/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXp2aXM3b3ZkYXE0Y2I1OWtwMWE0dms0dWhjdWlpa3d1ZWRyN2xyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zIV7iWK9f0x8Y/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTVjNTRwbjlwcHhwM294dmF3NzVqMmU0aDI0OGZ0MTRjdG95bjZpeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tXzFpjeqVnE7m/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWxtaGU3ZnpnZHAyeGlmOThmbWpjbmVheHdxdnI2bmcweDU0cjE3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E8GfFH47PKeyI/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3p2Nmo4cWR2YjFrbTVocTJhMjkwZWN5dDFkM2xmdWpmdXFhczQ0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k5zu35npVsYfgZQwwl/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmp6ZjRwZHJqYWl2aTJmZXhmbW9xcWEyamZueWY1eXFsZXN1NHRzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2yzgWbRc97QOIUpklz/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHNrOXJxZDBueXgzMWp0bnpibjc0dGw0cXAxbm11MnR3dXg2azBrZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LUTXAsZZeUDpUrToCN/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXNpMGhzZm42dXUxOXJqbjF5c2F5MWExcGtrcHB3NGk1ZHQweWttbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4TfitFxGHD2GZHvTne/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA1Njc3M3h4dTlvZXhrYmk1MGZhbWtlYXFqcm43OG9sbnpjZTRzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BMu2SwuXflOlQP8jTC/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA1Njc3M3h4dTlvZXhrYmk1MGZhbWtlYXFqcm43OG9sbnpjZTRzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BMu2SwuXflOlQP8jTC/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJ5aHJub2FyOWw0eXFmNXQxODdmbGsxbXNmOTh5M2oxNGZranJhaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/451shsqh5nJ9UqDElR/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmUxMmszdG04b2xtaXp1emdrdzI0Y2ZzYzh3bjdlOHgwZnd3cG94MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3gTmgzy7wYJfyaGRHQ/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnJyY2tvc2F0ZnFiemxtNnRjdHZ5MTIwdjMwM2R4czAwN3M4a3hxZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rqt6ZufiNO2Z6NDbXs/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnM4ZW5xaWtwYXduMm92d25zZHJ5YTY0N29ybXUxcnRzNzN5Y2tnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohze1y2AJUOHiid8I/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc21xbzU1c3JrcWVxdXh5cnlvYXJ6c2cwNTY2M2RxcGp6cXBmMDA4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KMgPHp5bI60qDWPy1A/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXc0ZHIxN2l2djd0bmFueDFvdGQ0NGdjZ3FtMHhsY3JpeXFmaGw2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6nUYHTslEpwT2xfW/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanRieHJndXA5NmJheWZkeW9keThjMHBncm5kYnA4OHRiNmQ0bHIzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/327AjgrPwKutwQAiD2/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnZ3aXU1dTFnNzNqZmtkYTcwcnFoejJ6eWJzOGZ3N2ZzNW12Mm0zayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dWly35oUHmiHgMH5cF/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGtrbmd2dTF0enk2MjJobmNuZ3U5MWw3dDB6ZDl6OGQwYWxlbWx0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mpa7i9hclsdWe6qf3H/giphy.webp",

    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM216cXAycDZ4ejVxOGhkaGQxenFwMzU1ODQ2ZTh5N2EyNjh1a291ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I4x1vzDnRPj8ZJhBBg/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJ6dnhzOXd6bzY3MDY2YWNubDg4djI4d2RmaTdnMmRlbHFqazljdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NFPgCLFc7ewJh4XZMN/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzM1NGIzamxjZmJsZXA5ajE3djljbTRzMGU5aGRkeGhpeGdkczBlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohjUWqg9Mo3d6gpeU/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGxibHRzeG5heDF5M29kaGxpOXM1Y3NzM2RhZHdoaWtscnU1OHY2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b7NcNsqlPF50YM/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZ2MmI0NWt4aW0ydG9tZGM2Y2kybjl5OTFzenBnOGQ4YnBiejVwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6nV0hAzKuFA3RFgQ/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2p0M2IwamcxMzF5NjFiYjU3bDI3ZzV6dHR3cnFzbXpodG13c2J6ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9PXGOip8HZZ0kw/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3E2czI2NXpwbjBlejdmaTFiNG5sbGN2dndzZmhxMWNjYzRqZmRoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8F62ttKOw1FlXLn0QC/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExemU4eWFzYTByaHhkbzMwOGJzb3JpcXIwbXdzaWRqN3E0cDN2MzR6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0DAIy0z1Vs6SGEHC/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBtMG91NmIzYjR6cjc0b28yeWt4aDdyaXBncWVveGxrcWRqdGdleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WKe4bIt6gmffoWXjI9/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDMxZmliaWJiMml3bnExYzVlbGg2eHpobmwzcXR4bmN2Nms2bGhyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D8qXEyYgBvrzFSIE2y/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnExZ29iNGo3eGI0ZG43d3J5ODg5MDB6enp5dTRxMG90bjB2anF0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J676zGaTZKalvmUY7b/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemhmdm5pczhuOGZheGtnNHZlanhvcmF0anVnbmI1eW10Y281M3o1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNda1DmY15kE5sVpu/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXh6b2duNndlOXB4YmhmYmFzcXQwYmJiMWR5ZHhwYThsYmg3bTVsNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNda5W3AKdn3yZJxS/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjNsa3FzYXZ4ZGFmeHZ3dm81OGxwb2xxcDhybXE0Mm5sem9xcW5zYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohjUV0R8OSAWJIHO8/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjVldDM1bHI3amdyNHhwcGZ0Z2dtbjBmYThza3c4a2gwZHprajFnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohjVaFMwq7QrDKEy4/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXZieThieGw1NjByYXlnYXMwc3c0YnF2YWQ4Y2Vreng0MGhqbHZiNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNd9TtwDjOVMVF4GY/giphy.webp",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWExOHMxcnZmdzhvd25mcXU4M3M4OG1kc3lxM2pvYjdwb281YTM3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNda44zwtHDg3PyaQ/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzBhemNuZTFhMjhyaTBxc2xwZDBsYTB2YWZ5dXR2Nmc5MGpycHY1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohjV6G9UwkB190zbq/giphy.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpqa2NuejRlcW91bGxhcG16MGQ0Z2J3ZWxoc3h4OG9iNm1tMXZ0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WnCE8LI1PsOc09M6Sn/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZta2lzbzM5NWQ5NGlvejdyc2JoNm9yZHA0aHdlNXVmNmIzZjZnNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RlHpuVwtbvdIBXzm2z/giphy.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpnYmJwcGp6YWZ2dW51aW93NWcybHAwMWE3djV0aWl0NTVpeHdhdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SXCTtRsU9GmApnfWRi/giphy.webp",
  ];
  // <div className="  glass h-full w-full mx-5">
  //         <VideoPlayer />
  //       </div>
  return (
    <div className="flex flex-col flex-between gap-14 ">
      <section
        className="flex flex-col size-full gap-10 max-h-86 "
        style={{
          backgroundImage: `url(${arr[gifIndex]})`,
          backgroundSize: "100% 80%", // Ensures the image covers the entire background
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the image within the container
        }}
      >
        <div className="flex flex-col gap-4 ">
          <h1 className="text-3xl font-bold text-white font-serif">
            Lofi Stream
          </h1>
          <Button onClick={handleRandomGif} className="w-24 h-14">
            Change GIF
          </Button>
        </div>

        <div className="w-full flex   gap-8 min-h-14  mt-80     ">
          <div className="wave bg-lightblue h-24 w-full my-2 flex justify-center items-center"></div>
          <div className="wave bg-lightgreen h-24 w-full my-2 flex justify-center items-center"></div>
          <div className="wave bg-lightcoral h-24 w-full my-2 flex justify-center items-center"></div>
        </div>
      </section>
      <div>
        <div className="  glass h-full w-full mx-5">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};

export default page;
