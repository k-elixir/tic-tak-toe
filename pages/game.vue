<script setup>
import { computed, ref } from "vue";

const player = ref("X");
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

const winner = computed(() => calculateWinner(board.value.flat()));

const isTie = computed(() => {
  return (
    !winner.value && board.value.flat().filter(cell => cell === "").length === 0
  );
});

function makeMove(x, y) {
  if (winner.value) {
    return;
  }

  if (board.value[x][y]) {
    return;
  }

  board.value[x][y] = player.value;

  player.value = player.value === "X" ? "O" : "X";
}

function resetGame() {
  board.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  player.value = "X";
}
</script>

<template>
  <main class="pt-5 text-center">
    <h1 class="mb-5 text-8xl font-bold text-pink-900 title-font">
      Tic Tac Toe
    </h1>

    <h3 class="text-xl mb-3">{{ player }}'s turn</h3>

    <Board :board="board" :player="player" :winner="winner" @make-move="makeMove"/>

    <div class="text-center">
      <h2 v-if="winner" class="text-5xl font-bold mb-6 animate-bounce">
        Player <span class="text-pink-900">{{ winner }}</span> wins!
      </h2>
      <h2 v-if="isTie" class="text-5xl font-bold mb-6 animate-bounce">
        T<span class="text-pink-900">!</span>E
      </h2>
      <button
        class="px-4 py-2 mb-3 bg-pink-950 rounded font-bold hover:bg-pink-700 duration-300"
        @click="resetGame"
      >
        RESET
      </button>
    </div>
  </main>
</template>

<style scoped>
</style>
