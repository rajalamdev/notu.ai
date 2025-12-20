"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState, useMemo } from "react"
import api from "@/lib/api"

interface User {
  id: string
  email: string
  name: string
  image?: string
  plan: string
}

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status !== "loading") {
      setIsLoading(false)
    }
  }, [status])

  const user: User | null = session?.user ? {
    id: (session.user as any).id || "",
    email: session.user.email || "",
    name: session.user.name || "",
    image: session.user.image || undefined,
    plan: (session.user as any).plan || "free",
  } : null

  const backendToken = (session as any)?.backendToken as string | undefined

  const logout = async () => {
    await signOut({ callbackUrl: "/login" })
  }

  const requireAuth = () => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }

  return {
    user,
    session,
    status,
    isLoading,
    isAuthenticated: status === "authenticated",
    backendToken,
    logout,
    requireAuth,
  }
}

export function useApiWithAuth() {
  const { backendToken } = useAuth()

  const apiWithToken = useMemo(() => ({
    // Meetings
    getMeetings: (params?: { page?: number; limit?: number; status?: string; search?: string }) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getMeetings(backendToken, params)
    },
    getMeeting: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getMeeting(backendToken, id)
    },
    getMeetingAnalytics: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getMeetingAnalytics(backendToken, id)
    },
    getMeetingStatus: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getMeetingStatus(backendToken, id)
    },
    createMeeting: (data: any) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.createMeeting(backendToken, data)
    },
    createOnlineMeeting: (data: { meetingUrl: string; platform?: string; duration?: number }) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.createOnlineMeeting(backendToken, data)
    },
    updateMeeting: (id: string, data: any) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.updateMeeting(backendToken, id, data)
    },
    deleteMeeting: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.deleteMeeting(backendToken, id)
    },
    retryTranscription: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.retryTranscription(backendToken, id)
    },
    exportTranscript: (id: string, format: 'json' | 'txt' | 'srt' | 'vtt') => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.exportTranscript(backendToken, id, format)
    },

    // Tasks
    getTasks: (params?: { status?: string; priority?: string; meetingId?: string }) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getTasks(backendToken, params)
    },
    getKanbanTasks: () => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getKanbanTasks(backendToken)
    },
    getTask: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getTask(backendToken, id)
    },
    createTask: (data: { title: string; description?: string; status?: string; priority?: string; dueDate?: string; assignee?: string; tags?: string[]; meetingId?: string }) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.createTask(backendToken, data)
    },
    updateTask: (id: string, data: any) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.updateTask(backendToken, id, data)
    },
    deleteTask: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.deleteTask(backendToken, id)
    },
    reorderTasks: (tasks: { id: string; status: string; order: number }[]) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.reorderTasks(backendToken, tasks)
    },

    // Analytics
    getStats: () => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getStats(backendToken)
    },
    getTrends: (period?: '7d' | '30d' | '90d') => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getTrends(backendToken, period)
    },
    getPlatformStats: () => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getPlatformStats(backendToken)
    },
    getRecentActivity: (limit?: number) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getRecentActivity(backendToken, limit)
    },

    // Upload
    uploadFile: (file: File, metadata?: any) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.uploadFile(backendToken, file, metadata)
    },

    // Profile
    getProfile: () => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getProfile(backendToken)
    },
    updateProfile: (data: { name?: string; preferences?: any }) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.updateProfile(backendToken, data)
    },
  }), [backendToken])

  return {
    api: apiWithToken,
    isReady: !!backendToken,
  }
}
