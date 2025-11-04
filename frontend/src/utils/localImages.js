export const getLocalImages = () => {
  // Import all images from src/assets/photos as URLs at build time
  const modules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp}', {
    eager: true,
    as: 'url'
  })
  return Object.values(modules)
}