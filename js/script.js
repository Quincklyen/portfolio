const skill = {
    data: [],
    isSorted: false,
    generateList: function(parentElement) {
        parentElement.innerHTML = '';
        this.data.forEach(element => {
            const dt = document.createElement('dt');
            dt.classList.add('skill-item');
            dt.textContent = element.item;
            dt.style.backgroundImage = `url(${element.iconPath})`;

            const dd = document.createElement('dd');
            dd.classList.add('skill-level');
            
            const div = document.createElement('div');
            div.style.width = `${element.level}%`;
            div.textContent = `${element.level}%`;

            dd.appendChild(div);
            
            parentElement.append(dt,dd);
        });
    },
    sortList: function(sortingType) {
        if (skill.isSorted !== sortingType){
            switch (sortingType){
                case 'name':
                    this.data.sort((a,b) => a.item.localeCompare(b.item)); break;
                case 'level':
                    this.data.sort((a,b) => b.level - a.level); break;
                default:
                    return;
            }
            this.isSorted = sortingType;
        } else {
            this.data.reverse();
        }
        this.generateList(document.querySelector("dl.skill-list"));
    },
    initList: function(url, parentElement, skillSection) {
        fetch(url)
        .then(data => data.json())
        .then(object =>{
            this.data = object;
            this.generateList(parentElement);
        })
        .catch(()=>{
            console.error('ERROR');
            skillSection.remove(); 
        })
    }
};

const skillList = document.querySelector('dl.skill-list');
const skillSection = document.querySelector('section.skill');
skill.initList('db/skills.json', skillList, skillSection);

sortBtnBlock = document.querySelector("div.skill-button");
sortBtnBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (target.nodeName === "BUTTON")
    {
        skill.sortList(target.dataset.type);
    } 
});

const nav = document.querySelector('.main-nav');
const btn = document.querySelector('.nav-btn');

const menu = {
    open: function() {
        nav.classList.remove('main-nav_closed');
        btn.classList.add('nav-btn_close');
        btn.classList.remove('nav-btn_open');
        btn.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
    },
    close: function() {
        nav.classList.add('main-nav_closed');
        btn.classList.remove('nav-btn_close');
        btn.classList.add('nav-btn_open');
        btn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
    },
};

btn.addEventListener('click', (e) => {
    e.target.classList.contains('nav-btn_open') ? menu.open() : menu.close();
});
menu.close();

const changeTheme = (theme) => {
    if (theme){
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
    localStorage.setItem('light-theme-flag', theme);
}

const checkbox = document.querySelector(".switch-checkbox");
checkbox.addEventListener("change", () => {
    changeTheme(checkbox.checked);
});

const darkThemeLoaded = localStorage.getItem('light-theme-flag');
if (darkThemeLoaded === null || darkThemeLoaded === "false") {
    changeTheme(false);
    checkbox.checked = false;
} else {
    changeTheme(true);
    checkbox.checked = true;
}