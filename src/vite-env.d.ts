declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
  import type { DefineComponent } from 'vue'
  export interface GlobalComponents {
    FontAwesomeIcon: DefineComponent<Partial<FontAwesomeIconProps>>
  }
}

export { }
