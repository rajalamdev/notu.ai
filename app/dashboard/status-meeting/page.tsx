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
import { IconClock, IconCheck, IconX, IconAlertCircle, IconRefresh, IconEye } from "@tabler/icons-react"

export default function StatusMeetingPage() {
  const meetingStatuses = [
    {
      id: 1,
      title: "Weekly Team Sync",
      scheduledTime: "Dec 20, 2024 at 10:00 AM",
      status: "completed",
      duration: "45 min",
      participants: 5,
      summary: "Discussed project progress and upcoming deadlines",
      actionItems: 3,
      nextMeeting: "Dec 27, 2024"
    },
    {
      id: 2,
      title: "Client Presentation",
      scheduledTime: "Dec 21, 2024 at 2:00 PM",
      status: "in-progress",
      duration: "30 min",
      participants: 8,
      summary: "Presenting Q4 results and 2025 roadmap",
      actionItems: 0,
      nextMeeting: null
    },
    {
      id: 3,
      title: "Sprint Planning",
      scheduledTime: "Dec 22, 2024 at 9:00 AM",
      status: "scheduled",
      duration: "1h 30min",
      participants: 6,
      summary: null,
      actionItems: 0,
      nextMeeting: null
    },
    {
      id: 4,
      title: "Design Review",
      scheduledTime: "Dec 19, 2024 at 3:00 PM",
      status: "cancelled",
      duration: "1h",
      participants: 4,
      summary: null,
      actionItems: 0,
      nextMeeting: "Dec 26, 2024"
    },
    {
      id: 5,
      title: "Budget Planning",
      scheduledTime: "Dec 18, 2024 at 11:00 AM",
      status: "failed",
      duration: "1h 15min",
      participants: 7,
      summary: "Technical issues prevented proper recording",
      actionItems: 0,
      nextMeeting: "Dec 25, 2024"
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <IconCheck className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <IconRefresh className="h-5 w-5 text-blue-500" />
      case "scheduled":
        return <IconClock className="h-5 w-5 text-yellow-500" />
      case "cancelled":
        return <IconX className="h-5 w-5 text-gray-500" />
      case "failed":
        return <IconAlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <IconClock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
      case "scheduled":
        return <Badge className="bg-yellow-100 text-yellow-800">Scheduled</Badge>
      case "cancelled":
        return <Badge className="bg-gray-100 text-gray-800">Cancelled</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const statusCounts = {
    completed: meetingStatuses.filter(m => m.status === "completed").length,
    inProgress: meetingStatuses.filter(m => m.status === "in-progress").length,
    scheduled: meetingStatuses.filter(m => m.status === "scheduled").length,
    cancelled: meetingStatuses.filter(m => m.status === "cancelled").length,
    failed: meetingStatuses.filter(m => m.status === "failed").length
  }

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
                    <h1 className="text-2xl font-bold">Meeting Status</h1>
                    <p className="text-muted-foreground">Track and monitor your meeting progress</p>
                  </div>
                  <Button variant="outline">
                    <IconRefresh className="h-4 w-4 mr-2" />
                    Refresh Status
                  </Button>
                </div>
              </div>

              {/* Status Overview */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-5">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Completed</CardTitle>
                      <IconCheck className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">{statusCounts.completed}</div>
                      <p className="text-xs text-muted-foreground">Meetings finished</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                      <IconRefresh className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-600">{statusCounts.inProgress}</div>
                      <p className="text-xs text-muted-foreground">Currently active</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
                      <IconClock className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-yellow-600">{statusCounts.scheduled}</div>
                      <p className="text-xs text-muted-foreground">Upcoming meetings</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
                      <IconX className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-gray-600">{statusCounts.cancelled}</div>
                      <p className="text-xs text-muted-foreground">Cancelled meetings</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Failed</CardTitle>
                      <IconAlertCircle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-600">{statusCounts.failed}</div>
                      <p className="text-xs text-muted-foreground">Technical issues</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Meeting List */}
              <div className="px-4 lg:px-6">
                <h2 className="text-lg font-semibold mb-4">All Meetings</h2>
                <div className="grid gap-4">
                  {meetingStatuses.map((meeting) => (
                    <Card key={meeting.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            {getStatusIcon(meeting.status)}
                            <div className="flex-1">
                              <h3 className="font-semibold">{meeting.title}</h3>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <span>{meeting.scheduledTime}</span>
                                <span>{meeting.duration}</span>
                                <span>{meeting.participants} participants</span>
                                {meeting.actionItems > 0 && (
                                  <span>{meeting.actionItems} action items</span>
                                )}
                              </div>
                              {meeting.summary && (
                                <p className="text-sm text-muted-foreground mt-2">{meeting.summary}</p>
                              )}
                              {meeting.nextMeeting && (
                                <p className="text-sm text-blue-600 mt-1">
                                  Next meeting: {meeting.nextMeeting}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(meeting.status)}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            {meeting.status === "completed" && (
                              <Button size="sm" variant="outline">
                                <IconEye className="h-4 w-4 mr-1" />
                                View Summary
                              </Button>
                            )}
                            {meeting.status === "failed" && (
                              <Button size="sm" variant="outline" className="text-red-600">
                                Retry
                              </Button>
                            )}
                            {meeting.status === "scheduled" && (
                              <Button size="sm" variant="outline">
                                Join Meeting
                              </Button>
                            )}
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
