<!-- 日常分享 -->

<template>
    <div class="content blog" id="blog">
        <ModuleHeader :title="blog.header.title" :sub-title="blog.header.subtitle"/>
        <div class="daily-share">
            <a-row :gutter="16">
                <a-col :span="8">
                    <a-card hoverable :bordered="true">
                        <img
                                style="height: 300px;object-fit: cover;"
                                slot="cover"
                                alt="example"
                                src="../assets/daily/pets.jpg"
                        />
                        <a-card-meta title="宠物大爷">
                            <template slot="description">
                                徵烨和他的宠物大爷的爱恨情仇
                            </template>
                        </a-card-meta>
                    </a-card>
                </a-col>
                <a-col :span="8">
                    <a-card hoverable :bordered="true">
                        <img
                                style="height: 300px"
                                slot="cover"
                                alt="example"
                                src="../assets/daily/hobby.jpg"
                        />
                        <a-card-meta title="业余爱好">
                            <template slot="description">
                                噪音扰民，经常被邻居投诉
                            </template>
                        </a-card-meta>
                    </a-card>
                </a-col>
                <a-col :span="8">
                    <a-card hoverable :bordered="true">
                        <img
                                style="height: 300px"
                                slot="cover"
                                alt="example"
                                src="../assets/daily/flower.jpg"
                        />
                        <a-card-meta title="沙雕日常">
                            <template slot="description">
                                人类迷惑性行为鉴赏
                            </template>
                        </a-card-meta>
                    </a-card>
                </a-col>
            </a-row>
        </div>
<!--        <a-button :block="true" type="link" v-if="!!(blog.blog)" :href="blog.blog" target="_blank">更多</a-button>-->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import ModuleSkeleton from '@/components/module/ModuleSkeleton.vue';
    import {Module} from '@/api/user_interface';

    @Component({
        components: {
            ModuleHeader,
            ModuleSkeleton,
        },
        computed: {
            blog(): Module {
                return this.$store.getters.getModule('blog');
            },
        },
        created() {

        },
        filters: {
            decode(content: string) {
                const el = document.createElement(`el-${new Date().getTime()}`);
                el.innerHTML = content;
                return el.innerText;
            },
            sub(content: string) {
                return content.substr(0, 120);
            },
        },
    })
    export default class Blog extends Vue {
    }
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .blog {
        .description {
            * {
                margin-right: 4px;
            }

            .title {
                color: $--selection-color
            }

            .pub-date {
                color: $--color-gray;
            }
        }

        .desc {
            color: $--color-gray;
            padding-left: 0em;
            display: inline-block;
        }

        @media screen and (max-width: $--screen-sm-min) {
            .description {
                .tag {
                    display: block;
                }
            }

            .desc {
                display: none;
            }
        }
    }
</style>
