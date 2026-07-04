"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePlayground } from "@/modules/playground/hooks/usePlayground";
import { useParams } from "next/navigation";
import React from "react";

const MainPlaygroundPage = () => {
  const { id } = useParams<{ id: string }>();

  const { playgroundData, templateData, isLoading, error, saveTemplateData } =
    usePlayground(id);

  console.log("temp",templateData);
  console.log(playgroundData);

  return (
    <TooltipProvider>
      <>

        <SidebarInset>
           
        </SidebarInset>
      </>
    </TooltipProvider>
  )
};

export default MainPlaygroundPage;
