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
import { IconPlus, IconCalendar, IconUser, IconFlag, IconClock, IconCheck } from "@tabler/icons-react"

export default function KanbanPage() {
  const todoTasks = [
    {
      id: 1,
      title: "Review Q4 performance metrics",
      description: "Analyze quarterly results and prepare summary report",
      priority: "high",
      assignee: "Sarah Wilson",
      dueDate: "Dec 25, 2024",
      tags: ["Analytics", "Reporting"]
    },
    {
      id: 2,
      title: "Update project documentation",
      description: "Revise technical specifications and user guides",
      priority: "medium",
      assignee: "Mike Johnson",
      dueDate: "Dec 28, 2024",
      tags: ["Documentation"]
    },
    {
      id: 3,
      title: "Plan team building event",
      description: "Organize quarterly team activity and send invitations",
      priority: "low",
      assignee: "Emily Davis",
      dueDate: "Jan 5, 2025",
      tags: ["HR", "Planning"]
    },
    {
      id: 4,
      title: "Conduct user research interviews",
      description: "Schedule and conduct 5 user interviews for product feedback",
      priority: "high",
      assignee: "David Brown",
      dueDate: "Dec 30, 2024",
      tags: ["Research", "UX"]
    }
  ]

  const inProgressTasks = [
    {
      id: 5,
      title: "Implement new dashboard features",
      description: "Add analytics widgets and improve data visualization",
      priority: "high",
      assignee: "John Doe",
      dueDate: "Dec 22, 2024",
      tags: ["Development", "Frontend"],
      progress: 65
    },
    {
      id: 6,
      title: "Design mobile app interface",
      description: "Create wireframes and mockups for mobile version",
      priority: "medium",
      assignee: "Lisa Chen",
      dueDate: "Dec 26, 2024",
      tags: ["Design", "Mobile"],
      progress: 40
    },
    {
      id: 7,
      title: "Write API documentation",
      description: "Document all endpoints and provide code examples",
      priority: "medium",
      assignee: "Alex Rodriguez",
      dueDate: "Dec 24, 2024",
      tags: ["API", "Documentation"],
      progress: 80
    }
  ]

  const doneTasks = [
    {
      id: 8,
      title: "Setup CI/CD pipeline",
      description: "Configure automated testing and deployment",
      priority: "high",
      assignee: "Tom Wilson",
      dueDate: "Dec 20, 2024",
      tags: ["DevOps", "CI/CD"],
      completedDate: "Dec 18, 2024"
    },
    {
      id: 9,
      title: "Conduct security audit",
      description: "Review codebase for security vulnerabilities",
      priority: "high",
      assignee: "Security Team",
      dueDate: "Dec 15, 2024",
      tags: ["Security", "Audit"],
      completedDate: "Dec 14, 2024"
    },
    {
      id: 10,
      title: "Update privacy policy",
      description: "Revise privacy policy to comply with new regulations",
      priority: "medium",
      assignee: "Legal Team",
      dueDate: "Dec 12, 2024",
      tags: ["Legal", "Compliance"],
      completedDate: "Dec 10, 2024"
    },
    {
      id: 11,
      title: "Optimize database queries",
      description: "Improve performance of slow database operations",
      priority: "medium",
      assignee: "Database Team",
      dueDate: "Dec 10, 2024",
      tags: ["Database", "Performance"],
      completedDate: "Dec 8, 2024"
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <IconFlag className="h-3 w-3 text-red-600" />
      case "medium":
        return <IconFlag className="h-3 w-3 text-yellow-600" />
      case "low":
        return <IconFlag className="h-3 w-3 text-green-600" />
      default:
        return <IconFlag className="h-3 w-3 text-gray-600" />
    }
  }

  const TaskCard = ({ task, showProgress = false }: { task: any, showProgress?: boolean }) => (
    <Card className="mb-3 hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-sm">{task.title}</h3>
            <div className="flex items-center gap-1">
              {getPriorityIcon(task.priority)}
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground">{task.description}</p>
          
          {showProgress && task.progress && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>{task.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" 
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-1">
            {task.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <IconUser className="h-3 w-3" />
              <span>{task.assignee}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconCalendar className="h-3 w-3" />
              <span>{task.dueDate}</span>
            </div>
          </div>
          
          {task.completedDate && (
            <div className="flex items-center gap-1 text-xs text-green-600">
              <IconCheck className="h-3 w-3" />
              <span>Completed: {task.completedDate}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )

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
                    <h1 className="text-2xl font-bold">Project Kanban</h1>
                    <p className="text-muted-foreground">Track and manage your project tasks</p>
                  </div>
                  <Button className="flex items-center gap-2">
                    <IconPlus className="h-4 w-4" />
                    Add Task
                  </Button>
                </div>
              </div>

              {/* Kanban Board */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* To Do Column */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-lg">To Do</h2>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {todoTasks.length}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {todoTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                      <Card className="border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors">
                        <CardContent className="p-4 text-center">
                          <Button variant="ghost" className="w-full h-12 text-muted-foreground">
                            <IconPlus className="h-4 w-4 mr-2" />
                            Add Task
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* In Progress Column */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-lg">In Progress</h2>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        {inProgressTasks.length}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {inProgressTasks.map((task) => (
                        <TaskCard key={task.id} task={task} showProgress={true} />
                      ))}
                      <Card className="border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors">
                        <CardContent className="p-4 text-center">
                          <Button variant="ghost" className="w-full h-12 text-muted-foreground">
                            <IconPlus className="h-4 w-4 mr-2" />
                            Add Task
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Done Column */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-lg">Done</h2>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {doneTasks.length}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      {doneTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                      <Card className="border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors">
                        <CardContent className="p-4 text-center">
                          <Button variant="ghost" className="w-full h-12 text-muted-foreground">
                            <IconPlus className="h-4 w-4 mr-2" />
                            Add Task
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Statistics</CardTitle>
                    <CardDescription>Overview of task distribution and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{todoTasks.length}</div>
                        <p className="text-sm text-muted-foreground">To Do</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">{inProgressTasks.length}</div>
                        <p className="text-sm text-muted-foreground">In Progress</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{doneTasks.length}</div>
                        <p className="text-sm text-muted-foreground">Completed</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          {Math.round((doneTasks.length / (todoTasks.length + inProgressTasks.length + doneTasks.length)) * 100)}%
                        </div>
                        <p className="text-sm text-muted-foreground">Completion Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
