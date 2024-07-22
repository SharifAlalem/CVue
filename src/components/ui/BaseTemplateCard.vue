<template>
  <div id="templateCard" :style="bgColor">
    <PdfCustomizationVue />
    <component class="component" :is="choosedTemplate"></component>
  </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { onMounted, inject, provide, reactive, shallowRef, ref } from "vue";
import PdfCustomizationVue from "./PdfCustomization.vue";

const templatesInfoData: any = inject("templatesInfoData");
const choosedTemplate: any = shallowRef(null);
const loadError: any = shallowRef(null);
const loadComponent = async () => {
  try {
    // Clear any previous error
    loadError.value = null;
    choosedTemplate.value = (await import(`@/components/templates/template_${templatesInfoData.find((template:any)=> template.selected === true ).templateId}.vue`)).default;
  } catch (error:any) {
       // Handle errors
       loadError.value = `Failed to load : ${error.message}`;
    console.error(error);
  }
}
const generatePDF = async () => {
  const resume = document.getElementById('content');
  const pageBreak = document.getElementById('page-break');
  pageBreak!.style.display = 'none';
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageHeight = 297; // A4 page height in mm
  const pageWidth = 210; // A4 page width in mm
  const margin = 0; // Margin in mm

  const canvas = await html2canvas(resume!, { scale: 2 ,allowTaint: true});
  const imgData = canvas.toDataURL('image/png');
  const imgWidth = pageWidth - 2 * margin;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;
  pdf.html(resume!,{autoPaging:'text'});
  pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
  heightLeft -= pageHeight - margin * 2;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight + margin * 2;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight - margin * 2;
  }

  pdf.save('resume.pdf');
  window.open(pdf.output('bloburl'));
  pageBreak!.style.display = 'block';
}

//theme dynamic change color
let bgColor: any = reactive({
  "--bg-color": "#0FA38B",
  "--font-color": "#ffffff",
});

const changebgColor = ($event: any) => {
  bgColor["--bg-color"] = $event.target.value;
};
const changefontColor = ($event: any) => {
  bgColor["--font-color"] = $event.target.value;
};

provide("bgColor", bgColor);
provide("changebgColor", changebgColor);
provide("changefontColor", changefontColor);
//===========================

let pdfContent: any = ref(null);
const updatepdfContent = (newValue: any) => {
  pdfContent.value = newValue;
};
provide("updatepdfContent", updatepdfContent);
provide("generateReport", generatePDF);
//===========================

onMounted(() => {
  loadComponent();
});
</script>

<style lang="scss">
@import "../../assets/styles/mixins";

#templateCard {
  border: 2px solid white;
  border-radius: 10px;
  width: fit-content;
  margin: auto;
  height: 100%;
  background-color: white;
  z-index: 999;

  @media (max-width: $breakpoint-mobile) {
    width: 98%;
  }
}

.actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;
  box-shadow: $shadow;
  font-size: 12px;

  .operations {
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;

    .control-item {
      width: 15%;
      @media (max-width: $breakpoint-tablet) {
        width: 40%;
      }
      @media (max-width: $breakpoint-mobile) {
        width: 100%;
      }
    }
    label {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      font-weight: bold;
      margin-right: 5px;
    }

    input,
    select {
      padding: 5px;
      margin-bottom: 10px;
      width: 90%;
      border: 2px solid lightgrey;
      color: #333;
      background-color: #fff;
      border-radius: 4px;
      font-size: 14px;

      &:focus {
        border: 2px solid $blue;
        outline: none;
        @include shadow_color(rgb(80, 191, 255, 0.2));
      }
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }

    input[type="color"],
    input[type="checkbox"] {
      cursor: pointer;
      width: 25px;
      height: 25px;
    }

    .bgColor input {
      background-color: var(--bg-color);
    }

    .textColor input {
      background-color: var(--font-color);
    }
  }

  .generateBtn {
    width: 250px;

    .icon {
      margin-right: 15px;
    }
  }
}
</style>
