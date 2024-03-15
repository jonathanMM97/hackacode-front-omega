<template>
  <div class="hk-benefits">
    <div class="hk-benefits__content">
      <div class="hk-benefits__images">
        <img src="@/public/media/headsets.png" alt="Headsets image" />
        <p>{{ $t("text-customers.services") }}</p>
      </div>
      <div class="hk-benefits__images">
        <img src="@/public/media/community.png" alt="Headsets image" />
        <p>{{ $t("text-customers.community") }}</p>
      </div>
      <div class="hk-benefits__images">
        <img src="@/public/media/dollar.png" alt="Headsets image" />
        <p>{{ $t("text-customers.dollar") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hk-benefits {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 6rem;
  padding-left: 10rem;
  padding-right: 10rem;
  gap: 0;

  &__content {
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 10rem;
  }

  &__images {
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(20px);

    img {
      height: 100%;
    }

    p {
      font-size: $font-size--small;
    }
  }
}
</style>
