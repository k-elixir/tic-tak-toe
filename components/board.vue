<script setup>
const {board, player, winner} = defineProps(["board", "player", "winner"])
const makeMove = defineEmits(["makeMove"])


function isXCell(cell) {
  return cell === "X";
}

function isOCell(cell) {
  return cell === "O";
}
</script>

<template>
  <div class="flex flex-col items-center mb-7">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="flex">
      <div
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        class="border border-pink-900 bg-slate-300 w-80px h-80px hover:bg-gray-400 flex items-center justify-center material-icons-outlined !text-6xl !leading-snug cursor-pointer"
        :class="[
          isXCell(cell) ? 'text-pink-900' : 'text-slate-950'
        ]"
        @click="$emit('makeMove', rowIndex, cellIndex)"
      >
        {{ isXCell(cell) ? "close" : isOCell(cell) ? "trip_origin" : "" }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
