import { defineNuxtModule, useNuxt } from '@nuxt/kit'

const CHUNK_TITLE = 'app-common'

export default defineNuxtModule({
  meta: {
    name: 'group-chunks',
  },
  setup() {
    const nuxt = useNuxt()
    let dirs: string[]

    nuxt.hook('components:dirs', _dirs => {
      dirs = _dirs.map(d => (typeof d === 'string' ? d : d.path))
    })

    nuxt.hook('vite:extendConfig', (config, { isServer }) => {
      if (Array.isArray(config.build.rollupOptions.output) || isServer) return
      config.build.rollupOptions.output.manualChunks = id => {
         if (
          id.includes('components/app') &&
          dirs.some(dir => id.includes(dir))
        ) {
          return CHUNK_TITLE
        }
      }
    })
  },
})