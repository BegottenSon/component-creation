<script>

</script>

<!-- <div class="buttonFill"> -->
    <button class="button buttonFill">
        <slot>button</slot>
    </button>
<!-- </div> -->

<style>
.button {
  color: #E91B50;
  border: 4px solid;
  border-radius: 12px;
  padding: 1em;
  transition: 0.2s ease;
  margin: 1em;
  background-color: transparent;
}

.button, .buttonFill {
  position: relative;
}

.button:hover{
  color: #fff;
  border-color: #E91B50;
}

.buttonFill:before {
  content: '';
  position: absolute;
  background-color: #E91B50;
  z-index: -1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  /* border-radius: 12px; */
  transition: 0.1s ease-in-out;
  transform: scale(0)
}

.buttonFill:hover{
  cursor: pointer;
  transition: 0.1s ease;
}

.buttonFill:hover:before {
  animation: buttonFill 0.1s ease forwards;
}

.buttonFill:active{
  transform: scale(0.95);
  transition: 0.1s ease;
}

@keyframes buttonFill {
  0% {transform: scale(0)}
  100% {transform: scale(1)}
}

</style>