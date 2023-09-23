
<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';


onMounted(() => {
    const tur = document.querySelector('feTurbulence');
    const val = {
            freq: 0.0001,
        }
    function repeat(){
        animation.to(val,{
            freq: 0.1,
            duration: 1
        })
    
        animation.to(val,{
            freq: 0.0001,
            duration: 1
        })
    }
    const animation = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        onUpdate: () => {
            if(null != tur){
                tur.setAttribute('baseFrequency', `0 ${val.freq}`);
            }
        },
        onRepeat: () => {
            repeat();
        }
    })
});

</script>
<template>
    <div class="info">
        <div class="show-svg">
            <i>
                <slot name="logo"></slot>
            </i>
        </div>
        <div class="show-info">
            <p>
                <slot name="info"></slot>
            </p>
        </div>
    </div>
</template>


<style scoped>
.info {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
}

.show-svg
{
    display: flex;
    place-items: center;
    place-content: center;
    position: relative;
    filter: url(#noise);
}


i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 320px;
  height: 320px;
  border-radius: 10px;
}

.show-info{
    display: flex;
    place-items: center;
    place-content: center;
    position: absolute;
    margin-top: 220px;
}
.show-info p{
    font-size: 1.25rem;
    color: rgb(45, 23, 170);
}
</style>