<template>
    <div class="music-player">
        <a-drawer
                placement="right"
                :closable="false"
                :visible="visible"
                :width="400"
                :after-visible-change="afterVisibleChange"
                @close="onClose">
            <div class="music-player-list">
<!--                <div class="search-header">-->
<!--                    <a-input-search class="music-input" v-model="keyword" placeholder="请输入歌名" @search="onSearch" />-->
<!--                </div>-->
<!--                <a-spin :spinning="loading">-->
<!--                    <div class="music-list" v-if="!loading">-->
<!--                        <a-list id="list-test" item-layout="horizontal" :data-source="musicList.result.songs">-->
<!--                            <a-list-item slot="renderItem" slot-scope="item, index"-->
<!--                                         class="music-item" :class="[isActive === index?'music-active':'']" @click="musicPlaying(item,index)">-->
<!--                                <a-list-item-meta-->
<!--                                        :description="getSingerName(item.artists)">-->
<!--                                    <span slot="title">{{ item.name }}</span>-->
<!--                                    <a-avatar slot="avatar" :src="getSingerPicUrl(item.artists)"/>-->
<!--                                </a-list-item-meta>-->
<!--                                <div>{{index + 1}}</div>-->
<!--                            </a-list-item>-->
<!--                        </a-list>-->
<!--                    </div>-->
<!--                </a-spin>-->
                <div class="search-header">
                    <img class="music-back" alt="example" src="../../assets/music/musicBack.jpg">
                </div>
                <a-spin :spinning="loading">
                    <div class="music-list" v-if="!loading">
                        <a-list id="list-test" item-layout="horizontal" :data-source="musics.musicList" :split="false" :bordered="false">
                            <a-list-item slot="renderItem" slot-scope="item, index"
                                         class="music-item" :class="[isActive === index?'music-active':'']" @click="musicPlaying(item,index)">
                                <a-list-item-meta
                                        :description="item.singer">
                                    <span slot="title">{{ item.songName }}</span>
                                    <a-avatar style="margin-top: 8px;margin-left: 10px" slot="avatar" :src="item.picUrl"/>
                                </a-list-item-meta>
                            </a-list-item>
                        </a-list>
                    </div>
                </a-spin>
                <div class="music-bottom">
                    <audio v-if="!loading" ref='musicSource' autoplay :src="musicPlayUrl" controls class="music-audio">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
        </a-drawer>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {MusicList,MusicItem} from "@/api/music_interface";
    import api from "@/api/music";
    import dataMusic from "@/assets/data/dataMusic";

    @Component({
        props: {
            visible:Boolean
        },
        data() {
            return {
                keyword: "像我这样的人",
                musicPlayUrl:"",
                isActive:0,
                musics:dataMusic
            };
        },
        created() {
            // (this as any).initMusic((this as any).keyword,1,0,true,20);
            (this as any).init();
        },
        methods: {
            afterVisibleChange(val) {
                console.log('visible', val);
            },
            onClose() {
                (this as any).$emit("music-hide", {})
            },
            onSearch() {
                (this as any).getMusic((this as any).keyword,1,0,true,20);
                (this as any).isActive = -1;
            },
            getSingerName(val){
                let singerName = "";
                if(val.length >0){
                    for(let i = 0; i < val.length; i++){
                        singerName += val[i].name + "  ";
                    }
                }else {
                    singerName = "暂无找到歌手";
                }
                return singerName;
            },
            getSingerPicUrl(val){
                let singerName = "";
                if(val.length >0){
                    singerName = val[0].img1v1Url
                }else {
                    singerName = "src/assets/music/song.jpeg";
                }
                return singerName;
            },
            init(){
                (this as any).loading = false;
                // (this.$refs.musicSource as any).src = (this as any).musics.musicList[0].playUrl;
                (this as any).musicPlayUrl = (this as any).musics.musicList[0].playUrl;
            },
            musicPlaying(val,index){
                // (this as any).getMusicDetail("song",val.id,1);
                (this.$refs.musicSource as any).src = val.playUrl;
                (this as any).musicPlayUrl = val.playUrl;
                (this as any).isActive = index;
            }
        },
    })
    export default class ModuleMusicPlayer extends Vue {
        private loading = true;
        private musicList: MusicList = {};
        private musicDetail: MusicItem = {};

        private initMusic(s: string,type:number, offset: number,total: boolean, limit:number) {
            this.loading = true;
            api.getMusicList(
                s,
                type,
                offset,
                total,
                limit,
                (res) => {
                    this.musicList = res;
                    if ((res as any).result.songs.length){
                        this.getMusicDetail("song",(res as any).result.songs[0].id,1)
                    }
                    }, () => {
                    this.loading = false;
                    }, (e) => {
                    this.loading = false;
                });
        }

        private getMusic(s: string,type:number, offset: number,total: boolean, limit:number) {
            this.loading = true;
            api.getMusicList(
                s,
                type,
                offset,
                total,
                limit,
                (res) => {
                    this.musicList = res;
                    }, () => {
                    this.loading = false;
                    }, (e) => {
                    this.loading = false;
                });
        }

        private getMusicDetail(type: string,id: number,search_type: number) {
            api.getMusicDetail(
                type,
                id,
                search_type,
                (res) => {
                    this.musicDetail = {};
                    this.musicDetail = res;
                    (this.$refs.musicSource as any).src = (res as any).data[0].url;
                }, () => {

                }, (e) => {

                });
        }
    }
</script>

<style scoped lang="scss">
   .music-player-list{
       padding: 0.1px 10px 25px 10px;
       background-image: linear-gradient(to right, #91d5ff, whitesmoke 90%);
       transition: all 0.25s ease-in;
       .search-header{
           padding-top: 5px;
           height: 100px;
           position: fixed;
           .music-input{
               width: 480px;
           }
           z-index: 1000;
           background: white;
           .music-back{
               height: 100px;
               width: 380px;
               border-radius: 10px;
           }
       }
       .music-list{
           margin-top: 130px;
           margin-bottom: 100px;
           padding: 10px 10px;
           .music-item{
               cursor:pointer
           }
       }
       .music-bottom{
           width: 380px;
           height: 80px;
           background: white;
           padding-top: 15px;
           position: fixed;
           bottom: 0;
           border-radius: 10px;
           .music-audio{
               width: 100%;
           }
       }
   }

   .music-active{
       font-weight:bold;
       color:#fff;
       border-radius: 15px;
       /*box-shadow: 0 0 10px #d5e0ed;*/
       background-image: linear-gradient(to right, #dcf2fd, whitesmoke 70%);
       transition: all 0.25s ease-in;
   }
</style>