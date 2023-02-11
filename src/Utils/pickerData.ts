
let minutes = () => {
    let minutes = [];
    for (let i = 0; i <= 50; i++) {
        let label,value;
        if (i < 10) {
            label = `0${i.toString()}`;
        } else {
            label = i.toString();
        }
        value = i;
        minutes.push({ label, value })
    }
    return [minutes]
}

let secends = () => {
    let secends = [];
    for (let i = 0; i < 60; i++) {
        let label,value;
        if (i < 10) {
            label = `0${i.toString()}`;
        } else {
            label = i.toString();
        }
        value = i;
        secends.push({ label, value })
    }
    return [secends]
}

let millisecond = () => {
    let millisecond = []
    for (let i = 0; i < 100; i++) {
        let label,value;
        if (i < 10) {
            label = `0${i.toString()}`;
        } else {
            label = i.toString();
        }
        value = i;
        millisecond.push({ label, value })
    }
    return [millisecond]
}

let monsters = [
    {
        label: '上位',
        value: '上位',
        children: [
            {
                label: '怨虎龙',
                value: '怨虎龙',
            },
            {
                label: '泡狐龙',
                value: '泡狐龙',
            },
            {
                label: '雪鬼兽',
                value: '雪鬼兽',
            },
        ]
    },
];

let weapons = [
    [
        { label: '太刀', value: '太刀' },
        { label: '大剑', value: '大剑' },
        { label: '单手剑', value: '单手剑' },
        { label: '双刀', value: '双刀' },
        { label: '长枪', value: '长枪' },
        { label: '铳枪', value: '铳枪' },
        { label: '大锤', value: '大锤' },
        { label: '狩猎笛', value: '狩猎笛' },
        { label: '斩斧', value: '斩斧' },
        { label: '盾斧', value: '盾斧' },
        { label: '操虫棍', value: '操虫棍' },
        { label: '弓', value: '弓' },
        { label: '轻弩', value: '轻弩' },
        { label: '重弩', value: '重弩' },
    ]
]

export { minutes, secends, millisecond, monsters, weapons }