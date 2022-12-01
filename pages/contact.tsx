/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Head from "next/head"
import { useFormik } from "formik"
import * as Yup from "yup"
import { InlineWidget } from "react-calendly"

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "姓名不得超過15個字元").required("請輸入姓名"),
      email: Yup.string()
        .email("請輸入有效的信箱格式")
        .required("此欄位不得為空"),
      message: Yup.string().required("請輸入內容"),
    }),

    onSubmit: () => {
      handleSubmit()
    },
  })

  const handleSubmit = () => {}

  return (
    <>
      <Head>
        <title>
          Angus 個人網站 - | 網站設計 | 台中網頁 | 網頁開發 | 台北網頁設計 |
          預約會議
        </title>
        <meta
          name="description"
          content="哈囉大家好，我是黃奕翔，一名網頁開發工程師, 提供各種客製化服務，網站設計、網頁設計、程式設計, 一條龍規劃整合您的需求，配合您的商業模式，獨創您的企業風采，台北網頁設計、台中網頁設計、全台灣皆有服務。"
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
                className="flex flex-col gap-5 text-center"
              >
                <h2 className="text-2xl">Simply leave a message</h2>
                <div className="">
                  <label htmlFor="name"></label>
                  <input
                    className="w-full py-2 px-4"
                    name="name"
                    placeholder="姓名"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                <div className="">
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
                </div>

                <div className="">
                  <label htmlFor="message"></label>
                  <textarea
                    className="h-44 w-full py-2 px-4"
                    name="message"
                    placeholder="請輸入訊息..."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                </div>
                <button className="aBtn">傳送訊息</button>
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
