import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { title } from "process";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Designer (Nagarajan)",
      image:
        "https://n876yi368y.ufs.sh/f/rkfoB8QIhcPLzdtRYSFZifDau10lXPYrMk4NUAvK5Q9tsLyb",  
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "SEO & AI (Lokesh)",
      image:
        "https://n876yi368y.ufs.sh/f/rkfoB8QIhcPLia5AcLt1lNnyfj57KcWmUHQpREhPIJGbqVrt",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Camera Department and Director (Madana Gopal)",
      image:
        "https://n876yi368y.ufs.sh/f/rkfoB8QIhcPLnQHgLJadKEx9ArzUB6p732H8C0vkbSoIR1tY",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "Video Edtior (Aswin)",
      image:
        "https://n876yi368y.ufs.sh/f/rkfoB8QIhcPLwfwTRa34phTjYwRXuVv7KNoeit2Fay6If0JB",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Guest Relation Officer (Kartheeswaran)",
      image: "https://n876yi368y.ufs.sh/f/rkfoB8QIhcPL6mjwEMyd9eHm1WEzrGYVq8pCQbLyZKBhMu60",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Marketing (Kishor)",
      image:
        "https://n876yi368y.ufs.sh/f/rkfoB8QIhcPLMtRALyS6IxwsFy0135BWNS7VPYZbjXLqcian",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Website Development AI (Amarnath)",
      image:
        "https://n876yi368y.ufs.sh/f/rkfoB8QIhcPLEhYwZuz4byKzvJudmZgn97ojrflqVHTBGc8w",      
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        This is Our Team
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
