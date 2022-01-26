<template>
  <div class="my-title" :style="{ color: textColor }">
    <slot></slot>
    <div class="line" :style="{ backgroundColor: lineColor }"></div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, defineProps } from "vue";
interface props {
  textColor?: string;
  textColor_h?: string;
  lineColor?: string;
}
const props: props = defineProps({
  textColor: String,
  textColor_h: {
    type: String,
    default: "#851ce7",
  },
  lineColor: {
    type: String,
    default: "#851ce7",
  },
});

let { lineColor, textColor_h, textColor } = toRefs(props);
</script>
<style scoped>
.my-title {
  display: inline-block;
  opacity: 0.8;
  transition: color 0.5s linear;
  position: relative;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAMAAAAL146mAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAASNQTFRFAAAAAAAAAAAAAAAAAAAAGSQmGCUnDRoaAAAAGCUon6SlFyQmDhsbAAAAAAAAFyQnlJqcFyMlDw8PAAAAFyMmi5GSFiInERERAAAAFyMm+/v7gYiJFyQmABUV+vr6d36AFiMl+Pn5b3d5FyMlAAAA9vf3ZW5wFiIkAAAA9fX1XGVnFyIkAAAA8vPzVV5gFiEkAAAA8PDwTlhaFSEk7O3tRlFTFyEl1NfXGCQm6OnpQUtNEx0gAAAAQEpMERodAAAAP0lLERkcAAAAAAAAFyMmAAAAAAAAFiEjFiIlFiIln6SlFyMmAAAAAAAAAAAAAAAABQoKFSEjAAAAAAAABgwMFSEjoKSm09XWFyImBg0NFCAiFiEjERkZAAAA/Pz8+/v7////3+LoFQAAAF50Uk5TAAECAwVydxQKoc6FEwQOpMyCERCmyX4PEaf+xXkM/sJ0/b5uCfy7aQj7uGMH+rVcBviyVvawTeqU9bJPC7VZFLZaGA2pHA99q6zWqBUeISMxlBITK5LV6pspf4o9F3yyPVgAAAABYktHRGDFt3wQAAAACW9GRnMAAAAAAAAAAgDoHNRMAAAACXBIWXMAAADIAAAAyABj+uetAAAACXZwQWcAAAAgAAAAIACH+pydAAAA8klEQVQY013R6VbCMBAF4E4SJYoBtILFDdCKVREr4IKirCIq4oI7Mr7/W1hoqInz8zs5Se5cwzCAUAKGOsCmpkNUNaB8ZjY8pxqISBRj8wuKATMX8SeeWPozYFYScXlldS0wn3A9leYTk4SZjU1b/mVCuJXddnwLCHd293JEJ9zPH7hEJzwsFEemEpaOjhnohCenNtGpfHZeoRqVLy6r/07V6o3m+C4vtpzWVXv8oohctzqdm1uP7roO9VfYve89PD55lnx2ZSLetvqNl9e39w+TyeBUMLfS//wafDdFsDMAYZvDoeUQrRWX85xW1KhNWecvqKk8tzJNk4wAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTItMTZUMDM6NTY6MzYrMDA6MDAqAmTNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEyLTE2VDAzOjU2OjM1KzAwOjAwarfG7AAAAABJRU5ErkJggg==),
    auto;
}
.my-title:hover {
  color: v-bind(textColor_h);
}
.my-title:hover .line {
  width: 100%;
}
.my-title .line {
  width: 0%;
  height: 2px;
  transition: width 0.3s linear;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
