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
        title: "企画・ツアー",
        url: "/tour"
    },
    {
        title: "出店情報",
        url: "/exhibition",
    },
    {
        title: "マップ",
        url: "/map",
    },
    {
        title: "アクセス",
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
        body: "09:30～16:00(最終入場 15:30)"
    },
    {
        title: "名称",
        body: "産技祭"
    },
    {
        title: "テーマ",
        body: "「 To the world created by technology 」"
    },
    
]


export const greetings = [
    {
        title: "本校学校長 ご挨拶",
        body: [
            "ようこそ、技術が革新的に進歩する未来を担う学生達の祭典、産技祭へ。",
            "今年のテーマはTo the world created by technology ~テクノロジーが生み出す世界へ~。",
            "出展には、ものづくりの技術とAIを活用し、DCON2024にて企業価値4億円の評価を得て最年少で優勝した3年生チームや、リアル脱出ゲーム甲子園全国大会に初の３年連続進出し準優勝した「謎研」も。",
            "テーマする「世界」を垣間見つつ、食品販売も戻った伝統ある産技祭を存分にお楽しみください。"
        ],
        name: "東京都立産業技術高等専門学校　校長　吉澤 昌純",
        image: principal
    },
    {
        title: "実行委員会委員長 ご挨拶",
        body: [
            "産技祭にご来場いただき、誠にありがとうございます。",
            "今年は「To the world created by technology」をテーマに、日頃から研鑽を積み重ねてきた学生たちが、多彩な展示やイベントを準備いたしました。",
            "食品出店につきましても、昨年より多くの屋台が出店しております。",
            "この産技祭が皆様にとって有意義な時間となりますよう心より願い、最後までお楽しみいただければ幸いです。"
        ],
        name: "産技祭実行委員会　委員長　遠山祐希",
        image: chairperson
    }
]

export const snsIcons = [
    {
        icon: InstagramImage,
        url: "https://www.instagram.com/sangisai_"
    },
    {
        icon: TwitterImage,
        url: "https://x.com/sangisai_"
    }
]

export const attention = [
    "・学校に駐車場はございません。路上駐車などもお控えください。",
    "・学校や敷地内での飲酒・喫煙は固くお断りいたします。",
    "・校内や敷地内での飲食は周囲にお気遣いください。",
    "・危険物の持ち込みは禁止です。",
    "・ペットなどの動物や、植物の持ち込みはご遠慮ください。（ただし、盲導犬をはじめとする介助犬などを伴ってのご来校は可能とさせていただきます。）",
    "・駐車場はありません。公共交通機関を使ってご来場ください。"

]
