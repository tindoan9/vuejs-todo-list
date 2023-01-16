import Vue from 'vue'

export const Toastify = {
  success: (text) => Vue.$vToastify.success(text, { canTimeout: true }),
  error: (text) => Vue.$vToastify.error(text, { canTimeout: true }),
  wanning: (text) => Vue.$vToastify.wanning(text, { canTimeout: true }),
};
