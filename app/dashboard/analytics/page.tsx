"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconTrendingUp, IconUsers, IconClock, IconCalendar, IconMicrophone, IconVideo } from "@tabler/icons-react"

export default function AnalyticsPage() {
  const analyticsData = {
    totalMeetings: 156,
    totalDuration: "234h 45m",
    totalParticipants: 1247,
    averageDuration: "1h 30m",
    completionRate: 94.2,
    satisfactionScore: 4.6
  }

  const weeklyData = [
    { week: "Week 1", meetings: 12, duration: 18.5, participants: 89 },
    { week: "Week 2", meetings: 15, duration: 22.3, participants: 112 },
    { week: "Week 3", meetings: 18, duration: 27.1, participants: 134 },
    { week: "Week 4", meetings: 14, duration: 21.2, participants: 98 },
    { week: "Week 5", meetings: 16, duration: 24.8, participants: 125 },
    { week: "Week 6", meetings: 20, duration: 30.5, participants: 156 },
    { week: "Week 7", meetings: 17, duration: 25.7, participants: 142 },
    { week: "Week 8", meetings: 19, duration: 28.9, participants: 148 }
  ]

  const topParticipants = [
    { name: "John Doe", meetings: 45, duration: "67h 30m" },
    { name: "Sarah Wilson", meetings: 38, duration: "56h 15m" },
    { name: "Mike Johnson", meetings: 32, duration: "48h 20m" },
    { name: "Emily Davis", meetings: 29, duration: "43h 45m" },
    { name: "David Brown", meetings: 26, duration: "39h 10m" }
  ]

  const meetingTypes = [
    { type: "Team Sync", count: 45, percentage: 28.8 },
    { type: "Client Meetings", count: 32, percentage: 20.5 },
    { type: "Project Reviews", count: 28, percentage: 17.9 },
    { type: "Sprint Planning", count: 24, percentage: 15.4 },
    { type: "Design Reviews", count: 18, percentage: 11.5 },
    { type: "Other", count: 9, percentage: 5.8 }
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
                <div>
                  <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                  <p className="text-muted-foreground">Insights and metrics for your meetings</p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
                      <IconCalendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{analyticsData.totalMeetings}</div>
                      <p className="text-xs text-muted-foreground">
                        <IconTrendingUp className="inline h-3 w-3 mr-1" />
                        +12% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Duration</CardTitle>
                      <IconClock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{analyticsData.totalDuration}</div>
                      <p className="text-xs text-muted-foreground">
                        <IconTrendingUp className="inline h-3 w-3 mr-1" />
                        +8% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
                      <IconUsers className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{analyticsData.totalParticipants}</div>
                      <p className="text-xs text-muted-foreground">
                        <IconTrendingUp className="inline h-3 w-3 mr-1" />
                        +15% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
                      <IconMicrophone className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{analyticsData.averageDuration}</div>
                      <p className="text-xs text-muted-foreground">
                        <IconTrendingUp className="inline h-3 w-3 mr-1" />
                        +5% from last month
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Charts */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meeting Trends</CardTitle>
                      <CardDescription>Weekly meeting count and duration</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartAreaInteractive />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Meeting Types Distribution</CardTitle>
                      <CardDescription>Breakdown by meeting type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {meetingTypes.map((type, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${
                                index === 0 ? 'bg-blue-500' :
                                index === 1 ? 'bg-green-500' :
                                index === 2 ? 'bg-yellow-500' :
                                index === 3 ? 'bg-purple-500' :
                                index === 4 ? 'bg-pink-500' : 'bg-gray-500'
                              }`} />
                              <span className="text-sm font-medium">{type.type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">{type.count}</span>
                              <span className="text-sm font-medium">{type.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Participants</CardTitle>
                      <CardDescription>Most active meeting participants</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topParticipants.map((participant, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                                {participant.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="font-medium">{participant.name}</p>
                                <p className="text-sm text-muted-foreground">{participant.meetings} meetings</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">{participant.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                      <CardDescription>Meeting effectiveness indicators</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Completion Rate</p>
                            <p className="text-sm text-muted-foreground">Meetings successfully processed</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-600">{analyticsData.completionRate}%</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Satisfaction Score</p>
                            <p className="text-sm text-muted-foreground">Average participant rating</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-blue-600">{analyticsData.satisfactionScore}/5.0</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Recording Quality</p>
                            <p className="text-sm text-muted-foreground">Audio/video clarity</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-purple-600">92%</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
