<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import {
  FwbBreadcrumb,
  FwbBreadcrumbItem,
  FwbImg,
  FwbButton,
  FwbListGroup,
  FwbListGroupItem,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableRow,
} from "flowbite-vue";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const productMap = {
  acAdaptor: {
    titleKey: "home.acAdaptor",
    contentKey: "home.acAdaptorContent",
    contentItems: ["01", "02", "03", "04", "05"],
  },
  powerTransformer: {
    titleKey: "home.powerTransformer",
    contentKey: "home.powerTransformerContent",
    contentItems: ["01", "02"],
  },
  switchPowerSupply: {
    titleKey: "home.switchPowerSupply",
    contentKey: "home.switchPowerSupplyContent",
    contentItems: ["01", "02", "03", "04"],
  },
};

const productType = computed(() => route.params.productType || "acAdaptor");
const currentProduct = computed(
  () => productMap[productType.value] || productMap.acAdaptor,
);
const currentLang = computed(() => route.params.lang || "zh-TW");
const homePath = computed(() => `/${currentLang.value}`);
const homeProductsPath = computed(() => `${homePath.value}#products`);

const culEi35AcRows1 = [
  ["AD-0301000AU", "3", "1000", "3"],
  ["AD-0450100AU", "4.5", "100", "0.45"],
  ["AD-0450200AU", "4.5", "200", "0.9"],
  ["AD-0450300AU", "4.5", "300", "1.35"],
  ["AD-0450400AU", "4.5", "400", "1.8"],
  ["AD-0450500AU", "4.5", "500", "2.25"],
  ["AD-0450600AU", "4.5", "600", "2.7"],
  ["AD-0450700AU", "4.5", "700", "3.15"],
  ["AD-0450800AU", "4.5", "800", "3.6"],
  ["AD-0450900AU", "4.5", "900", "4.05"],
  ["AD-0451000AU", "4.5", "1000", "4.5"],
  ["AD-0500100AU", "5", "100", "0.5"],
  ["AD-0500200AU", "5", "200", "1.0"],
  ["AD-0500300AU", "5", "300", "1.5"],
  ["AD-0500400AU", "5", "400", "2.0"],
  ["AD-0500500AU", "5", "500", "2.5"],
  ["AD-0500600AU", "5", "600", "3.0"],
  ["AD-0500700AU", "5", "700", "3.5"],
  ["AD-0500800AU", "5", "800", "4.0"],
  ["AD-0500900AU", "5", "900", "4.5"],
  ["AD-0501000AU", "5", "1000", "5"],
  ["AD-0600100AU", "6", "100", "0.6"],
];
const culEi35AcRows2 = [
  ["AD-0600200AU", "6", "200", "1.2"],
  ["AD-0600300AU", "6", "300", "1.8"],
  ["AD-0600400AU", "6", "400", "2.4"],
  ["AD-0600500AU", "6", "500", "3.0"],
  ["AD-0600600AU", "6", "600", "3.6"],
  ["AD-0600700AU", "6", "700", "4.2"],
  ["AD-0600800AU", "6", "800", "4.8"],
  ["AD-0600900AU", "6", "900", "5.4"],
  ["AD-0700500AU", "7", "500", "3.5"],
  ["AD-0750100AU", "7.5", "100", "0.75"],
  ["AD-0750200AU", "7.5", "200", "1.5"],
  ["AD-0750300AU", "7.5", "300", "2.25"],
  ["AD-0750400AU", "7.5", "400", "3.0"],
  ["AD-0750500AU", "7.5", "500", "3.75"],
  ["AD-0750550AU", "7.5", "550", "4.13"],
  ["AD-0750600AU", "7.5", "600", "4.5"],
  ["AD-0750700AU", "7.5", "700", "5.25"],
  ["AD-0750800AU", "7.5", "800", "6"],
  ["AD-0900050AU", "9", "50", "0.45"],
  ["AD-0900100AU", "9", "100", "0.9"],
  ["AD-0900150AU", "9", "150", "1.35"],
  ["AD-0900200AU", "9", "200", "1.8"],
  ["AD-0900250AU", "9", "250", "2.25"],
  ["AD-0900300AU", "9", "300", "2.7"],
  ["AD-0900350AU", "9", "350", "3.15"],
  ["AD-0900400AU", "9", "400", "3.6"],
  ["AD-0900450AU", "9", "450", "4.05"],
  ["AD-0900500AU", "9", "500", "4.5"],
  ["AD-0900600AU", "9", "600", "5.4"],
  ["AD-1000100AU", "10", "100", "1"],
  ["AD-1000200AU", "10", "200", "2"],
  ["AD-1000300AU", "10", "300", "3"],
  ["AD-1000400AU", "10", "400", "4"],
  ["AD-1000500AU", "10", "500", "5"],
  ["AD-1000600AU", "10", "600", "6"],
];
const culEi35DcRows1 = [
  ["AD35-0300400DU", "3", "400", "1.2"],
  ["AD35-0300500DU", "3", "500", "1.5"],
  ["AD35-0300600DU", "3", "600", "1.8"],
  ["AD35-0300700DU", "3", "700", "2.1"],
  ["AD35-0450100DU", "4.5", "100", "0.45"],
  ["AD35-0450200DU", "4.5", "200", "0.9"],
  ["AD35-0450300DU", "4.5", "300", "1.35"],
  ["AD35-0450400DU", "4.5", "400", "1.8"],
  ["AD35-0450500DU", "4.5", "500", "2.25"],
  ["AD35-0450600DU", "4.5", "600", "2.7"],
  ["AD35-0600100DU", "6", "100", "0.6"],
  ["AD35-0600150DU", "6", "150", "0.9"],
  ["AD35-0600200DU", "6", "200", "1.2"],
  ["AD35-0600250DU", "6", "250", "1.5"],
  ["AD35-0600300DU", "6", "300", "1.8"],
  ["AD35-0600350DU", "6", "350", "2.1"],
  ["AD35-0600400DU", "6", "400", "2.4"],
  ["AD35-0600450DU", "6", "450", "2.7"],
  ["AD35-0600500DU", "6", "500", "3"],
  ["AD35-0750100DU", "7.5", "100", "0.75"],
  ["AD35-0750150DU", "7.5", "150", "1.125"],
  ["AD35-0750200DU", "7.5", "200", "1.5"],
];
const culEi35DcRows2 = [
  ["AD35-0750250DU", "7.5", "250", "1.875"],
  ["AD35-0750300DU", "7.5", "300", "2.25"],
  ["AD35-0750350DU", "7.5", "350", "2.625"],
  ["AD35-0750400DU", "7.5", "400", "3"],
  ["AD35-0900050DU", "9", "50", "0.45"],
  ["AD35-0900100DU", "9", "100", "0.9"],
  ["AD35-0900150DU", "9", "150", "1.35"],
  ["AD35-0900200DU", "9", "200", "1.8"],
  ["AD35-0900250DU", "9", "250", "2.25"],
  ["AD35-0900300DU", "9", "300", "2.7"],
  ["AD35-1200050DU", "12", "50", "0.6"],
  ["AD35-1200100DU", "12", "100", "1.2"],
  ["AD35-1200150DU", "12", "150", "1.8"],
  ["AD35-1200200DU", "12", "200", "2.4"],
  ["AD35-1200250DU", "12", "250", "3"],
  ["AD35-1500050DU", "15", "50", "0.75"],
  ["AD35-1500100DU", "15", "100", "1.5"],
  ["AD35-1500150DU", "15", "150", "2.25"],
  ["AD35-1500200DU", "15", "200", "3"],
  ["AD35-1800050DU", "18", "50", "0.9"],
  ["AD35-1800100DU", "18", "100", "1.8"],
  ["AD35-1800150DU", "18", "150", "2.7"],
  ["AD35-2100050DU", "21", "50", "1.05"],
  ["AD35-2100100DU", "21", "100", "2.1"],
  ["AD35-2400050DU", "24", "50", "1.2"],
  ["AD35-2400100DU", "24", "100", "2.4"],
];
const culEi41AcRows1 = [
  ["AD-0600800AU", "6", "800", "4.8"],
  ["AD-0601000AU", "6", "1000", "6"],
  ["AD-0601100AU", "6", "1100", "6.6"],
  ["AD-0601200AU", "6", "1200", "7.2"],
  ["AD-0601500AU", "6", "1500", "9"],
  ["AD-0750500AU", "7.5", "500", "3.75"],
  ["AD-0750800AU", "7.5", "800", "6"],
  ["AD-0751000AU", "7.5", "1000", "7.5"],
  ["AD-0751100AU", "7.5", "1100", "8.25"],
  ["AD-0900500AU", "9", "500", "4.5"],
  ["AD-0900800AU", "9", "800", "7.2"],
  ["AD-0901000AU-1", "9", "1000", "9"],
  ["AD-0901100AU", "9", "1100", "9.9"],
  ["AD-1000800AU", "10", "800", "8"],
  ["AD-1001000AU", "10", "1000", "10"],
  ["AD-1200300AU", "12", "300", "3.6"],
  ["AD-1200500AU", "12", "500", "6"],
  ["AD-1200600AU", "12", "600", "7.2"],
  ["AD-1200700AU", "12", "700", "8.4"],
  ["AD-1200800AU-1", "12", "800", "9.6"],
  ["AD-1200850AU-1", "12", "850", "10.2"],
  ["AD-1200900AU", "12", "900", "10.8"],
];
const culEi41AcRows2 = [
  ["AD-1201000AU-1", "12", "1000", "12"],
  ["AD-1500300AU", "15", "300", "4.5"],
  ["AD-1500400AU", "15", "400", "6"],
  ["AD-1500500AU", "15", "500", "7.5"],
  ["AD-1500600AU", "15", "600", "8"],
  ["AD-1500800AU-1", "15", "800", "12"],
  ["AD-1800300AU", "18", "300", "5.4"],
  ["AD-2400300AU", "24", "300", "7.2"],
  ["AD-2400400AU-1", "24", "400", "9.6"],
  ["AD-2400500AU-1", "24", "500", "12"],
  ["AD-1560600AU", "15.6", "600", "9.36"],
];
const culEi41DcRows1 = [
  ["AD35-0300400DU", "3", "400", "1.2"],
  ["AD35-0300500DU", "3", "500", "1.5"],
  ["AD35-0300600DU", "3", "600", "1.8"],
  ["AD35-0300700DU", "3", "700", "2.1"],
  ["AD35-0450100DU", "4.5", "100", "0.45"],
  ["AD35-0450200DU", "4.5", "200", "0.9"],
  ["AD35-0450300DU", "4.5", "300", "1.35"],
  ["AD35-0450400DU", "4.5", "400", "1.8"],
  ["AD35-0450500DU", "4.5", "500", "2.25"],
  ["AD35-0450600DU", "4.5", "600", "2.7"],
  ["AD35-0600100DU", "6", "100", "0.6"],
  ["AD35-0600150DU", "6", "150", "0.9"],
  ["AD35-0600200DU", "6", "200", "1.2"],
  ["AD35-0600250DU", "6", "250", "1.5"],
  ["AD35-0600300DU", "6", "300", "1.8"],
  ["AD35-0600350DU", "6", "350", "2.1"],
  ["AD35-0600400DU", "6", "400", "2.4"],
  ["AD35-0600450DU", "6", "450", "2.7"],
  ["AD35-0600500DU", "6", "500", "3"],
  ["AD35-0750100DU", "7.5", "100", "0.75"],
  ["AD35-0750150DU", "7.5", "150", "1.125"],
  ["AD35-0750200DU", "7.5", "200", "1.5"],
];
const culEi41DcRows2 = [
  ["AD35-0750250DU", "7.5", "250", "1.875"],
  ["AD35-0750300DU", "7.5", "300", "2.25"],
  ["AD35-0750350DU", "7.5", "350", "2.625"],
  ["AD35-0750400DU", "7.5", "400", "3"],
  ["AD35-0900050DU", "9", "50", "0.45"],
  ["AD35-0900100DU", "9", "100", "0.9"],
  ["AD35-0900150DU", "9", "150", "1.35"],
  ["AD35-0900200DU", "9", "200", "1.8"],
  ["AD35-0900250DU", "9", "250", "2.25"],
  ["AD35-0900300DU", "9", "300", "2.7"],
  ["AD35-1200050DU", "12", "50", "0.6"],
  ["AD35-1200100DU", "12", "100", "1.2"],
  ["AD35-1200150DU", "12", "150", "1.8"],
  ["AD35-1200200DU", "12", "200", "2.4"],
  ["AD35-1200250DU", "12", "250", "3"],
  ["AD35-1500050DU", "15", "50", "0.75"],
  ["AD35-1500100DU", "15", "100", "1.5"],
  ["AD35-1500150DU", "15", "150", "2.25"],
  ["AD35-1500200DU", "15", "200", "3"],
  ["AD35-1800050DU", "18", "50", "0.9"],
  ["AD35-1800100DU", "18", "100", "1.8"],
  ["AD35-1800150DU", "18", "150", "2.7"],
  ["AD35-2100050DU", "21", "50", "1.05"],
  ["AD35-2100100DU", "21", "100", "2.1"],
  ["AD35-2400050DU", "24", "50", "1.2"],
  ["AD35-2400100DU", "24", "100", "2.4"],
];
const culEi48AcRows1 = [
  ["AD-0901000AU", "9", "1000", "9"],
  ["AD-0901500AU", "9", "1500", "13.5"],
  ["AD-1200800AU", "12", "800", "9.6"],
  ["AD-1200850AU", "12", "850", "10.2"],
  ["AD-1201000AU", "12", "1000", "12"],
  ["AD-1201200AU", "12", "1200", "14.4"],
  ["AD-1201500AU", "12", "1500", "18"],
  ["AD-1201700AU", "12", "1700", "20.4"],
  ["AD-1351000AU", "13.5", "1000", "13.5"],
  ["AD-1500800AU", "15", "800", "12"],
  ["AD-1501000AU", "15", "1000", "15"],
  ["AD-1600800AU", "16", "800", "12.8"],
  ["AD-1601000AU", "16", "1000", "16"],
  ["AD-1800600AU", "18", "600", "10.8"],
  ["AD-1801000AU", "18", "1000", "18"],
  ["AD-2400400AU", "24", "400", "9.6"],
  ["AD-2400500AU", "24", "500", "12"],
  ["AD-1002000AU", "10", "2000", "20"],
  ["AD-1201666AU", "12", "1666", "20"],
  ["AD1651200AU", "16.5", "1200", "19.8"],
  ["AD-1651500AU", "16.5", "1500", "24.75"],
  ["AD-2400830AU", "24", "830", "19.92"],
];
const culEi48DcRows1 = [
  ["AD48-0451000DU", "4.5", "1000", "4.5"],
  ["AD48-0451200DU", "4.5", "1200", "5.4"],
  ["AD48-0451500DU", "4.5", "1500", "6.75"],
  ["AD48-0500850DU", "5", "850", "4.25"],
  ["AD48-0500900DU", "5", "900", "4.5"],
  ["AD48-0501000DU", "5", "1000", "5"],
  ["AD48-0501200DU", "5", "1200", "6"],
  ["AD48-0501500DU", "5", "1500", "7.5"],
  ["AD48-0502000DU", "5", "2000", "10"],
  ["AD48-0600800DU", "6", "800", "4.8"],
  ["AD48-0600900DU", "6", "900", "5.4"],
  ["AD48-0601000DU", "6", "1000", "6"],
  ["AD48-0601200DU", "6", "1200", "7.2"],
  ["AD48-0601500DU", "6", "1500", "9"],
  ["AD48-0602000DU", "6", "2000", "12"],
  ["AD48-0602100DU", "6", "2100", "12.6"],
  ["AD48-0750800DU", "7.5", "800", "6"],
  ["AD48-0750850DU", "7.5", "850", "6.38"],
  ["AD48-0750900DU", "7.5", "900", "6.75"],
  ["AD48-0751000DU", "7.5", "1000", "7.5"],
  ["AD48-0751200DU", "7.5", "1200", "9"],
  ["AD48-0751500DU", "7.5", "1500", "11.25"],
];
const culEi48DcRows2 = [
  ["AD48-1300600DU", "13", "600", "7.8"],
  ["AD48-1300700DU", "13", "700", "9.1"],
  ["AD48-1300750DU", "13", "750", "9.75"],
  ["AD48-1300800DU", "13", "800", "10.4"],
  ["AD48-1300850DU", "13", "850", "11.05"],
  ["AD48-1300900DU", "13", "900", "11.7"],
  ["AD48-1301000DU", "13", "1000", "13"],
  ["AD48-1301200DU", "13", "1200", "15.6"],
  ["AD48-1350450DU", "13.5", "450", "6.1"],
  ["AD48-1350500DU", "13.5", "500", "6.75"],
  ["AD48-1350550DU", "13.5", "550", "7.43"],
  ["AD48-1350600DU", "13.5", "600", "8.1"],
  ["AD48-1350700DU", "13.5", "700", "9.45"],
  ["AD48-1350750DU", "13.5", "750", "10.13"],
  ["AD48-1350800DU", "13.5", "800", "10.8"],
  ["AD48-1350850DU", "13.5", "850", "11.48"],
  ["AD48-1350900DU", "13.5", "900", "12.15"],
  ["AD48-1351000DU", "13.5", "1000", "13.5"],
  ["AD48-1351200DU", "13.5", "1200", "16.2"],
  ["AD48-1400450DU", "14", "450", "6.3"],
  ["AD48-1400500DU", "14", "500", "7"],
  ["AD48-1400550DU", "14", "550", "7.7"],
  ["AD48-1400600DU", "14", "600", "8.4"],
  ["AD48-1400700DU", "14", "700", "9.8"],
  ["AD48-1400750DU", "14", "750", "10.5"],
  ["AD48-1400800DU", "14", "800", "11.2"],
  ["AD48-1400850DU", "14", "850", "11.9"],
  ["AD48-1400900DU", "14", "900", "12.6"],
  ["AD48-1401000DU", "14", "1000", "14"],
  ["AD48-1401200DU", "14", "1200", "16.8"],
  ["AD48-1500400DU", "15", "400", "6"],
  ["AD48-1500450DU", "15", "450", "6.75"],
  ["AD48-1500500DU", "15", "500", "7.5"],
  ["AD48-1500550DU", "15", "550", "8.25"],
  ["AD48-1500600DU", "15", "600", "9"],
];
const culEi48DcRows3 = [
  ["AD48-1500700DU", "15", "700", "10.5"],
  ["AD48-1500750DU", "15", "750", "11.25"],
  ["AD48-1500800DU", "15", "800", "12"],
  ["AD48-1500850DU", "15", "850", "12.75"],
  ["AD48-1500900DU", "15", "900", "13.5"],
  ["AD48-1501000DU", "15", "1000", "15"],
  ["AD48-1501200DU", "15", "1200", "18"],
  ["AD48-1600400DU", "16", "400", "6.4"],
  ["AD48-1600450DU", "16", "450", "7.2"],
  ["AD48-1600500DU", "16", "500", "8"],
  ["AD48-1600550DU", "16", "550", "8.8"],
  ["AD48-1600600DU", "16", "600", "9.6"],
  ["AD48-1600700DU", "16", "700", "11.2"],
  ["AD48-1600750DU", "16", "750", "12"],
  ["AD48-1600800DU", "16", "800", "12.8"],
  ["AD48-1600850DU", "16", "850", "13.6"],
  ["AD48-1600900DU", "16", "900", "14.4"],
  ["AD48-1601000DU", "16", "1000", "16"],
  ["AD48-1800350DU", "18", "350", "6.3"],
  ["AD48-1800400DU", "18", "400", "7.2"],
  ["AD48-1800450DU", "18", "450", "8.1"],
  ["AD48-1800500DU", "18", "500", "9"],
  ["AD48-1800550DU", "18", "550", "9.9"],
  ["AD48-1800600DU", "18", "600", "10.8"],
  ["AD48-1800700DU", "18", "700", "12.6"],
  ["AD48-1800750DU", "18", "750", "13.5"],
  ["AD48-1800800DU", "18", "800", "14.4"],
  ["AD48-1800850DU", "18", "850", "15.3"],
  ["AD48-1800900DU", "18", "900", "16.2"],
  ["AD48-1801000DU", "18", "1000", "18"],
  ["AD48-2000300DU", "20", "300", "6"],
  ["AD48-2000350DU", "20", "350", "7"],
  ["AD48-2000400DU", "20", "400", "8"],
  ["AD48-2000450DU", "20", "450", "9"],
  ["AD48-2000500DU", "20", "500", "10"],
];
const culEi48DcRows4 = [
  ["AD48-2000550DU", "20", "550", "11"],
  ["AD48-2000600DU", "20", "600", "12"],
  ["AD48-2000700DU", "20", "700", "14"],
  ["AD48-2000750DU", "20", "750", "15"],
  ["AD48-2000800DU", "20", "800", "16"],
  ["AD48-2000850DU", "20", "850", "17"],
  ["AD48-2000900DU", "20", "900", "18"],
  ["AD48-2200300DU", "22", "300", "6.6"],
  ["AD48-2200350DU", "22", "350", "7.7"],
  ["AD48-2200400DU", "22", "400", "8.8"],
  ["AD48-2200450DU", "22", "450", "9.9"],
  ["AD48-2200500DU", "22", "500", "11"],
  ["AD48-2200550DU", "22", "550", "12.1"],
  ["AD48-2200600DU", "22", "600", "13.2"],
  ["AD48-2200700DU", "22", "700", "15.4"],
  ["AD48-2200750DU", "22", "750", "16.5"],
  ["AD48-2200800DU", "22", "800", "17.6"],
  ["AD48-2400300DU", "24", "300", "7.2"],
  ["AD48-2400350DU", "24", "350", "8.4"],
  ["AD48-2400400DU", "24", "400", "9.6"],
  ["AD48-2400450DU", "24", "450", "10.8"],
  ["AD48-2400500DU", "24", "500", "12"],
  ["AD48-2400550DU", "24", "550", "13.2"],
  ["AD48-2400600DU", "24", "600", "14.4"],
  ["AD48-2400700DU", "24", "700", "16.8"],
  ["AD48-2400750DU", "24", "750", "18"],
  ["AD48-2400800DU", "24", "800", "19.2"],
];

