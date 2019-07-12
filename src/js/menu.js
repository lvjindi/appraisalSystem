function initMenu() {
    var menuName = ['项目评审', '基础数据'];
    var menuPage = [];
    var imgPath = ['src/images/logo1.jpg', 'src/images/logo2.jpg'];
    var leftContainer = document.getElementById('leftDiv');
    var topLeftBar = document.createElement('div');
    topLeftBar.style.background = 'linear-gradient(#F5F5F5 40%, #DCDCDC)';
    topLeftBar.style.width = '100%';
    topLeftBar.style.height = '25px';
    topLeftBar.style.textAlign = 'center';
    topLeftBar.style.fontWeight = 'bold';
    topLeftBar.style.borderBottom = '#27408B solid 3px'
    topLeftBar.innerText = '管理功能菜单';
    leftContainer.appendChild(topLeftBar)

    for (var i = 0; i < menuName.length; i++) {
        var panel = document.createElement('div');
        panel.style.width = '100%';
        panel.style.height = '60px';
        panel.style.background = 'rgb(230,230,250,0.3)';
        panel.style.borderBottom = '#D3D3D3 solid 1px';
        // panel.style.outline = '1px solid #999';
        // panel.style.outlineOffset = '-2px';

        var img = document.createElement('img');
        img.style.height = '50px';
        img.style.width = '50px';
        img.style.marginLeft = '15px';
        img.style.marginTop = '5px';
        img.style.float = 'left';
        img.src = imgPath[i];

        var word = document.createElement('div');
        word.style.color = '#696969';
        word.style.marginLeft = '15px';
        word.style.marginTop = '15px';
        word.style.fontWeight = 'bold';
        word.style.float = 'left';
        word.innerText = menuName[i];

        panel.appendChild(img);
        panel.appendChild(word);
        leftContainer.appendChild(panel);
    }
    leftContainer.appendChild(panel);


}
