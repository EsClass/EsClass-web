import GetStarted from '@/components/GetStarted/GetStarted';
import { GlobalStyles } from '@mui/material';
import React from 'react'


const styles = (
  <GlobalStyles
    styles={{
      ".header": {
        display: "flex",
        padding: "15px 5vw",
        alignItems: "center",
        background: "#fff",
        borderBottom: "1px solid #eee",
      },
    }}
  />

);
const page = ({ children }: any) => {
  return (
    <div className='wrapper'>
      <div style={{
        padding: "15px 5vw"
        
      }}>
        <GetStarted/>
      </div>
      {styles}
      <main>

        <div>

          {children}
          <div style={{
            borderTop: "1px solid #eee",
          }}>
            <div style={{
              padding: "15px 5vw",
            }}>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
