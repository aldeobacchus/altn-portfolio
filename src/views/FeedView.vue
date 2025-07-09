<template>
  <div class="feed-view relative min-h-screen font-tex-gyre-heros">
    <div id="gallery-wrapper" class="relative w-full h-full">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :style="{ width: image.width + 'px', left: image.left + 'px', top: image.top + 'px' }"
        class="image absolute rounded-lg shadow-md transition-transform duration-300 ease-in-out"
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface ImageItem {
  src: string
  width: number
  left: number
  top: number
  title?: string
  description?: string
}

const images = ref<ImageItem[]>([])
const imageFiles = [
  'image1.JPG',
  'image10.jpg',
  'image11.PNG',
  'image2.webp',
  'image3.jpg',
  'image4.jfif',
  'image5.jpg',
  'image6.jpg',
  'image7.PNG',
  'image8.jpeg',
  'image9.png',
]

const showDescriptionBox = ref(false)
const selectedImage = ref<ImageItem | null>(null)

let isDragging = false
let draggedImage: ImageItem | null = null
let dragOffsetX = 0
let dragOffsetY = 0
let currentImageElement: HTMLElement | null = null

const getRandomImageSrc = () => {
  const randomIndex = Math.floor(Math.random() * imageFiles.length)
  return `/img/random/${imageFiles[randomIndex]}`
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
    src: getRandomImageSrc(),
    width: width,
    left: getRandomPosition(width),
    top: images.value.length * 180, // Staggered vertical spacing
    title: `Image ${images.value.length + 1}`,
    description: `Description for image ${images.value.length + 1}.`,
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
  draggedImage = image // Store the image object
  currentImageElement = event.target as HTMLElement

  dragOffsetX = event.clientX - currentImageElement.getBoundingClientRect().left
  dragOffsetY = event.clientY - currentImageElement.getBoundingClientRect().top

  currentImageElement.style.cursor = 'grabbing'
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', stopDrag)
}

const onMouseMove = (event: MouseEvent) => {
  if (draggedImage && currentImageElement) {
    const galleryWrapper = document.getElementById('gallery-wrapper')
    if (galleryWrapper) {
      const galleryWrapperRect = galleryWrapper.getBoundingClientRect()
      draggedImage.left = event.clientX - dragOffsetX - galleryWrapperRect.left
      draggedImage.top = event.clientY - dragOffsetY - galleryWrapperRect.top
    }
  }
}

const stopDrag = () => {
  isDragging = false
  draggedImage = null // Clear the dragged image
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
.image:hover {
  transform: scale(1.05);
}
</style>
