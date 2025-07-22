<template>
  <div class="feed-view relative min-h-screen font-tex-gyre-heros">
    <div id="gallery-wrapper" class="relative w-full h-full">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :style="{
          width: image.width + 'px',
          left: image.left + 'px',
          top: image.top + 'px',
          zIndex: image.zIndex
        }"
        class="image absolute rounded-lg shadow-md transition-transform duration-300 ease-in-out rounded-4xl"
        :class="{ dragging: draggedImage === image }"
        @click="showDescription(image)"
        @mousedown="startDrag($event, image)"
      />
    </div>

    <div
      id="image-description"
      v-if="showDescriptionBox"
      class="fixed bottom-0 left-0 w-full h-24 bg-white flex items-center p-4 z-10"
      @click.stop
    >
      <div
        id="image-title"
        class="w-24 h-20 flex items-center justify-center font-bold mr-4 text-black"
      >
        {{ selectedImage?.title || 'Image Title' }}
      </div>
      <div id="image-text" class="flex-grow text-base text-gray-700">
        {{ selectedImage?.description || 'Click an image to see its description.' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface ImageItem {
  src: string
  width: number
  left: number
  top: number
  zIndex: number
  title?: string
  description?: string
}

const images = ref<ImageItem[]>([])
const imageModules = import.meta.glob('/public/img/random/*')
const imageFiles = Object.keys(imageModules).map((path) => path.replace('/public', ''))

const showDescriptionBox = ref(false)
const selectedImage = ref<ImageItem | null>(null)
const maxZIndex = ref(0)

let isDragging = false
let draggedImage = ref<ImageItem | null>(null)
let dragOffsetX = 0
let dragOffsetY = 0
let currentImageElement: HTMLElement | null = null

let availableImages = [...imageFiles]

const getNextImageSrc = () => {
  if (availableImages.length === 0) {
    availableImages = [...imageFiles] // Reset the array when all images have been used
  }
  const randomIndex = Math.floor(Math.random() * availableImages.length)
  const selectedImage = availableImages.splice(randomIndex, 1)[0]
  return selectedImage
}

const getRandomSize = () => {
  return Math.floor(Math.random() * (900 - 100 + 1) + 100) // Random between 100px and 900px
}

const getRandomPosition = (imageWidth: number) => {
  return Math.random() * (window.innerWidth - imageWidth - 100) // Adjust for horizontal margin
}

const addImage = () => {
  const width = getRandomSize()
  const newImage: ImageItem = {
    src: getNextImageSrc(),
    width: width,
    left: getRandomPosition(width),
    top: images.value.length * 180, // Staggered vertical spacing
    zIndex: 0,
    title: `Image ${images.value.length + 1}`,
    description: `Description for image ${images.value.length + 1}.`
  }
  images.value.push(newImage)
}

const loadInitialImages = () => {
  for (let i = 0; i < 10; i++) {
    addImage()
  }
}

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 500) {
    addImage()
  }
}

const showDescription = (image: ImageItem) => {
  if (!isDragging) {
    selectedImage.value = image
    showDescriptionBox.value = true
  }
}

const hideDescription = (event: MouseEvent) => {
  const descriptionBox = document.getElementById('image-description')
  if (descriptionBox && !descriptionBox.contains(event.target as Node)) {
    showDescriptionBox.value = false
    selectedImage.value = null
  }
}

const startDrag = (event: MouseEvent, image: ImageItem) => {
  event.preventDefault() // Prevent default browser drag behavior
  isDragging = true
  draggedImage.value = image // Store the image object
  currentImageElement = event.target as HTMLElement

  maxZIndex.value++
  image.zIndex = maxZIndex.value

  dragOffsetX = event.clientX - currentImageElement.getBoundingClientRect().left
  dragOffsetY = event.clientY - currentImageElement.getBoundingClientRect().top

  currentImageElement.style.cursor = 'grabbing'
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', stopDrag)
}

const onMouseMove = (event: MouseEvent) => {
  if (draggedImage.value && currentImageElement) {
    const galleryWrapper = document.getElementById('gallery-wrapper')
    if (galleryWrapper) {
      const galleryWrapperRect = galleryWrapper.getBoundingClientRect()
      draggedImage.value.left = event.clientX - dragOffsetX - galleryWrapperRect.left
      draggedImage.value.top = event.clientY - dragOffsetY - galleryWrapperRect.top
    }
  }
}

const stopDrag = () => {
  isDragging = false
  draggedImage.value = null // Clear the dragged image
  if (currentImageElement) {
    currentImageElement.style.cursor = 'grab'
  }
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', stopDrag)
}

onMounted(() => {
  loadInitialImages()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', hideDescription)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', hideDescription)
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', stopDrag)
})
</script>

<style scoped>
.image {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
}

.image:hover {
  transform: scale(1.05);
}
</style>
