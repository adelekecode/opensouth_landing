"use client";

import Image from "next/image";
import { Formik } from "formik";
import * as Yup from "yup";
import Globe from "~/assets/images/globe.png";
import FormField from "~/components/form-field";
import Button from "~/components/button";
import SectionTitle from "~/components/section-title";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email field is required"),
  message: Yup.string().trim().required("Message field is required"),
});

export default function Contact() {
  return (
    <div
      id="contact"
      className="max-w-maxAppWidth mx-auto w-full grid grid-cols-2 tabletAndBelow:grid-cols-1"
    >
      <div className="flex flex-col gap-6 justify-center p-8 py-12 tablet:px-4 max-w-[36rem] mx-auto w-full">
        <header className="flex items-center justify-center">
          <SectionTitle>Contact</SectionTitle>
        </header>
        <main className="flex flex-col gap-4">
          <p className="text-base largeMobile:text-sm">
            Do you have a question for Open South? Kindly reach out to us.
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            validateOnBlur={false}
            onSubmit={async (_, { resetForm }) => {
              resetForm();
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full"
              >
                <FormField
                  label="Name"
                  required
                  placeholder="John Doe"
                  name="name"
                />
                <FormField
                  label="Email"
                  required
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                />
                <FormField
                  label="Message"
                  required
                  multiline
                  placeholder="Type your message here..."
                  name="message"
                  rows={6}
                  className="!p-0"
                />
                <Button
                  className="w-full !mt-6"
                  type="submit"
                  loading={isSubmitting}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </main>
      </div>
      <figure className="w-full tabletAndBelow:hidden">
        <Image
          src={Globe}
          priority
          className="w-full h-full object-cover"
          alt="An image of a globe"
        />
      </figure>
    </div>
  );
}
