"use client";
import LogInForm from "@/components/FormComponents/LoginForm";
import Header from "@/components/HomeComponent/Header";

export default function Home() {
  return (
    <>
      <div className=" max-container padding-container flex flex-col justify-center gap-4 md:gap-12 lg:gap-20 ">
        <Header />
        <LogInForm />
      </div>
    </>
  );
}
