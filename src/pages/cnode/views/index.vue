<template>
    <div>
        <img class="index" src="../images/index.png">
    </div>
</template>

<script>
    require('../css/CV.scss');
    require('../css/iconfont/iconfont.css');
    require('../css/github-markdown.css');
    export default {
        mounted() {
            setTimeout(() => {
                this.$router.push({
                    name: 'list'
                });
            }, 2000);
        }
    };
</script>
<style lang="scss">
    .index {
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>
