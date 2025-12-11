import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '../ui/badge'
import { IconDots, IconVideo } from '@tabler/icons-react'

interface Props {
  id: number
  tag: string
  type?: string
  date: string
  title: string
  description: string
}

const MeetingCard = ({ data } : {data: Props }) => {
  return (
    <Card key={data.id} className="bg-white shadow-border/50">
    <CardContent>
      <div className="flex items-start justify-between mb-3">
        <Badge className="bg-purple-100 text-[#6b4eff] hover:bg-purple-100">
          {data.tag}
        </Badge>
        <div className="flex items-center gap-2">
          <IconVideo className="h-4 w-4 text-gray-600" />
          <IconDots className="h-4 w-4 text-gray-600" />
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
        <IconVideo className="h-4 w-4" />
        <span>{data.date}</span>
      </div>

      <h3 className="mb-2 font-semibold text-gray-900">{data.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
    </CardContent>
  </Card>
  )
}

export default MeetingCard