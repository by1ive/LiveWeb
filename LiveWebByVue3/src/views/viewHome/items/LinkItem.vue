<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <slot name="heading"></slot>
      <p>
        <slot name="info"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
}

p {
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 1.2rem 0 1rem 40px;
  }

  i {
    top: calc(50% - 25px);
    left: -15px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}
</style>
