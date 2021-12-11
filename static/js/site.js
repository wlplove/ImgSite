// 随机生成1999以下的随机数
function random() {
    let num = Math.round(Math.random() * 1000);
    let symbol = true;
    if (Math.round(Math.random() * 10) < 5) {
        symbol = false;
    }
    // 如果symbol值为true，num的值加1000
    // 如果symbol值为false，直接返回num的值
    if (symbol === true) {
        return num + 1000;
    }
    return num;
}

// 拼接图片地址
function createLink() {
	// link 为图片链接前缀，修改此变量即可完成图片链接的修改
    let link = "";
    // 视实际情况修改图片格式
    return link + random() + ".jpg";
}

// 获取图片长宽
function getImginfo() {
    let img = new Image();
    img.src = createLink();
    // 判断是否有缓存
    if (img.complete) {
        alert("from-complete  width=" + img.width + "，height" + img.height);
    } else {
        img.onload = function() {
            alert("from-onload  width=" + img.width + "，height" + img.height);
        }
    }
}

// 添加一行 img 图片元素，传入的参数是图片宽度
function addImages() {
    let divObj = document.createElement("div");
    for (let img_count = 0; img_count < 5; img_count++) {
        // 生成图片链接
        let imgLink = createLink();
        let imgObj = document.createElement("img");
        // 设置 img 标签的部分属性
        imgObj.setAttribute("alt", "图片加载失败");
        imgObj.setAttribute("src", imgLink);
        let img = new Image();
        img.src = imgLink;
        img.onload = function () {
            if (imgLink.width === 700) {
                imgObj.setAttribute("width", "200");
            } else {
                imgObj.setAttribute("height", "300");
            }
        }

        // 添加 a 标签并设置 href 属性
        let linkObj = document.createElement("a");
        linkObj.setAttribute("href", imgLink);
        linkObj.setAttribute("target", "_target");
        linkObj.appendChild(imgObj);

        // 将图片添加到div中
        // divObj.appendChild(linkObj);
        // 将div添加到HTML中
        // document.getElementById("content").appendChild(divObj);
        document.getElementById("content").appendChild(linkObj);
    }

}


function load() {
    // 执行添加图片操作，先添加6行
    for (let i = 0; i < 6; i++) {
        addImages();
    }
}

// TODO
// 触底自动加载功能
// 图片分类、友情链接，用下拉菜单
// 