"use client";

import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={`fixed top-12 left-0 z-30 flex h-[calc(100vh-3rem)] w-72 flex-col border-r border-border bg-background transition-transform duration-200 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-sm font-semibold text-foreground">Projects</span>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close sidebar">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex flex-1 flex-col overflow-hidden">
        <TabsList className="mx-4 mt-3 w-auto">
          <TabsTrigger value="my-projects" className="flex-1">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1">
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="flex flex-1 items-center justify-center">
          <p className="text-sm text-muted-foreground">No projects yet.</p>
        </TabsContent>

        <TabsContent value="shared" className="flex flex-1 items-center justify-center">
          <p className="text-sm text-muted-foreground">Nothing shared with you yet.</p>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border p-4">
        <Button className="w-full" variant="secondary">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
