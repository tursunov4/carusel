'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {API_BASE_URL} from "@/services/apiFetch";

interface VideoWidgetData {
  id: number;
  title: string;
  video: string;
  video_url?: string;
}

export default function VideoWidget({tour_id}: { tour_id: string | number }) {
  const [videoData, setVideoData] = useState<VideoWidgetData | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [closed, setClosed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)


  useEffect(() => {
    const fetchVideo = async () => {
      if (!API_BASE_URL) throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined')
      const res = await fetch(`${API_BASE_URL}/api/core/video/?tour=${tour_id}`)
      const data = await res.json()
      setVideoData(data)
    }

    void fetchVideo()
  }, [tour_id])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = expanded ? 1 : 0
      if (expanded) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
      }
    }
  }, [expanded])

  if (!videoData) return null

  const toggleExpand = () => {
    setExpanded(prev => !prev)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = expanded // unmute on expand
      if (!expanded) videoRef.current.play()
    }
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation() // prevent toggling expand
    setClosed(true)
  }

  if (closed) return null

  return (
    <div
      onClick={toggleExpand}
      className={`fixed bottom-4 left-4 bg-white shadow-2xl hover:shadow-4xl rounded-2xl transition-all duration-500 overflow-hidden z-50 cursor-pointer ${
        expanded ? 'w-[280px] h-[500px]' : 'w-[130px] h-[180px]'
      }`}
    >

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
      >
        <AiOutlineClose size={16} />
      </button>
      {/* Video container */}
      <div className="overflow-hidden rounded-xl transition-all duration-500 h-full">
        <video
          ref={videoRef}
          src={videoData.video_url}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop={!expanded}
          playsInline
        />
      </div>

      {/* CTA Button */}
      {expanded && (
        <div className="absolute bottom-5 left-5 right-5">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl shadow-md transition text-xl cursor-pointer">
            Записаться
          </button>
        </div>
      )}
    </div>
  )
}

