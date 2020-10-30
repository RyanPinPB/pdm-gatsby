import React from "react"
import { Formik, Field } from "formik"
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
  useColorMode,
} from "@chakra-ui/core"

import * as Yup from "yup"

const FormikForm = () => {
  const { colorMode } = useColorMode()
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string()
          .matches(phoneRegExp, "Must be valid phone number")
          .required("Required"),
        message: Yup.string()
          .max(300, "Please use less than 300 characters")
          .required("Required"),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2))
          console.log(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <form
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          // netlify
          name="contact-form"
          method="POST"
          action="/"
          className="contact-form"
          onSubmit={props.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <Field name="name">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                isRequired
                display="flex"
                flexDirection="column-reverse"
                my="4"
              >
                <Input
                  bg={{
                    base: "rgba(255,255,255,0.08)",
                    md:
                      colorMode === "light"
                        ? "rgba(255,255,255,.7)"
                        : "hsla(230,11%,19%,.7)",
                  }}
                  size="lg"
                  {...field}
                  name="name"
                  id="name"
                  type="text"
                />
                <FormLabel htmlFor="name" fontSize="1.125rem">
                  Name{" "}
                </FormLabel>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                isRequired
                display="flex"
                flexDirection="column-reverse"
                my="4"
              >
                <Input
                  bg={{
                    base: "rgba(255,255,255,0.08)",
                    md:
                      colorMode === "light"
                        ? "rgba(255,255,255,.7)"
                        : "hsla(230,11%,19%,.7)",
                  }}
                  size="lg"
                  {...field}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormLabel fontSize="1.125rem" htmlFor="email">
                  Email
                </FormLabel>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="phone">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.phone && form.touched.phone}
                isRequired
                display="flex"
                flexDirection="column-reverse"
              >
                <Input
                  bg={{
                    base: "rgba(255,255,255,0.08)",
                    md:
                      colorMode === "light"
                        ? "rgba(255,255,255,.7)"
                        : "hsla(230,11%,19%,.7)",
                  }}
                  size="lg"
                  {...field}
                  id="phone"
                  name="phone"
                  type="tel"
                />
                <FormLabel fontSize="1.125rem" htmlFor="phone">
                  Phone
                </FormLabel>
                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message">
            {({ field, form }) => (
              <FormControl
                display="flex"
                flexDirection="column-reverse"
                isInvalid={form.errors.message && form.touched.message}
                isRequired
                my="4"
              >
                <Textarea
                  bg={{
                    base: "rgba(255,255,255,0.08)",
                    md:
                      colorMode === "light"
                        ? "rgba(255,255,255,.7)"
                        : "hsla(230,11%,19%,.7)",
                  }}
                  minHeight="140px"
                  size="lg"
                  resize="none"
                  {...field}
                  id="message"
                  name="message"
                />
                <FormLabel fontSize="1.125rem" htmlFor="message">
                  Short message
                </FormLabel>
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button size="lg" mt={4} isLoading={props.isSubmitting} type="submit">
            Send
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default FormikForm
