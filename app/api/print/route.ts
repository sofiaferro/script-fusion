import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL

if (!BACKEND_URL) {
  throw new Error('BACKEND_URL environment variable is not set')
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get('image') as File | null

    if (!image) {
      return NextResponse.json({ error: 'No image file provided' }, { status: 400 })
    }

    // Create a new FormData instance for the backend request
    const backendFormData = new FormData()
    backendFormData.append('image', image, image.name)

    const backendResponse = await fetch(`${BACKEND_URL}/api/print`, {
      method: 'POST',
      body: backendFormData,
    })

    if (!backendResponse.ok) {
      throw new Error('Backend service failed to process the print request')
    }

    const result = await backendResponse.json()

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in print API route:', error)
    return NextResponse.json({ error: 'Failed to print' }, { status: 500 })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}