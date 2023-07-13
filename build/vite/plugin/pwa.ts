/**
 * Zero-config PWA for Vite
 * https://github.com/antfu/vite-plugin-pwa
 */
import { VitePWA } from 'vite-plugin-pwa';

export function configPwaConfig(env: ViteEnv) {
  const { VITE_USE_PWA, VITE_GLOB_APP_TITLE, VITE_GLOB_APP_SHORT_NAME } = env;

  if (VITE_USE_PWA) {
    // vite-plugin-pwa
    const pwaPlugin = VitePWA({
      manifest: {
        name: VITE_GLOB_APP_TITLE,
        short_name: VITE_GLOB_APP_SHORT_NAME,
        icons: [
          {
            // src: './resource/img/pwa-190x237.png',
            src: './resource/img/windsock.gif',
            sizes: '190x237',
            type: 'image/gif',
          },
          {
            // src: './resource/img/pwa-610x762.png',
            src: './resource/img/windsock.gif',
            sizes: '610x762',
            type: 'image/gif',
          },
        ],
      },
    });
    return pwaPlugin;
  }
  return [];
}
