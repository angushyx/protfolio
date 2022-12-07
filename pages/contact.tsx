/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import Head from "next/head"
import { useFormik } from "formik"
import * as Yup from "yup"
import { InlineWidget } from "react-calendly"
import axios from "axios"
import moment from "moment"
type formData = {
  id: number
  name: string
  email: string
  message: string
  create_time: string
}

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const userId: number = Math.floor(Math.random() * 10000)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    onSubmit: async (values) => {
      await sendMail({
        id: userId,
        name: values.name,
        email: values.email,
        message: values.message,
        create_time: moment().format("YYYY-MM-DD h:mm:ss"),
      })
      values.name = ""
      values.email = ""
      values.message = ""
      await setLoading((prev) => !prev)
    },

    validationSchema: Yup.object({
      name: Yup.string().max(15, "姓名不得超過15個字元").required("必填"),
      email: Yup.string().email("無效信箱").required("必填"),
      message: Yup.string().required("必填"),
    }),
  })

  const sendMail = async ({
    id,
    name,
    email,
    message,
    create_time,
  }: formData) => {
    setLoading((prev) => !prev)
    try {
      await axios.post("/api/email", {
        id,
        name,
        email,
        message,
        create_time,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const showNameError = formik.errors.name
  const showEmailError = formik.errors.email
  const showMessageError = formik.errors.message

  const isAllValid = !showNameError && !showEmailError && !showMessageError

  return (
    <>
      <Head>
        <title>Angus 個人網站 - | 預約會議 | 發送電子郵件 </title>
        <meta
          name="description"
          content="有網頁建置需求都可以透過 calendly 或發送電子郵件連絡我唷!!"
        />
        <meta
          name="keywords"
          content="Angus,Angushyx,黃奕翔,網頁開發工程師,前端工程師,網頁前端, 網頁設計,台中網頁設計,網站設計,網站架設,網頁製作,架設網站,網站設計公司,客製化網站,架站,客製網站,程式設計公司"
        />

        <link rel="icon" href="https://i.imgur.com/y7fKZP2.png" />
      </Head>
      <section>
        <div className="container flex flex-col py-5">
          <div className="text-center">
            <h1 className="mb-3 text-3xl md:text-4xl ">
              I'd love to hear from you
            </h1>
          </div>
          <div className="flex flex-col justify-around gap-5 md:mt-16 md:mb-5 md:flex-row md:gap-8 lg:gap-0">
            <div className="my-8 md:my-0">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col text-center"
              >
                <h2 className="text-2xl">Simply leave a message</h2>
                <div className={`${!showNameError && "mb-10"} mt-5`}>
                  <label htmlFor="name"></label>
                  <input
                    className={` w-full border border-red-100 py-2 px-4`}
                    name="name"
                    placeholder="姓名"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {showNameError && (
                    <p className="mt-1 mb-4 text-start text-sm  text-red-700">
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <div className={`${!showEmailError && "mb-10"}`}>
                  <label htmlFor="email"></label>
                  <input
                    className="w-full py-2 px-4"
                    type="text"
                    name="email"
                    placeholder="信箱"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {showEmailError && (
                    <p className="mt-1 mb-4 text-start text-sm text-red-700 ">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <div className={`${!showMessageError && "mb-10"} `}>
                  <label htmlFor="message"></label>
                  <textarea
                    className="h-44 w-full py-2 px-4"
                    name="message"
                    placeholder="請輸入訊息..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {showMessageError && (
                    <p className="mt-1 mb-4 text-start text-sm text-red-700 ">
                      {formik.errors.message}
                    </p>
                  )}
                </div>
                {isAllValid ? (
                  <button
                    className=" flex items-center justify-center gap-3 rounded-lg p-2  text-blue-700 ring-2 ring-blue-500 transition  duration-150 ease-in-out hover:scale-105 hover:text-blue-400 hover:ring-blue-300"
                    type="submit"
                  >
                    傳送訊息
                  </button>
                ) : (
                  <button
                    className=" flex cursor-not-allowed items-center justify-center gap-3 rounded-lg  p-2 text-red-700 ring-2 ring-red-500  transition duration-150 ease-in-out"
                    disabled
                    type="submit"
                  >
                    請填寫完整資訊
                  </button>
                )}
                {loading && "loading"}
              </form>
            </div>
            <div className="text-center">
              <p className="text-3xl">OR</p>
            </div>
            <div className="text-center text-2xl">
              <h2>Schedule a Google Meet with me!</h2>
              <div className="mt-4">
                <InlineWidget url="https://calendly.com/sickmi14798?hide_landing_page_details=1&hide_gdpr_banner=1/30min" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
