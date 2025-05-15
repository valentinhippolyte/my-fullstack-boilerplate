<template>
  <section>
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
        >
          Full Stack Boilerplate
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
        >
          This project is a minimal full-stack application template designed to
          serve as a flexible starting point for creating full-stack web
          applications.
        </p>
        <router-link to="/login">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
            login
          </button>
        </router-link>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="../assets/images/boilerplate.png" alt="boilerplate" />
      </div>
    </div>
  </section>
</template>

<script setup></script>
