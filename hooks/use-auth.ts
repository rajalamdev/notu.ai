"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
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

  const apiWithToken = {
    getMeetings: (params?: { page?: number; limit?: number; status?: string }) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getMeetings(backendToken, params)
    },
    getMeeting: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getMeeting(backendToken, id)
    },
    createMeeting: (data: any) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.createMeeting(backendToken, data)
    },
    updateMeeting: (id: string, data: any) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.updateMeeting(backendToken, id, data)
    },
    deleteMeeting: (id: string) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.deleteMeeting(backendToken, id)
    },
    uploadFile: (file: File, metadata?: any) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.uploadFile(backendToken, file, metadata)
    },
    getProfile: () => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.getProfile(backendToken)
    },
    updateProfile: (data: { name?: string; preferences?: any }) => {
      if (!backendToken) throw new Error("Not authenticated")
      return api.updateProfile(backendToken, data)
    },
  }

  return {
    api: apiWithToken,
    isReady: !!backendToken,
  }
}
