"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MeetingCard from "@/components/custom/MeetingCard"
import { IconCloudUpload, IconSearch, IconLayoutGrid, IconList } from "@tabler/icons-react"

export default function UploadsPage() {
  const meetings = [
    {
      id: 1,
      tag: "My Meeting",
      type: "video",
      date: "Senin, 8 September 2025 12:55",
      title: "Rapat HMIF Periode 2025/2026",
      description:
        "Pada rapat ini membahas tentang pengkajian ad/art periode himpunan 2025/2026, banyak sekali perubahan ad/art karena sudah tidak relevannya dengan zamannya.",
    },
    {
      id: 2,
      tag: "My Meeting",
      type: "video",
      date: "Senin, 8 September 2025 12:55",
      title: "Rapat HMIF Periode 2025/2026",
      description:
        "Pada rapat ini membahas tentang pengkajian ad/art periode himpunan 2025/2026, banyak sekali perubahan ad/art karena sudah tidak relevannya dengan zamannya.",
    },
    {
      id: 3,
      tag: "My Meeting",
      type: "video",
      date: "Senin, 8 September 2025 12:55",
      title: "Rapat HMIF Periode 2025/2026",
      description:
        "Pada rapat ini membahas tentang pengkajian ad/art periode himpunan 2025/2026, banyak sekali perubahan ad/art karena sudah tidak relevannya dengan zamannya.",
    },
    {
      id: 4,
      tag: "My Meeting",
      type: "video",
      date: "Senin, 8 September 2025 12:55",
      title: "Rapat HMIF Periode 2025/2026",
      description:
        "Pada rapat ini membahas tentang pengkajian ad/art periode himpunan 2025/2026, banyak sekali perubahan ad/art karena sudah tidak relevannya dengan zamannya.",
    },
  ]

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-6 py-6">
              {/* Upload Dropzone */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="border-2 border-dashed border-[#E2D9FF] rounded-xl bg-[#FBFAFF]">
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="rounded-full bg-[#EFE8FF] p-3 text-[#6b4eff] mb-4">
                          <IconCloudUpload className="h-6 w-6" />
                        </div>
                        <h2 className="text-[15px] font-semibold text-[#1E1E1E]">Upload A File To Generate A Transcript</h2>
                        <p className="mt-1 text-xs text-[#6B6B6B]">Browse Or Drag And Drop MP3, WAV, Or MP4 Files. (Max Video Size 100MB)</p>
                        <Button className="mt-5 bg-[#6b4eff] hover:bg-[#5b41ff] text-white">Upload Your Meeting</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Meeting History Header */}
              <div className="px-4 lg:px-6">
                <div className="flex items-end justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1E1E1E]">Meeting History</h3>
                    <p className="text-xs text-[#6B6B6B]">Cari Meeting Anda Yang Telah Dibuat</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-[260px]">
                      <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-9" placeholder="Search Notes..." />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="All Notes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Notes</SelectItem>
                        <SelectItem value="mine">My Notes</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="today">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Today" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center rounded-md border bg-white p-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6B6B6B]">
                        <IconList className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6B6B6B]">
                        <IconLayoutGrid className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Cards */}
              <div className="px-4 lg:px-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {meetings.map((item) => (
                    <MeetingCard key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
