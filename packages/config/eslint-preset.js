module.exports = {
  extends: ['next', 'prettier'],
  settings: {
    next: {
      rootDir: [
        'apps/angular/',
        'apps/docs/',
        'apps/web/',
        'packages/ui/',
        'packages/config/',
        'packages/tsconfig/',
      ],
    },
  },
}
