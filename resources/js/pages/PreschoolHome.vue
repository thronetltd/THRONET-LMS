<template>
  <div class="preschool-home">
    <h1>Welcome to the Preschool Home Page!</h1>
    <div class="mascot-animation">
      <!-- Animated mascot component goes here -->
    </div>
    <div class="learning-games">
      <button v-on:click="startGame">Start Learning Game</button>
      <!-- Add interactive learning games here -->
    </div>
    <style scoped>
      .preschool-home {
        background-color: #f0e68c;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
      }
      .mascot-animation {
        animation: bounce 2s infinite;
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-30px);
        }
      }
    </style>
  </div>
</template>

<script>
export default {
  name: 'PreschoolHome',
  methods: {
    startGame() {
      // Logic to start the interactive learning game
    }
  }
}
</script>