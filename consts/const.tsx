import principal from "@/app/image/home/principal.png"
import chairperson from "@/app/image/home/chairperson.png"
import TwitterImage from "@/app/image/SNSicons/Twitter.png"
import InstagramImage from "@/app/image/SNSicons/Instagram.png"



export const tags = [//ジャンル分けはまだ変化する可能性があるから別ファイル管理
    '全て',
    'イベント',
    '物販',
    '飲食店',
    '研究発表'
]

export const header = [//headerのリンクの項目、落とし物とか追加するかも
    {
        title: "ホーム",
        url: "/",
    },
    {
        title: "ご来場の皆様へ",
        url: "/visitor",
    },
    {
        title: "企画紹介",
        url: "/exhibition",
    },
    {
        title: "会場マップ",
        url: "/map",
    },
    {
        title: "交通アクセス",
        url: "/access",
    },
]

export const abouts = [//ホームのアバウトの項目、テーマとかあとあと追加するかも
    {
        title: "日時",
        body: "2024年10月26日(土)・10月27日(日)"
    },
    {
        title: "時間",
        body: "??:??～??:??"
    },
    {
        title: "名称",
        body: "産技祭(SanGi FEsT.)"
    },
    {
        title: "テーマ",
        body: "「 To the world created by technology 」"
    }
]


export const greetings = [
    {
        title: "本校学校長 ご挨拶",
        body: [
            "本校を代表して歓迎いたします。いよいよ本格的な産技祭が始まります。新たな運営のノウハウを構築し、コロナ禍前を超える新各種研究展示や模擬店など、多くの内容の準備を進めて、本日を迎えております。今年のテーマは「The sky is the limit」です。学生たちの技術や研究への情熱は無限の可能性が！そんな気持ちが込められた テーマと私は感じています。",
            "皆様、伝統あるそして次世代の本格的「産技祭」を存分にお楽しみください。"
        ],
        name: "本校校長 吉澤 昌純 先生",
        image: principal
    },
    {
        title: "実行委員会委員長 ご挨拶",
        body: [
            "今年度の産技祭のテーマ 「The sky is the limit」は4年ぶりの通常開催を迎え、新たな挑戦と無限の可能性への取り組みを象徴しています。私たち実行委員一同、産技祭が再スタートし、皆様の記憶に残るものとなるよう、食品ブースの再導入や中央ホールでのステージ企画など、さまざまなプログラムの準備を進めてきました。 そして、ご来場の皆様には、各種企画をお楽しみいただきつつ、新型コロナウイルス対策として、うがいや手洗い、消毒へのご協力を お願い申し上げます。",
            "最後になりますが、産技祭の開催に尽力されたすべての関係者の皆様へ心より感謝を申し上げ、挨拶とさせていただきます。"
        ],
        name: "24年度産技祭実行委員会 実行委員長",
        image: chairperson
    }
]

export const snsIcons = [
    {
        icon: InstagramImage,
        url: "https://youtube.com"
    },
    {
        icon: TwitterImage,
        url: "https://x.com/sangisai_"
    }
]