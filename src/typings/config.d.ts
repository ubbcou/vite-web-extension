declare namespace Config {
  type PropKeys = 'grayscale'
  interface ConfigItem {
    value: boolean | number
    label: string
    description?: string
  }
  type Root = {
    [key in PropKeys]: ConfigItem
  }
}