const culEi57AcRows1 = [
  ["AD-0902500AU", "9", "2500", "22.5"],
  ["AD-1002000AU", "10", "2000", "20"],
  ["AD-1002500AU", "10", "2500", "25"],
  ["AD-1202000AU", "12", "2000", "24"],
  ["AD-1202100AU", "12", "2100", "25.2"],
  ["AD-1501500AU", "15", "1500", "22.5"],
  ["AD-2401000AU", "24", "1000", "24"],
  ["AD-1203000AU", "12", "3000", "36"],
  ["AD-2201500AU", "22", "1500", "33"],
  ["AD-2401250AU", "24", "1250", "30"],
  ["AD-1303000AU", "13", "3000", "39"],
];
const culEi57DcRows1 = [
  ["", "5", "2000", "18"],
  ["AD-0902000DU", "6", "2000", "22.5"],
  ["AD-1202000DU", "7.5", "1500", "24"],
  ["AD-1351500DU", "9", "2000", "20.3"],
  ["AD-1501500DU", "13.5", "1500", "27"],
  ["AD-2400800DU", "15", "800", "19.2"],
  ["AD-2401000DU", "24", "1000", "24"],
  ["AD-1502000DU", "15", "2000", "30"],
  ["AD-2001500DU", "20", "1500", "30"],
  ["AD-2551300DU", "25.5", "1300", "33.15"],
  ["AD-3100800DU", "31", "800", "24.8"],
];

