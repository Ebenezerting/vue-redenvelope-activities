<template>
    <div class="wrapper">
        <!-- <v-tags></v-tags> -->
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    components: {

    },
    created() {

    }
};
</script>
