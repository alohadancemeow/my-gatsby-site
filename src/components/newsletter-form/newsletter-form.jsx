import React, { useState } from 'react'
import { Box, Grid, Text, Heading, Button, Input, Link } from 'theme-ui'

export const NewsletterForm = () => {

  return (
    <Box sx={{ py: 6 }} >
      <Grid
        sx={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'surface',
          p: 4,
        }}
      >
        <Grid sx={{ gap: 0 }} >
          <Heading as="h3" variant="styles.h3">
            Hi Five 🖐️ กันหน่อยสิ
          </Heading>
          <Text as="p">
            ทักทาย-พูดคุย และส่งกำลังใจให้ฉันหน่อยสิ ถ้ามันจำเป็น
            หรือหากว่าคุณมีความลับที่อยู่ในใจ เป็นความลับที่อยู่ข้างใน แต่ไม่รู้จะบอกเธอได้อย่างไร... 🎶
            ก็ส่งมาพูดคุยกันได้ ไม่ว่าจะเป็นเรื่องดีหรือเรื่องเลวร้ายถึงขั้นภัยพิบัติระดับหมอลำ ผมจะเป็นที่ปรึกษาให้คุณเอง.
            โอเค! ว่างๆเดี๋ยวเข้าไปอ่าน 💚 <br />
            ปล. <span style={{ opacity: '0.6' }}>หาเพื่อนเล่นโดต้าทู</span>
          </Text>
        </Grid>

        <Box
          sx={{
            form: {
              display: 'grid',
              gap: 3,
              gridTemplateColumns: ['1fr', '1fr auto'],
            },
          }}
        >
          <form
            action='mailto:rabbit.bot@outlook.com'
            target="_blank"
            rel="noopener"
          >
            <Input
              placeholder="rabbit.bot@outlook.com"
              type="email"
              name="email"
              disabled
            />

            <Button variant="success">
              Say Hi 🖐️
            </Button>

          </form>
        </Box>
      </Grid>
    </Box>
  )
}
