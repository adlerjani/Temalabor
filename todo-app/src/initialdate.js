const initialData={
    tasks:{
        't1':{id:'t1',content:'Befejezni a témalabot'},
        't2':{id:'t2',content:'Megcsinálni a labort'},
        't3':{id:'t3',content:'Beszarni a sörgyárt'},
        't4':{id:'t4',content:'valami random task'},
    },
    columns:{
        'c1':{
            id:'c1',
            title:'To-Do',
            taskIds:['t1','t2','t3'],
        },
        'c2':{
            id:'c2',
            title:'Done',
            taskIds:['t4'],
        },
    },
    columnOrder:['c1','c2'],
};

export default initialData;