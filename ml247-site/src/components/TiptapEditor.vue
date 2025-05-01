<template>
  <div class="border rounded p-4 min-h-[200px] bg-white text-black">
    <EditorContent :editor="editor" class="prose max-w-none outline-none" />
  </div>
</template>

<script setup>
import { onBeforeUnmount, watch } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const editor = new Editor({
  content: props.modelValue || '',
  extensions: [StarterKit],
  onUpdate({ editor }) {
    emit('update:modelValue', editor.getHTML());
  }
});

onBeforeUnmount(() => editor.destroy());
</script>

<style scoped>
/* Optional fallback if Tailwind isn't enough */
.tiptap {
  min-height: 200px;
  outline: none;
}
</style>
