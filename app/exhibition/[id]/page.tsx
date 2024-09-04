import { getOne } from "@/lib/action"

export default async function Page(
    //dynamic routingの説明はだるいからちょっとパス
    //強いていうならexhibition/[id]のidの部分に入ってるやつを取り出す固有の名前がparams
    //そっからとったやつを使ってexhibitionのエンドポイントから要素を取得してる
    { params } : {
        params : {
            id : string
        }
    }
){

    const data = await getOne('exhibition', params.id)

    //console
    console.log(data)
    console.log("----------------------------------------------------")
    console.log("id:",data.id)
    console.log("title:",data.title)
    console.log("----------------------------------------------------")
    //console

    return(
        //ここで紹介の内容のjsonバラしてUIどうにかする場所だから、一旦放置
        <div>
            {data.title}
        </div>
    )
}