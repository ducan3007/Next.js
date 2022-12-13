import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Text from 'components/Typography/Span'

export let webSocket = new WebSocket('ws://localhost:8081')

const HomePage: NextPage = () => {
  useEffect(() => {
    // Handle ping pong interval every 2 seconds
    let pingPongInterval: any

    if (webSocket.readyState !== WebSocket.CLOSED) {
      pingPongInterval = setInterval(() => {
        console.log(new Date().toLocaleTimeString(), 'ping')

        webSocket.send(JSON.stringify({ msg: 'ping' }))
      }, 2000)

      webSocket.onmessage = (event) => {
        const message = JSON.parse(event.data)
        console.log(new Date().toLocaleTimeString(), 'pong', message)
      }
    }

    // Handle close and Reconnect every 2 seconds
    webSocket.onclose = () => {
      console.log(new Date().toLocaleString(), 'closed')
      clearInterval(pingPongInterval)

      const reconnectInterval = setInterval(() => {
        console.log(new Date().toLocaleString(), 'reconnecting')
        webSocket = new WebSocket('ws://localhost:8081')
        webSocket.onopen = () => {
          console.log(new Date().toLocaleString(), 'connected')
          clearInterval(reconnectInterval)
        }
      }, 2000)
    }

    return () => {
      clearInterval(pingPongInterval)
    }
  }, [webSocket])

  return (
    <>
      <Paper variant='outlined' square>
        <Text variant='banner' type='small'>
          A
        </Text>
      </Paper>
      <div>home page</div>
    </>
  )
}
export default HomePage
