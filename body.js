var tuijian_final = ""

let questions = [{
    value: 20,
    question: "您喜欢吃甜食还是酸食物",
    answers: [{
        answer: "0(柠檬酸度)",
        pipe: 10,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "1",
        pipe: 15,
        score_shizi: true,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "2",
        pipe: 20,
        score_shizi: true,
        score_pingguo: true,
        score_jvzi: false
    }, {
        answer: "3",
        pipe: 15,
        score_shizi: false,
        score_pingguo: true,
        score_jvzi: true
    }, {
        answer: "4",
        pipe: 10,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: true
    }, {
        answer: "5(白砂糖甜度)",
        pipe: 5,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }],
},
{
    value: 20,
    question: "您喜欢吃个头小的还是个头大的水果",
    answers: [{
        answer: "0(枣子大小)",
        pipe: 5,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "1",
        pipe: 10,
        score_shizi: true,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "2",
        pipe: 15,
        score_shizi: true,
        score_pingguo: false,
        score_jvzi: true
    }, {
        answer: "3",
        pipe: 20,
        score_shizi: false,
        score_pingguo: true,
        score_jvzi: true
    }, {
        answer: "4",
        pipe: 15,
        score_shizi: false,
        score_pingguo: true,
        score_jvzi: false
    }, {
        answer: "5(西瓜大小)",
        pipe: 10,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }],
},
{
    question: "您平常更喜欢吃脆脆的水果还是绵密的水果",
    value: 20,
    answers: [{
        answer: "0(薯片)",
        pipe: 15,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "1",
        pipe: 20,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "2",
        pipe: 15,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "3",
        pipe: 10,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "4",
        pipe: 5,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "5(棉花糖)",
        pipe: 0,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }],
},
{
    question: "您对产品的绿色有机需求度",
    value: 20,
    answers: [{
        answer: "1(不太追求)",
        pipe: 10,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "2",
        pipe: 15,
        score_shizi: true,
        score_pingguo: true,
        score_jvzi: false
    }, {
        answer: "3",
        pipe: 20,
        score_shizi: true,
        score_pingguo: true,
        score_jvzi: true
    }, {
        answer: "4(非常重视)",
        pipe: 15,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: true
    }],
},
{
    question: "5、您对网购水果坏果率的接受程度",
    value: 20,
    answers: [{
        answer: "1(百分之五)",
        pipe: 15,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: true
    }, {
        answer: "2",
        pipe: 20,
        score_shizi: false,
        score_pingguo: true,
        score_jvzi: true
    }, {
        answer: "3",
        pipe: 15,
        score_shizi: true,
        score_pingguo: true,
        score_jvzi: false
    }, {
        answer: "4(百分之二十五)",
        pipe: 10,
        score_shizi: true,
        score_pingguo: false,
        score_jvzi: false
    }],
},
{
    question: "您的性别",
    value: 0,
    answers: [{
        answer: "男",
        pipe: 0,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }, {
        answer: "女",
        pipe: 0,
        score_shizi: false,
        score_pingguo: false,
        score_jvzi: false
    }],
},
]

let template = function (o, Index) {

    let arr = o.answers.map(function (element, index) {
        if (Index < 3) {
            if (index == 0 || index == o.answers.length - 1) {
                return `<div class="answer" >
						<div style="font-size:40px;font-family:'楷体';padding-top:15%">${element.answer}、</div>
						<div><input type="radio" name="${Index}" checked="checked"  pipe="${element.pipe}" score_shizi="${element.score_shizi}" score_pingguo="${element.score_pingguo}" score_jvzi="${element.score_jvzi}"/></div> 
                        <img src="https://jerry-mu.oss-cn-beijing.aliyuncs.com/image-tfb/image/${Index}_${index}.jpg">
                        </div>`
            }

            else {
                return `<div class="answer" >
						<div style="font-size:40px;font-family:'楷体';padding-top:15%">${element.answer}、</div>
						<div><input type="radio" name="${Index}" checked="checked"  pipe="${element.pipe}" score_shizi="${element.score_shizi}" score_pingguo="${element.score_pingguo}" score_jvzi="${element.score_jvzi}"/></div>                
                        <img src="https://jerry-mu.oss-cn-beijing.aliyuncs.com/image-tfb/image/jiantou.jpg">
                        </div>`
            }
        }
        else {
            return `<div class="answer" >
						<div style="font-size:40px;font-family:'楷体';padding-top:15%">${element.answer}、</div>
						<div><input type="radio" name="${Index}" checked="checked"  pipe="${element.pipe}" score_shizi="${element.score_shizi}" score_pingguo="${element.score_pingguo}" score_jvzi="${element.score_jvzi}"/></div> 
                        </div>`
        }
    }


        // if(Index==5)
        //     {
        //     let str =
        //     `<div class="question" type="${o.type}" value="${o.value}">
        // 			<div class="question_title">
        // 				${o.question}<span class="tips">单选题${o.value}分</span>
        // 			</div>
        // 			<div class="answers">
        // 				${arr.join("")}
        // 			</div>
        // 		</div>`
        //         return str;
        //     }
    )
    let str =
        `<div class="question" type="${o.type}" value="${o.value}">
				<div class="question_title">
					${o.question}<span class="tips"></span>
				</div>
				<div class="answers">
					${arr.join("")}
				</div>
			</div>`
    return str;

}