const culEi66DcRows1 = [["AD-1503000DU", "15", "3000", "45"]];

async function goToHome() {
  await router.push({ name: "home", params: { lang: currentLang.value } });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function goToHomeProducts() {
  await router.push({
    name: "home",
    params: { lang: currentLang.value },
    hash: "#products",
  });
  requestAnimationFrame(() => {
    const target = document.getElementById("products");
    const navbar = document.querySelector(".ymc-navbar");

    if (!target) return;

    const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
  });
}
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-20">
    <fwb-breadcrumb>
      <fwb-breadcrumb-item home :href="homePath" @click.prevent="goToHome">
        {{ t("nav.home") }}
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item
        :href="homeProductsPath"
        @click.prevent="goToHomeProducts"
      >
        {{ t("home.products") }}
      </fwb-breadcrumb-item>
      <fwb-breadcrumb-item>
        {{ t(currentProduct.titleKey) }}
      </fwb-breadcrumb-item>
    </fwb-breadcrumb>
    <!-- <p class="mb-3 text-sm font-semibold uppercase text-teal-700">
      {{ productType }}
    </p> -->
    <h1 class="mb-8 text-4xl font-bold text-teal-900">
      {{ t(currentProduct.titleKey) }}
    </h1>

    <section v-if="productType === 'acAdaptor'" class="mb-12">
      <!-- PSE -->
      <div>
        <div class="flex items-center text-center gap-6 mb-8">
          <fwb-button gradient="cyan-blue">
            <img src="/src/assets/images/ac_adaptor/pse.png" alt="" />
          </fwb-button>
          <p class="mb-6 text-3xl text-gray-700 dark:text-gray-300">
            Certification mark : PSE
          </p>
        </div>
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-cyan-500 to-blue-500"
          >
            EI-35 SERIES
          </p>
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div class="mx-auto w-full max-w-md lg:mx-0">
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/PSE/35.jpg"
                alt="EI-35 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item>PLUG IN TRANSFORMER</fwb-list-group-item>
                <fwb-list-group-item>Input:100V AC 50/60Hz</fwb-list-group-item>
                <fwb-list-group-item>SAFETY:PSE</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto">
              <!-- 表格 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">INPUT</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row>
                    <fwb-table-cell class="text-center"
                      >100V AC 50/60Hz</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center">15V Max</fwb-table-cell>
                    <fwb-table-cell class="text-center"
                      >800mA Max</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >2.7VA Max</fwb-table-cell
                    >
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-cyan-500 to-blue-500"
          >
            EI-41 SERIES
          </p>
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div class="mx-auto w-full max-w-md lg:mx-0">
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/PSE/41.jpg"
                alt="EI-41 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item>PLUG IN TRANSFORMER</fwb-list-group-item>
                <fwb-list-group-item>Input:100V AC 50/60Hz</fwb-list-group-item>
                <fwb-list-group-item>SAFETY:PSE ※DESK TYPE</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto">
              <!-- 表格 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">INPUT</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(AC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row>
                    <fwb-table-cell class="text-center"
                      >100V AC 50/60Hz</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >3~15V Max</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >1200mA Max</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >7.5VA Max</fwb-table-cell
                    >
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-cyan-500 to-blue-500"
          >
            EI-48 SERIES
          </p>
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div class="mx-auto w-full max-w-md lg:mx-0">
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/PSE/48.jpg"
                alt="EI-48 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item>PLUG IN POWER SUPPLY</fwb-list-group-item>
                <fwb-list-group-item
                  >INPUT: 100V AC 50/60Hz</fwb-list-group-item
                >
                <fwb-list-group-item>SAFETY:PSE ※DESK TYPE</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div class="w-full overflow-x-auto lg:w-auto">
              <!-- 表格 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">INPUT</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row>
                    <fwb-table-cell class="text-center"
                      >100V AC 50/60Hz</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >3~15V Max</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >Max 2100mA</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center">10~20</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
      </div>
      <!-- BSMI -->
      <div>
        <div class="flex items-center text-center gap-6 mb-8">
          <fwb-button gradient="pink-orange">
            <img src="/src/assets/images/ac_adaptor/bsmi.png" alt="" />
          </fwb-button>
          <p class="mb-6 text-3xl text-gray-700 dark:text-gray-300">
            Certification mark : BSMI
          </p>
        </div>
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-pink-500 to-orange-500"
          >
            EI-35 SERIES
          </p>
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div class="mx-auto w-full max-w-md lg:mx-0">
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/BSMI/35.jpg"
                alt="EI-35 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >PLUG IN CLASS 2 TRANSFORMER</fwb-list-group-item
                >
                <fwb-list-group-item>INPUT:110V AC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>SAFETY:BSMI</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div class="w-full overflow-x-auto lg:w-auto">
              <!-- 表格 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">INPUT</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row>
                    <fwb-table-cell class="text-center"
                      >110V AC 60Hz</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >1.25~24VCD</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center"
                      >Max 800mA</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center">2.5</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-pink-500 to-orange-500"
          >
            EI-41 SERIES
          </p>
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div class="mx-auto w-full max-w-md lg:mx-0">
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/BSMI/41.jpg"
                alt="EI-41 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item>PLUG IN POWER</fwb-list-group-item>
                <fwb-list-group-item>INPUT:110V AC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>SAFETY:BSMI</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div class="w-full overflow-x-auto lg:w-auto">
              <!-- 表格 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">INPUT</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row>
                    <fwb-table-cell class="text-center"
                      >110V AC 60Hz</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center">3~15V</fwb-table-cell>
                    <fwb-table-cell class="text-center"
                      >Max 800mA</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center">7.5</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-pink-500 to-orange-500"
          >
            EI-48 SERIES
          </p>
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div class="mx-auto w-full max-w-md lg:mx-0">
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/BSMI/48.jpg"
                alt="EI-48 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item>PLUG IN POWER SUPPLY</fwb-list-group-item>
                <fwb-list-group-item>INPUT:110V AC 60Hz</fwb-list-group-item>
                <fwb-list-group-item
                  >SAFETY:BSMI ※DESK TYPE</fwb-list-group-item
                >
              </fwb-list-group>
            </div>
            <div class="w-full overflow-x-auto lg:w-auto">
              <!-- 表格 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">INPUT</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row>
                    <fwb-table-cell class="text-center"
                      >110V AC 60Hz</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center">4.5~24V</fwb-table-cell>
                    <fwb-table-cell class="text-center"
                      >Max 200mA</fwb-table-cell
                    >
                    <fwb-table-cell class="text-center">18V Max</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
      </div>
      <!-- CUL -->
      <div>
        <div class="flex items-center text-center gap-6 mb-8">
          <fwb-button gradient="purple-blue">
            <img src="/src/assets/images/ac_adaptor/cul.png" alt="" />
          </fwb-button>
          <p class="mb-6 text-3xl text-gray-700 dark:text-gray-300">
            Certification mark : CUL
          </p>
        </div>
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-purple-500 to-blue-500"
          >
            EI-35 SERIES
          </p>
          <!-- AC ADAPTOR EI-35 SERIES(1) -->
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-35-AC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-35/ac.jpg"
                alt="EI-35 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >PLUG IN CLASS 2 TRANSFORMER (AC to AC)</fwb-list-group-item
                >
                <fwb-list-group-item>INPUT:120V AC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>SAFETY:UL1310 & CUL</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-35-AC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(AC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi35AcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
              <!-- 表格2 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(AC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi35AcRows2" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格2 -->
            </div>
          </div>
          <!-- AC ADAPTOR EI-35 SERIES(2) -->
          <div
            class="mt-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-35-DC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-35/dc.jpg"
                alt="EI-35 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >PLUG IN CLASS 2 TRANSFORMER (AC to DC)</fwb-list-group-item
                >
                <fwb-list-group-item>Input:120V AC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>SAFETY:UL1310 & CUL</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-35-DC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi35DcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
              <!-- 表格2 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi35DcRows2" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格2 -->
            </div>
          </div>
        </div>
        <!-- CUL AC ADAPTOR EI-41 SERIES -->
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-purple-500 to-blue-500"
          >
            EI-41 SERIES
          </p>
          <!-- AC ADAPTOR EI-41 SERIES(1) -->
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-41-AC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-41/ac.jpg"
                alt="EI-41 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >Plug in class 2 transformer (AC to AC)</fwb-list-group-item
                >
                <fwb-list-group-item>Input:120VAC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>Safety:UL & CUL</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-41-AC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(AC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi41AcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
              <!-- 表格2 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(AC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi41AcRows2" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格2 -->
            </div>
          </div>
          <!-- AC ADAPTOR EI-41 SERIES(2) -->
          <div
            class="mt-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-35-DC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-41/dc.jpg"
                alt="EI-41 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >I.T.E Power Supply (AC to DC)</fwb-list-group-item
                >
                <fwb-list-group-item>Input:120VAC 60Hz</fwb-list-group-item>
                <fwb-list-group-item
                  >Safety:UL 1950 & CUL ※ Desk Type</fwb-list-group-item
                >
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-41-DC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi41DcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
              <!-- 表格2 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi41DcRows2" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格2 -->
            </div>
          </div>
        </div>
        <!-- CUL AC ADAPTOR EI-48 SERIES -->
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-purple-500 to-blue-500"
          >
            EI-48 SERIES
          </p>
          <!-- AC ADAPTOR EI-48 SERIES(1) -->
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-48-AC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-48/ac.jpg"
                alt="EI-48 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >Plug In Class 2 Transformer (AC to AC)</fwb-list-group-item
                >
                <fwb-list-group-item>Input:120V AC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>Safety:UL & CUL</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-48-AC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(AC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi48AcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
          <!-- AC ADAPTOR EI-48 SERIES(2) -->
          <div
            class="mt-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-48-DC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-48/dc.jpg"
                alt="EI-48 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >Plug In Class 2 or I.T.E Power Supply (AC to
                  DC)</fwb-list-group-item
                >
                <fwb-list-group-item>Input:120VAC 60Hz</fwb-list-group-item>
                <fwb-list-group-item
                  >Safety:UL & 1950 & CUL ※ Desk Type</fwb-list-group-item
                >
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-48-DC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi48DcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
              <!-- 表格2 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi48DcRows2" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格2 -->
              <!-- 表格3 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi48DcRows3" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格3 -->
              <!-- 表格4 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi48DcRows4" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格4 -->
            </div>
          </div>
        </div>
        <!-- CUL AC ADAPTOR EI-57 SERIES -->
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-purple-500 to-blue-500"
          >
            EI-57 SERIES
          </p>
          <!-- AC ADAPTOR EI-57 SERIES(1) -->
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-57-AC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-57/ac.jpg"
                alt="EI-57 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >Plug In Class 2 Transformer (AC To AC)</fwb-list-group-item
                >
                <fwb-list-group-item>Input:120VAC 60Hz</fwb-list-group-item>
                <fwb-list-group-item
                  >Safety:UL & CUL ※ Desk Type</fwb-list-group-item
                >
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-57-AC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(AC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi57AcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
          <!-- AC ADAPTOR EI-57 SERIES(2) -->
          <div
            class="mt-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-57-DC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-57/dc.jpg"
                alt="EI-57 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item
                  >I.T.E Power Supply (AC To DC)</fwb-list-group-item
                >
                <fwb-list-group-item>Input:120VAC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>Safety:UL 1950 & CUL</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-57-DC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi57DcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
        <!-- CUL AC ADAPTOR EI-66 SERIES -->
        <div class="my-5">
          <p
            class="text-center dark:text-white text-white py-2 bg-linear-to-r from-purple-500 to-blue-500"
          >
            EI-66 SERIES
          </p>
          <!-- AC ADAPTOR EI-66 SERIES(1) -->
          <div
            class="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-around"
          >
            <div
              id="CUL-EI-66-AC"
              class="mx-auto w-full max-w-md self-start lg:sticky lg:top-24 lg:mx-0"
            >
              <img
                class="w-full"
                src="/src/assets/images/ac_adaptor/CUL/EI-66/dc.jpg"
                alt="EI-66 SERIES"
              />
              <fwb-list-group class="w-full">
                <fwb-list-group-item>I.T.E Power Supply</fwb-list-group-item>
                <fwb-list-group-item>Input:120VAC 60Hz</fwb-list-group-item>
                <fwb-list-group-item>Safety:UL 1950 & CUL</fwb-list-group-item>
              </fwb-list-group>
            </div>
            <div
              id="CUL-EI-66-AC-table"
              class="flex w-full flex-col gap-6 overflow-x-auto lg:w-auto"
            >
              <!-- 表格1 -->
              <fwb-table hoverable>
                <thead
                  class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr class="text-center">
                    <th rowspan="2" class="px-6 py-3 align-middle">MODEL</th>
                    <th colspan="3" class="px-6 py-3">OUTPUT(DC)</th>
                  </tr>
                  <tr class="bg-gray-100 text-center dark:bg-gray-600">
                    <th class="px-6 py-3">VOLTAGE(V)</th>
                    <th class="px-6 py-3">CURRENT(mA)</th>
                    <th class="px-6 py-3">VA</th>
                  </tr>
                </thead>
                <fwb-table-body>
                  <fwb-table-row v-for="row in culEi66DcRows1" :key="row[0]">
                    <fwb-table-cell class="text-center font-medium">{{
                      row[0]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[1]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[2]
                    }}</fwb-table-cell>
                    <fwb-table-cell class="text-center">{{
                      row[3]
                    }}</fwb-table-cell>
                  </fwb-table-row>
                </fwb-table-body>
              </fwb-table>
              <!-- 表格 -->
            </div>
          </div>
        </div>
      </div>

      <!-- <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t('home.acAdaptorContent.01') }}
      </p>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t('home.acAdaptorContent.02') }}
      </p>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t('home.acAdaptorContent.03') }}
      </p>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t('home.acAdaptorContent.04') }}
      </p>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t('home.acAdaptorContent.05') }}
      </p> -->
    </section>
    <section v-else-if="productType === 'powerTransformer'" class="mb-12">
      <div class="flex">
        <fwb-img
          alignment="mx-auto"
          alt="power_transformer"
          size="max-w-md"
          src="/src/assets/images/power_transformer/a.jpg"
        />
        <fwb-img
          alignment="mx-auto"
          alt="power_transformer"
          size="max-w-md"
          src="/src/assets/images/power_transformer/b.jpg"
        />
      </div>
      <div class="flex flex-col justify-center text-center gap-6">
        <h2 class="pt-12">{{ t("products.powerTransformerContent.01") }}</h2>
        <p>{{ t("products.powerTransformerContent.02") }}</p>
        <p>{{ t("products.powerTransformerContent.03") }}</p>
        <p>{{ t("products.powerTransformerContent.04") }}</p>
      </div>
    </section>
    <section v-else-if="productType === 'switchPowerSupply'" class="mb-12">
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t("home.switchPowerSupplyContent.01") }}
      </p>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t("home.switchPowerSupplyContent.02") }}
      </p>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t("home.switchPowerSupplyContent.03") }}
      </p>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        {{ t("home.switchPowerSupplyContent.04") }}
      </p>
    </section>

    <!-- <ul class="grid gap-4 text-gray-700">
      <li
        v-for="item in currentProduct.contentItems"
        :key="item"
        class="rounded border border-teal-100 bg-teal-50 p-4"
      >
        {{ t(`${currentProduct.contentKey}.${item}`) }}
      </li>
    </ul> -->
  </div>
</template>
