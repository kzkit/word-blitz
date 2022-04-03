<template>
    <div class="keyrow">
        <div class="key" v-for="key in keyRow1" :key="key">
            <button>{{ key }}</button>
        </div>
    </div>
    <div class="keyrow">
        <div class="key" v-for="key in keyRow2" :key="key">
            <button>{{ key }}</button>
        </div>
    </div>
    <div class="keyrow">
        <div class="key" v-for="key in keyRow3" :key="key">
            <button>{{ key }}</button>
        </div>
    </div>
</template>
<script setup>
var keyRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
var keyRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
var keyRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']



</script>
<style>
.keyrow {
    display: flex;
}
</style>
