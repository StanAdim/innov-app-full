<template>
  <div class="loading">
    <div class="arc">
    </div>
    <h1><span>LOADING</span></h1>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Inconsolata");



.loading {
  margin: .3rem;
  position: relative;
  padding: .4rem;
  top: 2.4rem;
  height: 30vh;
  background-color: #a8847437;
}

.arc {
  margin: auto;
  top: 10rem;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 2px solid #29ff37;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: rt .6s infinite linear;
}
.arc::before {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border-top: 2px solid #5429ff;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: rt 2s infinite linear reverse;
  content: "";
}
.arc::after {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  border-top: initial;
  border-left: initial;
  border-right: initial;
  animation: cw 1s infinite;
  content: "";
  background: #f67e4f}

h1 {
  position: absolute;
  height: 40px;
  font-weight: 600;
  margin: auto;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 14px;
  font-weight: lighter;
  color: #714205;
}
h1 span {
  display: none;
}
h1::after {
  animation: txt 1.1s infinite;
  content: "";
}

@keyframes rt {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes cw {
  0% {
    width: 0;
    height: 0;
  }
  75% {
    width: 40px;
    height: 40px;
  }
  100% {
    width: 0;
    height: 0;
  }
}
@keyframes txt {
  0% {
    content: "LOADING.";
  }
  50% {
    content: "LOADING..";
  }
  100% {
    content: "LOADING...";
  }
}
</style>