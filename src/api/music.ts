import axios from 'axios';
import {MusicList} from "@/api/music_interface";
import {MusicItem} from "@/api/music_interface";
// axios.defaults.timeout = 60000;

export default {
    /**
     * 获取歌曲列表
     * http://music.163.com/
     */
    getMusicList(s: string,type: number,offset: number,total: boolean,limit:number, cb: (d: MusicList) => void, final: () => void, error: (reason: any) => void): void {
        axios.get<MusicList>('music/api/search/get/web', {
            params: {
                s: s,
                type: type,
                offset: offset,
                total: total,
                limit: limit,
            },
        }).then(({data}) => {
            cb(data);
        }).catch(error).finally(final);
    },

    /**
     * 获取歌曲详情
     * https://api.imjad.cn/
     */
    getMusicDetail(type: string,id: number,search_type: number, cb: (d: MusicItem) => void, final: () => void, error: (reason: any) => void): void {
        axios.get<MusicItem>('https://api.imjad.cn/cloudmusic/', {
            params: {
                type: type,
                id: id,
                search_type: search_type,
            },
        }).then(({data}) => {
            cb(data);
        }).catch(error).finally(final);
    },
}
