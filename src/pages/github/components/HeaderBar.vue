<template lang="html">
    <div>
        <div :class="['header', isUserPage ? 'transparent' : '']" ref="header">
            <hamburger-icon
                :back="shouldShowBackBtn()"
                @click.native.stop="handleClick"
            ></hamburger-icon>
            <a id="brand-logo" href="#"></a>
            <div id="notification-icon"></div>
        </div>
        <loading-block
            v-if="showLoading"
            :done="doneLoading"
            :failed="loadFailed"
        ></loading-block>
    </div>
</template>

<script>
import HamburgerIcon from './HamburgerIcon';
import LoadingBlock from './LoadingBlock';
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            scrollSection: null,
            wait: false
        }
    },
    computed: {
        ...mapGetters({
            header: 'getHeaderState'
        }),
        routeName() {
            return this.$route.name;
        },
        showLoading() {
            return this.header.showLoading;
        },
        doneLoading() {
            return this.header.doneLoading;
        },
        loadFailed() {
            return this.header.loadFailed;
        },
        isUserPage() {
            return this.$route.name === 'USER_DETAIL';
        }
    },
    components: {
        HamburgerIcon,
        LoadingBlock
    },
    methods: {
        ...mapActions(['toggleNavMenu']),
        shouldShowBackBtn() {
	        var flag
            switch (this.$route.name) {
                case 'USER_DETAIL':
	                flag = false;
	                break;
                case 'USER_REPO_LIST':
	                flag = true;
	                break;
                case 'REPO_DETAIL':
	                flag = true;
	                break;
                default:
	                flag = false;
            }
	        // 为什么会触发两次shouldShowBackBtn()
            // 因为:back 每次路由变化时，都会触发一次重新获取值
	        // console.log(this.$route.name)
            // console.log(`flag: ${flag}`);
            return flag;
        },
        // 根据路由名称加载搜索去向
        handleClick() {
            const isBack = this.shouldShowBackBtn();
            if (isBack) {
                this.$router.push({
                    name: this.$route.name === 'REPO_DETAIL'? 'USER_REPO_LIST' : 'USER_DETAIL'
                });
            } else {
            	// 	用户搜索框开关
                this.toggleNavMenu();
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
        	// scroll-section就是MainContent中的滚动正文
            this.scrollSection = document.getElementById('scroll-section');
            this.scrollSection.addEventListener('scroll', () => {
                let lastScrollTop = this.scrollSection.scrollTop;
                if (!this.wait) {
                    window.requestAnimationFrame(() => {
                        // Access direct to the DOM for better scrolling performance
                        if (lastScrollTop === 0 && this.isUserPage) {
                            this.$refs.header.classList.add('transparent');
                        } else {
                            this.$refs.header.classList.remove('transparent');
                        }
                        this.wait = false;
                    });
                    this.wait = true;
                }
            });
        });
    }
}
</script>

<style lang="less">
@headerHeight: 60px;

.header {
    @backgroundColor: #0F2035;
    @icon-width: 50px;
    display: flex;
    height: @headerHeight;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 2;
    background-color: rgba(15, 32, 53, 1);
    transform: translate3d(0, 0, 0);
    box-shadow: 0 3px 5px 0 rgba(15, 31, 52, 0.4);
    transition: background-color 0.3s;

    &.transparent {
        background-color: #224365;
        box-shadow: none;
    }

    #hamberger-menu {
        height: @headerHeight;
        width: @icon-width;
    }
    #notification-icon {
        background-image: url('../assets/notification-icon.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 15px 17px;
        height: @headerHeight;
        width: @icon-width;
    }
    #brand-logo {
        display: block;
        background-image: url('../assets/github-logo.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 74px 20px;
        height: @headerHeight;
        width: 74px;
    }
}

</style>
