
export interface MusicList {
    result?: resultItem[];
    code?: number;
}

export interface resultItem {
    songs?: songsItem[];
    songCount?: string;
}

export interface songsItem {
    id?: number;
    name?: string;
    artists?: artistsItem[];
    album?: albumItem;
    duration?: number;
    copyrightId?: number;
    status?: number;
    rtype?: number;
    ftype?: number;
    mvid?: number;
    fee?: number;
    rUrl?: number;
    mark?: number;
}

export interface artistsItem {
    id?: number;
    name?: string;
    picUrl?: string;
    albumSize?: number;
    picId?: number;
    img1v1Url?: string;
    img1v1?: number;
    trans?: string;
}

export interface albumItem {
    id?: number;
    name?: string;
    artist?:artistItem;
    publishTime?: number;
    size?: number;
    copyrightId?: number;
    status?: number;
    picId?: number;
    mark?: number;
}

export interface artistItem {
    id?: number;
    name?: string;
    picUrl?: string;
    albumSize?: number;
    picId?: number;
    img1v1Url?: string;
    img1v1?: number;
    trans?: string;
}

export interface artistItem {
    id?: number;
    name?: string;
    picUrl?: string;
    albumSize?: number;
    picId?: number;
    img1v1Url?: string;
    img1v1?: number;
    trans?: string;
}

export interface MusicItem {
    data?: dataItem[];
    code?: number;
}

export interface dataItem {
    id?: number;
    url?: string;
    br?: number;
    size?: number;
    md5?: string;
    code?: number;
    expi?: number;
    type?: string;
    gain?: number;
    fee?: number;
    uf?: string;
    payed?: number;
    flag?: number;
    canExtend?: boolean;
    freeTrialInfo?: string;
    level?: string;
    encodeType?: string;
    freeTrialPrivilege?:freeTrialPrivilegeItem;
    freeTimeTrialPrivilege?:freeTimeTrialPrivilegeItem;
    urlSource?: number;
}

export interface freeTrialPrivilegeItem {
    resConsumable?: boolean;
    userConsumable?: boolean;
}

export interface freeTimeTrialPrivilegeItem {
    resConsumable?: boolean;
    userConsumable?: boolean;
    type?: number;
    remainTime?: number;
}

