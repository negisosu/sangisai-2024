'use server'//サーバーコンポーネントであることの明示

import {client} from '@/lib/client';

//企画・出展紹介のところで検索と、ジャンル分けができるやつ
export const getExhibitions = async (search: string = "", tag: string = "") => {

    //microcms-sdkのfiltersの都合で一旦書き換え
    tag = tag == "" ? "" : `tag[contains]${tag}`

    try{
        const data = await client.get({
            customRequestInit: {
                cache: "no-store"
            },
            endpoint: 'exhibition',
            queries: {
                limit: 50,//取得数
                q: search,//検索（CMSが勝手にやってくれる！すごい！）
                filters: tag//tagで絞り込み
            }
        })
        return data
    }catch(err) {
        console.log(err)
    }
}

//企画・出展紹介のそれぞれのリンク踏んだあとのコンテンツを一個づつひろってくるやつ（idから拾う）
export const getOne = async ( endpoint: string ,id: string ) => {
    try{
        const data = await client.get({
            customRequestInit: {
                cache: "no-store"
            },
            endpoint: endpoint,
            contentId: id//idの絞り込み
        })
        return data
    }catch(err) {
        console.log(err)
    }
}

//map用の階層でジャンル分けするやつ
export const getExhibitionsFloor = async (floor: string) => {

    try{
        const data = await client.get({
            customRequestInit: {
                cache: "no-store"
            },
            endpoint: "exhibition",
            queries: {
                limit: 100,
            }
        })

        console.log("data:",data)

        return data
    }catch(err) {
        console.log(err)
    }
}

const getMax = 6
export const getHomeNews = async () => {

    try{
        const data = await client.get({
            customRequestInit: {
                cache: "no-store"
            },
            endpoint: "news",
            queries: {
                limit: getMax,
            }
        })
        console.log("data: ", data)
        return data
    }catch(err) {
        console.log(err)
    }
}

export const getNews = async () => {
    try{
        const data = await client.get({
            customRequestInit: {
                cache: "no-store"
            },
            endpoint: "news",
            queries: {
                limit: 100,
            }
        })

        console.log(data)
        return data
    }catch(err) {
        console.log(err)
    }
}

export const getNewsOne = async (id: string) => {
    try{
        const data = await client.get({
            customRequestInit: {
                cache: "no-store"
            },
            endpoint: "news",
            contentId: id
        })

        console.log(data)

        return data
    }catch(err){
        console.log(err)
    }
}