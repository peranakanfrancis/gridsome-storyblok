<template>
  <section class="contact-us" v-editable="blok">
    <img :src="blok.image.url || blok.image" :alt="'Image of the' + blok.title" class="contact-us-right" />
    <div class="contact-us-left">
      <h1 class="contact-us-left__title">
        {{ blok.title }}
      </h1>

      <hr class="divisor" />

      <div class="contact-us-left-container">
        <CInput
          id="name"
          placeholder="Enter your name here"
          type="text"
          v-model="name"
          label="Name"
        />

        <CInput
          id="email"
          placeholder="Enter your work email here"
          type="email"
          v-model="email"
          label="Email"
        />

        <CInput
          id="company"
          placeholder="Enter your message here"
          type="text"
          v-model="company"
          label="Message"
        />

        <button class="button is-primary"> Submit </button>
      </div>
    </div>

  </section>
</template>
<script>
export default {
  name: 'ContactSection',
  props: ['blok'],
  data: () => ({
    name: '',
    email: '',
    company: ''
  })
}
</script>

<style lang="scss">
.contact-us {
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: row-reverse;
  padding-bottom: 20px;
}
.contact-us-left {
  padding: 0 $desktop-grid-gap;
}

.contact-us-right {
  width: 60%;
  max-width: 488px;
  height: auto;
  background-color: #ededed;
}

.contact-us-right img {
  max-width: 10%;
}

.contact-us-left__title {
  font-size: 65px;
  font-weight: 600;
}

.contact-us-left-container {
  width: 100%;
}

.contact-us-left-container .field {
  margin-bottom: $desktop-grid-gap;
}

.contact-us-left-container .button {
  margin: 0 0 0 auto;
}

.contact-us-left .divisor {
  margin-left: 0;
  margin-right: 0;
}

@media (max-width: 762px) {
  .contact-us {
    display: block;
    margin: 0 auto;
    position: relative;
    text-align: center;
  }

  .contact-us-left__title {
    font-size: 48px;
    font-weight: 600;
  }

  .contact-us-right {
    margin: 0 auto;
    width: 100%;
    height: auto;
    align-items: center;
  }

  .contact-us-left {
    padding: $mobile-container-spacing;
  }

  .contact-us-right,
  .contact-us-left {
    margin: 0;
    width: 100%;
  }

  .contact-us-left .divisor {
    margin-left: auto;
    margin-right: auto;
  }

  .contact-us-left-container .field {
    margin-bottom: $mobile-grid-gap;
  }

  .contact-us-left-container .button {
    margin: 0 auto;
  }
}
</style>
