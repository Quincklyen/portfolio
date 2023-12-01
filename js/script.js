const skill = {
    data: [{
        item: "html",
        level: 10,
        iconPath: "img/icon-html.svg",
    },
    {
        item: "java",
        level: 40,
        iconPath: "img/icon-java.svg",
    },
        {item: "python",
        level: 20,
        iconPath: "img/icon-python.svg",
    },
    {
        item: "C++",
        level: 22,
        iconPath: "img/icon-c++.svg",
    }],
    generateList: function(parentElement) {
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
    }
};

skill.generateList(document.querySelector('dl.skill-list'));