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
            const dtn = document.createElement('dt');
            dtn.classList.add('skill-item');
            dtn.textContent = element.item;
            dtn.style.backgroundImage = `url(${element.iconPath})`;

            const ddn = document.createElement('dd');
            ddn.classList.add('skill-level');
            
            const divn = document.createElement('div');
            divn.style.width = `${element.level}%`;
            divn.textContent = `${element.level}%`;

            ddn.appendChild(divn);
            
            parentElement.append(dtn,ddn);
        });
    }
};

skill.generateList(document.querySelector('dl.skill-list'));