let tuijianyu = {
    kouwei1: "原来你是一个喜欢酸食的",
    kouwei2: "原来你是一个酸甜通吃的",
    kouwei3: "原来你是一个喜欢甜食的",

    sex_man: "小哥哥一枚呀<br>",
    sex_woman: "小姐姐一枚呀<br>",

    size_big: "偏爱大个头水果的您一定活泼可爱吧！<br>",
    size_small: "偏爱小个头水果的您一定生活精致吧!<br>",

    mianmilim: "绵密的口感深得您心，<br>或许可以试试别的水果,<br>但脆脆的宜君苹果或许会带给您<br>不一样的体验<br>",
    mianmi: "散装包装更得您青睐,<br>不过富平柿饼的独立包装也会使您耳目一新，<br>不妨大胆尝试一下。<br>",
    cuicui: "同样脆脆的宜君苹果正和您心意。<br>",

    anquan_lim: "您有很强的食品安全意识，给您点个赞！<br>",
    anquan_middle: "您有很强的食品安全意识,<br>相信宜君苹果会尽力满足您哒。<br>",
    anquan_less: "您对网购产品的包容度很高,<br>相信宜君苹果不会让您失望。<br>",

    youji: "看得出您平时很注重饮食健康，<br>不会是个养生达人吧。<br>",
    no_youji: "不太看重绿色有机标签的您一定对<br>“不干不净，吃了没病”<br>耳熟能详吧。<br>",
}


function init() {

    let arr = [];
    for (let item in questions) {
        let templateStr = template(questions[item], item)
        arr.push(templateStr);
    }

    let main = document.getElementById("main");
    main.innerHTML = arr.join("");
}

submit = function () {
    let elementArr = document.getElementsByClassName("question");
    let point = 0;
    let point_shizi = 0;
    let point_pingguo = 0;
    let point_jvzi = 0;
    let totalPoint = 0;
    for (let index = 0; index < elementArr.length; index++) {
        let element = elementArr[index];
        let value = element.getAttribute("value");
        totalPoint += parseInt(value);
        let answerList = element.querySelectorAll(".answer");
        let count = 0;
        let type = element.getAttribute("type");
        for (let index_a = 0; index_a < answerList.length; index_a++) { //遍历每个选项
            let inputItem = answerList[index_a].querySelector("input");
            if (inputItem.checked) {
                point += parseInt(inputItem.getAttribute('pipe')); // 匹配度加分
                if (inputItem.getAttribute("score_shizi") == 'true') { point_shizi += 1; }
                if (inputItem.getAttribute("score_pingguo") == 'true') { point_pingguo += 1; }
                if (inputItem.getAttribute("score_jvzi") == 'true') { point_jvzi += 1; } //个性化推荐

            }



        }

    }

    let Q1 = elementArr[0].querySelectorAll(".answer")
    if (Q1[0].querySelector('input').checked || Q1[1].querySelector('input').checked) { tuijian_final += tuijianyu.kouwei1 }
    else if (Q1[2].querySelector('input').checked || Q1[3].querySelector('input').checked) { tuijian_final += tuijianyu.kouwei2 }
    else if (Q1[4].querySelector('input').checked || Q1[5].querySelector('input').checked) { tuijian_final += tuijianyu.kouwei3 }
    else { }

    let Q6 = elementArr[5].querySelectorAll(".answer") //性别
    if (Q6[0].querySelector('input').checked) { tuijian_final += tuijianyu.sex_man }
    else if (Q6[1].querySelector('input').checked) { tuijian_final += tuijianyu.sex_woman }
    else { }

    let Q2 = elementArr[1].querySelectorAll(".answer") //个头
    if (Q2[0].querySelector('input').checked || Q2[1].querySelector('input').checked || Q2[2].querySelector('input').checked) { tuijian_final += tuijianyu.size_small }
    else if (Q2[3].querySelector('input').checked || Q2[4].querySelector('input').checked || Q2[5].querySelector('input').checked) { tuijian_final += tuijianyu.size_big }
    else { }

    let Q3 = elementArr[2].querySelectorAll(".answer") //脆or绵密
    if (Q3[0].querySelector('input').checked || Q3[1].querySelector('input').checked || Q3[2].querySelector('input').checked) { tuijian_final += tuijianyu.cuicui }
    else if (Q3[3].querySelector('input').checked || Q3[4].querySelector('input').checked) { tuijian_final += tuijianyu.mianmi }
    else if (Q3[5].querySelector('input').checked) { tuijian_final += tuijianyu.mianmilim }
    else { }

    let Q4 = elementArr[3].querySelectorAll(".answer")
    if (Q4[0].querySelector('input').checked || Q4[1].querySelector('input').checked) { tuijian_final += tuijianyu.no_youji }
    else if (Q4[2].querySelector('input').checked || Q4[3].querySelector('input').checked) { tuijian_final += tuijianyu.youji}
    else { }

    let Q5 = elementArr[4].querySelectorAll(".answer")
    if (Q5[0].querySelector('input').checked) { tuijian_final += tuijianyu.anquan_lim }
    else if (Q5[1].querySelector('input').checked) { tuijian_final += tuijianyu.anquan_middle }
    else if(Q5[2].querySelector('input').checked || Q5[3].querySelector('input').checked){ tuijian_final += tuijianyu.anquan_less }
    else { }



    // alert(tuijian_final)
    // alert("总分是：" + totalPoint + ",您与富平柿饼的匹配程度为：" + point)
    if (point_shizi > point_jvzi) { location.replace("shibing.html") }
    else if (point_shizi < point_jvzi) { location.replace('jvzi.html') }
    else {
        var ran = Math.random();
        if (ran < 0.5) { location.replace("shibing.html") }
        else { location.replace('jvzi.html') }
    }


    localStorage.setItem("tuijian_final", tuijian_final)
    localStorage.setItem('pipeidu', point)

}

reloadPage = function () {
    location.reload();

}


init();




