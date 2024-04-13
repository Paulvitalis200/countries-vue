import { onMounted, onUnmounted, reactive, toRefs } from "vue";

export function useMonitorSize() {
  const sizes = reactive({
    browserWidth: window.innerWidth,
    deviceWidth: screen.width,
    isMobile: false,
    isTablet: false,
  });

  const browserResized = () => {
    sizes.browserWidth = window.innerWidth;
    sizes.deviceWidth = screen.width;
    sizes.isMobile = isMobile();
    sizes.isTablet = isTablet();
  };

  const isMobile = () => {
    return window.innerWidth <= 600 ? true : false;
  };

  const isTablet = () => {
    return window.innerWidth > 600 && window.innerWidth <= 1024 ? true : false;
  };

  onMounted(() => {
    window.addEventListener("resize", browserResized);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", browserResized);
  });

  return {
    ...toRefs(sizes),
  };
}
