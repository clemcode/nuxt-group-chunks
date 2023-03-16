<script lang="ts" setup></script>

<template>
  <div>
    <NuxtLink to="/cart" :prefetch="false">
      Cart
    </NuxtLink>

    <div>
      <AppHeading>
        Home
      </AppHeading>
      <AppButton>
        A button
      </AppButton>
      <AppInput />
    </div>
  </div>
</template>

<style scoped></style>
