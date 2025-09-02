import { definePreset } from 'unocss'

export const textVertical = definePreset(() => {
  return {
    name: 'unocss-vertical-preset',
    rules: [
      [
        'vertical-rl',
        {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'upright',
        },
      ],
      [
        'vertical-lr',
        {
          'writing-mode': 'vertical-lr',
          'text-orientation': 'upright',
        },
      ],
      [
        'horizontal-tb',
        {
          'writing-mode': 'horizontal-tb',
          'text-orientation': 'sideways',
        },
      ],

      [
        'sideways',
        {
          'text-orientation': 'sideways',
        },
      ],
    ],
  }
})
