"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function MeetingDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b">
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <button className="p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <h1 className="text-lg font-medium">Rapat HMIF Periode 2025/2026</h1>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Share Button */}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 h-9 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Share
          </Button>
          
          {/* Link Button */}
          <Button variant="outline" className="rounded-full h-9 px-4 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </Button>

          {/* Notion Connect */}
          <Button variant="outline" className="rounded-lg h-9 px-3 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16v16H4V4z"/>
            </svg>
            <span className="text-sm">Notion</span>
            <span className="text-xs text-muted-foreground">Connect</span>
          </Button>

          {/* Plus */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </Button>

          {/* Download */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </Button>

          {/* Copy */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-2 ml-2">
            <div className="text-right">
              <div className="text-sm font-medium">Raj Alam</div>
              <div className="text-xs text-muted-foreground">Free</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
              RA
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-57px)]">
        {/* Left Sidebar - Analytics */}
        <div className="w-72 border-r p-4 overflow-y-auto">
          {/* Analytics Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-base">Analytics</h2>
            <button className="text-sm text-muted-foreground flex items-center gap-1 hover:text-foreground">
              Lihat
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* TALKTIME Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-muted-foreground tracking-wide">TALKTIME</h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
            
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground mb-2">
              <div>Speaker</div>
              <div>Kata</div>
              <div>Bicara</div>
              <div>Total</div>
            </div>

            {/* Speaker Rows */}
            <div className="space-y-3">
              {[1, 2, 3].map((speaker) => (
                <div key={speaker} className="grid grid-cols-4 gap-2 items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">
                      S
                    </div>
                    <span className="text-xs">Speaker {speaker}</span>
                  </div>
                  <div className="text-xs">2000</div>
                  <div className="text-xs">15x</div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">100%</span>
                    <div className="relative w-4 h-4">
                      <svg className="w-4 h-4 -rotate-90" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="6" fill="none" stroke="#e5e7eb" strokeWidth="2"/>
                        <circle cx="8" cy="8" r="6" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="37.7" strokeDashoffset="0"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TOPIK / KEYWORD Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-muted-foreground tracking-wide">TOPIK / KEYWORD</h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                <span className="text-sm">Deadline</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-sm">Pelatihan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                <span className="text-sm">Client XYZ</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <span className="text-sm">AD/ART</span>
            </div>
          </div>

          {/* ACTION Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-muted-foreground tracking-wide">ACTION</h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>

            {/* Todolist notification */}
            <div className="flex items-center justify-between mb-4 bg-purple-50 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span className="text-xs text-purple-700">Todolist siap dimigrasi ke kanban!</span>
              </div>
              <Button size="sm" variant="outline" className="h-6 text-xs px-2 rounded-full">
                Buat
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </Button>
            </div>

            {/* Tugas Header */}
            <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
              <span>Tugas</span>
              <span>Deadline</span>
            </div>
            
            {/* Task List */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 mt-1.5"></div>
                  <div>
                    <div className="text-sm">Menyelesaikan</div>
                    <div className="text-sm">laporan keuangan</div>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">3 hari</span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 mt-1.5"></div>
                  <div>
                    <div className="text-sm">Menyelesaikan</div>
                    <div className="text-sm">laporan keuangan</div>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">-</span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5"></div>
                  <div>
                    <div className="text-sm">Menyelesaikan</div>
                    <div className="text-sm">laporan keuangan</div>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">2 hari</span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-1.5"></div>
                  <div>
                    <div className="text-sm">Menyelesaikan</div>
                    <div className="text-sm">laporan keuangan</div>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">Besok</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Meeting Header */}
          <div className="px-6 py-4 border-b">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl font-semibold mb-1">Rapat HMIF Periode 2025/2026</h1>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Senin, 8 September 2025 12:55 (1jam 50menit 20detik)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Google Meet
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  8 Orang
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="px-6 py-4 space-y-6">
            {/* Executive Summary */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-semibold text-purple-700">Executive Summary</h2>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rapat Ini Berfokus Pada Evaluasi Performa Kampanye Agustus Yang Mengalami Penurunan Engagement Sebesar 15% Dari Target. Tim Menyepakati Penambahan Anggaran Sebesar Rp 50 Juta Untuk Memperkuat Iklan Digital Di Kuartal IV.
              </p>
            </div>

            {/* Gambaran Umum */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-semibold text-purple-700">Gambaran Umum</h2>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-sm mb-2">Discussion Highlights</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5">•</span>
                      <span>Budi Membuka Rapat Dengan Laporan Performa Kampanye, Menekankan Adanya Gap.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5">•</span>
                      <span>Signifikan Terhadap Target Engagement. Ani Menekankan Pentingnya Inovasi.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-sm mb-2">Discussion Highlights</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5">•</span>
                      <span>Budi Membuka Rapat Dengan Laporan Performa Kampanye, Menekankan Adanya Gap.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5">•</span>
                      <span>Signifikan Terhadap Target Engagement. Ani Menekankan Pentingnya Inovasi.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-sm mb-2">Discussion Highlights</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5">•</span>
                      <span>Budi Membuka Rapat Dengan Laporan Performa Kampanye, Menekankan Adanya Gap.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5">•</span>
                      <span>Signifikan Terhadap Target Engagement. Ani Menekankan Pentingnya Inovasi.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Items */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-semibold text-purple-700">Action Items</h2>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </button>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5">•</span>
                  <span>Tim Dev Menyiapkan Demo Internal Minggu Depan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5">•</span>
                  <span>Tim QA Menyiapkan Laporan Kebutuhan Tambahan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5">•</span>
                  <span>PM Follow-Up Dengan Vendor A.</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-semibold text-purple-700">Conclusion</h2>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tim Menyepakati Penambahan Anggaran Sebesar Rp 50 Juta Untuk Memperkuat Iklan Digital Di Kuartal IV. Selain Itu, Muncul Kebutuhan Untuk Meningkatkan Strategi Konten Melalui Pendekatan Interaktif Dan Kolaborasi
              </p>
            </div>
          </div>

          {/* Audio Player - Fixed at bottom */}
          <div className="fixed bottom-0 left-72 right-80 bg-white border-t px-6 py-3">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-10">00:09</span>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="19 20 9 12 19 4 19 20"/>
                    <line x1="5" y1="19" x2="5" y2="5"/>
                  </svg>
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"/>
                      <rect x="14" y="4" width="4" height="16"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  )}
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 4 15 12 5 20 5 4"/>
                    <line x1="19" y1="5" x2="19" y2="19"/>
                  </svg>
                </button>
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-1/12 bg-purple-600 rounded-full"></div>
                <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full border-2 border-white shadow"></div>
              </div>
              <span className="text-sm text-muted-foreground w-10 text-right">10:39</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Transcript */}
        <div className="w-80 border-l flex flex-col">
          {/* Tabs */}
          <div className="flex border-b">
            <button className="flex-1 py-3 text-sm font-medium text-purple-700 border-b-2 border-purple-700">
              Transkrip
            </button>
            <button className="flex-1 py-3 text-sm font-medium text-muted-foreground flex items-center justify-center gap-1.5 hover:text-foreground">
              <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              Ask AI
            </button>
          </div>

          {/* Video Player */}
          <div className="p-3">
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-teal-300 via-green-200 to-yellow-100 aspect-video">
              {/* Video illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Character illustration placeholder */}
                  <div className="w-16 h-16 mx-auto mb-2 bg-yellow-200 rounded-full relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-blue-400 rounded-t-full"></div>
                  </div>
                </div>
              </div>
              {/* Subtitle */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded">
                Halo Perkenalkan Saya Budi
              </div>
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/30 rounded-full mb-2">
                  <div className="h-full w-1/3 bg-purple-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-white text-[10px]">
                  <div className="flex items-center gap-2">
                    <button className="hover:opacity-80">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </button>
                    <button className="hover:opacity-80">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                      </svg>
                    </button>
                    <span>01:11/02:52</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="hover:opacity-80">CC</button>
                    <button className="hover:opacity-80">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                      </svg>
                    </button>
                    <span className="bg-white/20 px-1 rounded text-[9px]">1x</span>
                    <button className="hover:opacity-80">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 3 21 3 21 9"/>
                        <polyline points="9 21 3 21 3 15"/>
                        <line x1="21" y1="3" x2="14" y2="10"/>
                        <line x1="3" y1="21" x2="10" y2="14"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="px-3 pb-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <Input 
                placeholder="Cari transkrip..." 
                className="pl-9 bg-gray-50 border-0"
              />
            </div>
          </div>

          {/* Transcript Items */}
          <div className="flex-1 overflow-y-auto px-3 space-y-3 pb-20">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border border-purple-200 bg-purple-50/50 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    S
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Speaker 1</span>
                        <span className="text-xs text-purple-600">20:40</span>
                      </div>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                        Edit
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Halo Semuanya Perkenalkan Nama Saya Speaker 1, Pada Kesempatan Kali Ini Saya Akan Membahas Tentang Kampanye Kita Pada Bulan Agustus Mendatang
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
