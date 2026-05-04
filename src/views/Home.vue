<script setup>
import { useI18n } from "vue-i18n";
import {
  FwbAlert,
  FwbCarousel,
  FwbButton,
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
  FwbCard
} from "flowbite-vue";
import {} from "flowbite-vue";

const { t } = useI18n();

const pictures = [
  { src: "../src/assets/images/banner-carousel.png", alt: "banner" },
];
</script>

<template>
  <!-- 輪播圖區塊 -->
  <div id="home" class="mx-auto w-full px-4 pt-6 sm:px-6 lg:px-8">
    <fwb-carousel no-indicators no-controls :pictures="pictures" />
  </div>
  <!-- 公司介紹 -->
  <section
    id="about"
    class="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-6 py-20"
  >
    <h1>{{ t("home.introduction") }}</h1>

    <fwb-accordion flushed collapsed>
      <fwb-accordion-panel>
        <fwb-accordion-header class="text-teal-800 dark:text-teal-800">{{ t("home.history") }}</fwb-accordion-header>
        <fwb-accordion-content class="dark:bg-transparent text-gray-800 dark:text-gray-800">
          <p>
            {{ t("home.historyContent.01") }}
          </p>
          <p>
            {{ t("home.historyContent.02") }}
          </p>
          <p>
            {{ t("home.historyContent.03") }}
          </p>
          <p>
            {{ t("home.historyContent.04") }}
          </p>
          <p>
            {{ t("home.historyContent.05") }}
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="text-teal-800 dark:text-teal-800">{{ t("home.mainproducts") }}</fwb-accordion-header>
        <fwb-accordion-content class="dark:bg-transparent text-gray-800 dark:text-gray-800">
          <p>
            {{ t("home.productsContent.01") }}
          </p>
          <p >
            {{ t("home.productsContent.02") }}
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="text-teal-800 dark:text-teal-800">{{ t("home.capacity") }}</fwb-accordion-header>
        <fwb-accordion-content class="dark:bg-transparent text-gray-800 dark:text-gray-800">
          <p>
            {{ t("home.capacityContent") }}
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="text-teal-800 dark:text-teal-800">{{ t("home.safetyApproval") }}</fwb-accordion-header>
        <fwb-accordion-content class="dark:bg-transparent text-gray-800 dark:text-gray-800">
          <p>
            {{ t("home.safetyApprovalContent.01") }}
          </p>
          <p>
            {{ t("home.safetyApprovalContent.02") }}
          </p>
          <p>
            {{ t("home.safetyApprovalContent.03") }}
          </p>
          <p>
            {{ t("home.safetyApprovalContent.04") }}
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
  </section>

    <!-- 產品介紹 -->
  <section
    id="products"
    class="bg-teal-900 mx-auto flex _max-w-3xl flex-col items-center justify-center gap-6 px-6 py-20"
  >
    <h1 class="dark:text-white text-white">{{ t("home.products") }}</h1>

    <div class="flex flex-row gap-12">
     <fwb-card
      img-alt="Desk"
      img-src="../src/assets/images/ac_adaptor/cover.png"
      variant="image"
      class="product-card w-sm"
    >
      <div class="p-5">
        <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ t("home.acAdaptor") }}
        </h5>
        <ul class="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-2 gap-4">
          <li>{{ t("home.acAdaptorContent.01") }}</li>
          <li>{{ t("home.acAdaptorContent.02") }}</li>
          <li>{{ t("home.acAdaptorContent.03") }}</li>
          <li>{{ t("home.acAdaptorContent.04") }}</li>
          <li>{{ t("home.acAdaptorContent.05") }}</li>
        </ul>
      </div>
    </fwb-card>
     <fwb-card
      img-alt="Desk"
      img-src="../src/assets/images/power_transformer/cover.png"
      variant="image"
      class="product-card w-sm"
    >
      <div class="p-5">
        <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ t("home.powerTransformer") }}
        </h5>
        <ul class="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-1 gap-4">
          <li>{{ t("home.powerTransformerContent.01") }}</li>
          <li>{{ t("home.powerTransformerContent.02") }}</li>
        </ul>
      </div>
    </fwb-card>
    <fwb-card
      img-alt="Desk"
      img-src="../src/assets/images/switching_power_supply/cover.png"
      variant="image"
      class="product-card w-sm"
    >
      <div class="p-5">
        <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ t("home.switchPowerSupply") }}
        </h5>
        <ul class="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-2 gap-4">
          <li>{{ t("home.switchPowerSupplyContent.01") }}</li>
          <li>{{ t("home.switchPowerSupplyContent.02") }}</li>
          <li>{{ t("home.switchPowerSupplyContent.03") }}</li>
          <li>{{ t("home.switchPowerSupplyContent.04") }}</li>
        </ul>
      </div>
    </fwb-card>
    
    </div>

    
  </section>

  <section id="contact" class="flex flex-row justify-around p-8">
    <div>
      <p class="dark:text-gray-400 text-gray py-3">{{ t("home.contact") }}</p>
      <p class="text-teal-800 dark:text-teal-800 text-5xl py-3">
        {{ t("home.contactContent.01") }}
      </p>
      <p class="dark:text-gray-400 text-gray-400">
        {{ t("home.contactContent.02") }}
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4 w-1/2">
      <fwb-alert border class="w-full text-left bg-teal-50 dark:bg-teal-50 text-teal-900 dark:text-teal-900 border-teal-800 dark:border-teal-800">
          lee@ymcpower.com.tw
      </fwb-alert>
      <fwb-alert border class="w-full text-left bg-teal-50 dark:bg-teal-50 text-teal-900 dark:text-teal-900 border-teal-800 dark:border-teal-800">
          +886 8 7802332
      </fwb-alert>
      <fwb-alert border class="w-full text-left bg-teal-50 dark:bg-teal-50 text-teal-900 dark:text-teal-900 border-teal-800 dark:border-teal-800">
          {{ t("home.contactContent.03") }}
      </fwb-alert>
    </div>

  </section>

  <!-- <section class="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-6 py-20">
    <h1>{{ t('home.title') }}</h1>

    <fwb-alert type="success" class="w-full text-left">
      Flowbite Vue is ready.
    </fwb-alert>
  </section> -->
</template>

<style scoped>
:deep(.product-card > img) {
  width: 100%;
  /* height: 18rem; */
  object-fit: cover;
  box-shadow: #0000001a 0px 8px 12px;
}
</style>
