"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconCalendarPlus, IconVideo, IconMicrophone, IconClock, IconUsers } from "@tabler/icons-react"

export default function MeetingPage() {
  const upcomingMeetings = [
    {
      id: 1,
      title: "Weekly Team Sync",
      time: "10:00 AM",
      date: "Today",
      participants: 5,
      platform: "Google Meet",
      status: "scheduled"
    },
    {
      id: 2,
      title: "Project Review",
      time: "2:00 PM",
      date: "Tomorrow",
      participants: 8,
      platform: "Zoom",
      status: "scheduled"
    },
    {
      id: 3,
      title: "Client Presentation",
      time: "11:30 AM",
      date: "Dec 25",
      participants: 12,
      platform: "Microsoft Teams",
      status: "scheduled"
    }
  ]

  const recentMeetings = [
    {
      id: 1,
      title: "Design Review Meeting",
      date: "Dec 20, 2024",
      duration: "45 min",
      participants: 6,
      status: "completed",
      summary: "Discussed new UI mockups and user feedback"
    },
    {
      id: 2,
      title: "Sprint Planning",
      date: "Dec 19, 2024",
      duration: "1h 15min",
      participants: 8,
      status: "completed",
      summary: "Planned next sprint tasks and priorities"
    }
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
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* Header */}
              <div className="px-4 lg:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">Meeting Management</h1>
                    <p className="text-muted-foreground">Schedule and manage your meetings</p>
                  </div>
                  <Button className="flex items-center gap-2">
                    <IconCalendarPlus className="h-4 w-4" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Join Meeting</CardTitle>
                      <IconVideo className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        Enter Meeting Room
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Record Audio</CardTitle>
                      <IconMicrophone className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        Start Recording
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Upload Recording</CardTitle>
                      <IconVideo className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        Upload File
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Upcoming Meetings */}
              <div className="px-4 lg:px-6">
                <h2 className="text-lg font-semibold mb-4">Upcoming Meetings</h2>
                <div className="grid gap-4">
                  {upcomingMeetings.map((meeting) => (
                    <Card key={meeting.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold">{meeting.title}</h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <IconClock className="h-4 w-4" />
                                {meeting.time} • {meeting.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <IconUsers className="h-4 w-4" />
                                {meeting.participants} participants
                              </div>
                              <Badge variant="secondary">{meeting.platform}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              Join
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recent Meetings */}
              <div className="px-4 lg:px-6">
                <h2 className="text-lg font-semibold mb-4">Recent Meetings</h2>
                <div className="grid gap-4">
                  {recentMeetings.map((meeting) => (
                    <Card key={meeting.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold">{meeting.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{meeting.summary}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>{meeting.date}</span>
                              <span>{meeting.duration}</span>
                              <div className="flex items-center gap-1">
                                <IconUsers className="h-4 w-4" />
                                {meeting.participants} participants
                              </div>
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                Completed
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              View Summary
                            </Button>
                            <Button size="sm" variant="outline">
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
