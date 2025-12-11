"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

interface OnlineMeetingDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function OnlineMeetingDialog({ isOpen, onClose }: OnlineMeetingDialogProps) {
  const [meetingName, setMeetingName] = useState("")
  const [meetingLink, setMeetingLink] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ meetingName, meetingLink })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Take Notes From Online Meeting</DialogTitle>
          <DialogDescription>
            Using Online Bot For Google Meet
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              placeholder="Nama meeting (opsional)"
              value={meetingName}
              onChange={(e) => setMeetingName(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Paste URL Google Meet anda disini
            </p>
            <div className="relative">
              <Input
                placeholder="Meeting link"
                value={meetingLink}
                onChange={(e) => setMeetingLink(e.target.value)}
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => navigator.clipboard.writeText(meetingLink)}
                type="button"
              >
                <IconCopy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#6b4eff] hover:bg-[#5a3ee6]">
            Mulai
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
