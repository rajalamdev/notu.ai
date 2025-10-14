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
import { IconUpload, IconFileMusic, IconVideo, IconFileText, IconDownload, IconTrash, IconEye } from "@tabler/icons-react"

export default function UploadsPage() {
  const uploadedFiles = [
    {
      id: 1,
      name: "team-meeting-dec-20.mp4",
      type: "video",
      size: "125 MB",
      uploadedAt: "Dec 20, 2024",
      status: "processed",
      duration: "45 min"
    },
    {
      id: 2,
      name: "client-call-audio.mp3",
      type: "audio",
      size: "32 MB",
      uploadedAt: "Dec 19, 2024",
      status: "processing",
      duration: "1h 15min"
    },
    {
      id: 3,
      name: "sprint-planning-recording.mp4",
      type: "video",
      size: "89 MB",
      uploadedAt: "Dec 18, 2024",
      status: "processed",
      duration: "1h 30min"
    },
    {
      id: 4,
      name: "design-review-meeting.mp3",
      type: "audio",
      size: "28 MB",
      uploadedAt: "Dec 17, 2024",
      status: "failed",
      duration: "35 min"
    }
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "video":
        return <IconVideo className="h-5 w-5 text-blue-500" />
      case "audio":
        return <IconFileMusic className="h-5 w-5 text-green-500" />
      default:
        return <IconFileText className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processed":
        return <Badge className="bg-green-100 text-green-800">Processed</Badge>
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
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
                    <h1 className="text-2xl font-bold">File Uploads</h1>
                    <p className="text-muted-foreground">Manage your uploaded meeting recordings</p>
                  </div>
                  <Button className="flex items-center gap-2">
                    <IconUpload className="h-4 w-4" />
                    Upload Files
                  </Button>
                </div>
              </div>

              {/* Upload Stats */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Files</CardTitle>
                      <IconFileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">+2 from last week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Processed</CardTitle>
                      <IconVideo className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18</div>
                      <p className="text-xs text-muted-foreground">75% success rate</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Processing</CardTitle>
                      <IconFileMusic className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4</div>
                      <p className="text-xs text-muted-foreground">Currently processing</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Size</CardTitle>
                      <IconUpload className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2.1 GB</div>
                      <p className="text-xs text-muted-foreground">Storage used</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* File List */}
              <div className="px-4 lg:px-6">
                <h2 className="text-lg font-semibold mb-4">Uploaded Files</h2>
                <div className="grid gap-4">
                  {uploadedFiles.map((file) => (
                    <Card key={file.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            {getFileIcon(file.type)}
                            <div className="flex-1">
                              <h3 className="font-semibold">{file.name}</h3>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <span>{file.size}</span>
                                <span>{file.duration}</span>
                                <span>Uploaded: {file.uploadedAt}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(file.status)}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            {file.status === "processed" && (
                              <>
                                <Button size="sm" variant="outline">
                                  <IconEye className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                                <Button size="sm" variant="outline">
                                  <IconDownload className="h-4 w-4 mr-1" />
                                  Download
                                </Button>
                              </>
                            )}
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <IconTrash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Upload Instructions */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Supported File Formats</CardTitle>
                    <CardDescription>
                      Upload your meeting recordings in the following formats
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-2">Audio Files</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• MP3 (.mp3)</li>
                          <li>• WAV (.wav)</li>
                          <li>• M4A (.m4a)</li>
                          <li>• AAC (.aac)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Video Files</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• MP4 (.mp4)</li>
                          <li>• MOV (.mov)</li>
                          <li>• AVI (.avi)</li>
                          <li>• WebM (.webm)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Maximum file size is 500MB. Processing time depends on file duration and size.
                      </p>
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
