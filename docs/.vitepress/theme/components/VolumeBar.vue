<script lang="ts" setup>
import {ref} from 'vue'

const model = defineModel<number>()

const volume = ref<number>(100)
const input = ref<HTMLInputElement>()
const volumeNum = ref<HTMLElement>()

function onInput() {
    if (!input.value) return
    if (!volumeNum.value) return
    volume.value = parseInt(input.value.value)
    model.value = volume.value / 100
    volumeNum.value.innerHTML = `${volume.value}%`
}
</script>

<template>
    <div class="volume-bar">
        <span class="captions"><slot>普普通通的音量条：</slot></span>
        <input
            ref="input"
            :oninput="onInput"
            :style="{ '--volume': volume + '%' }"
            max="100"
            min="0"
            type="range"
            value="100"
        />
        <p ref="volumeNum" class="volume-num">{{ volume }}%</p>
    </div>
</template>

<style lang="scss" scoped>
*,
*::after,
*::before {
    box-sizing: border-box;
}

.volume-num {
    padding: 0.1rem 0.3rem;
    margin-left: 4px;
    width: 48px;
    font-size: 0.9rem;
    text-align: right;
    background: var(--vp-c-bg-mute);
    border-radius: 5px;
}

.volume-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em 0;
    height: 1rem;
}

@media (min-width: 600px) {
    .volume-bar {
        width: 80%;
    }
}

@media (min-width: 1060px) {
    .volume-bar {
        width: 60%;
    }
}

/* Input */
input[type="range"] {
    appearance: none;
    padding: 0 10px;
    display: block;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
    margin: 17px 0;
    border-radius: 1px;
    height: 1rem;
    flex: 1;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        background: linear-gradient(#5a91f6, #5a91f6) no-repeat;
        background-color: #CCCCCC;
        background-size: var(--volume) 100%;
    }

    &::-webkit-slider-thumb {
        appearance: none;
        border: none;
        border-radius: 50%;
        height: 3px;
        width: 3px;
        background-color: #34acf8;
        transform: scale(4.5);
        transition: box-shadow 0.3s cubic-bezier(0.5, -0.8, 0.5, 1.8);

        &:hover {
            box-shadow: 0 0 0 1.5px #3EAF7C33;
        }

        &:active {
            box-shadow: 0 0 0 2px #3EAF7C66;
        }
    }

    &::-moz-range-track {
        background-color: #CCCCCC;
    }

    &::-moz-range-progress {
        border-radius: 1px;
        height: 3px;
        background-color: #3EAF7C;
    }

    &::-moz-range-thumb {
        border: none;
        border-radius: 50%;
        height: 3px;
        width: 3px;
        background-color: #3EAF7C;
        transform: scale(4.5);
        transition: box-shadow 0.3s cubic-bezier(0.5, -0.8, 0.5, 1.8);

        &:hover {
            box-shadow: 0 0 0 1.5px #3EAF7C33;
        }

        &:active {
            box-shadow: 0 0 0 2px #3EAF7C66;
        }
    }
}
</style>
