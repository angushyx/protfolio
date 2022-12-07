import * as React from "react"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"
import { BiBadgeCheck } from "react-icons/bi"
import { motion as m } from "framer-motion"

export default function IconAlerts() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-40 right-16 w-[20%]"
    >
      <Stack spacing={2}>
        <Alert
          className="justify-center"
          icon={<BiBadgeCheck fontSize="inherit" />}
          severity="success"
        >
          mail 已送出!!!
        </Alert>
      </Stack>
    </m.div>
  )
}
