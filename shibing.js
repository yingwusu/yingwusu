let fenshu = document.getElementById('fenshu')
let pipeizongjie = document.getElementById('pipeizongjie')
let tuijian = document.getElementById('tuijian')

let pipeiyu = localStorage.pipeidu + '分！'

fenshu.innerHTML = pipeiyu

tuijian.innerHTML = localStorage.tuijian_final


gexing = function()
{
    if(parseInt(localStorage.pipeidu)>60)
    {
        pipeizongjie.innerHTML = "陕西宜君苹果非常适合您呀，<br>可以试试看！"
    }
    else
    {
        pipeizongjie.innerHTML = "或许您可以试试富平柿饼！<br>相信您不会失望！"
    }
}
