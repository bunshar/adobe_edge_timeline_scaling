/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'timelinePlay',
            type:'rect',
            rect:['0px','29','auto','auto','auto','auto']
         },
         {
            id:'bar',
            type:'rect',
            rect:['85px','416px','820px','15px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[1,"rgb(0, 0, 0)","none"]
         },
         {
            id:'scrubber',
            type:'rect',
            rect:['74px','390px','53px','53px','auto','auto'],
            cursor:['ew-resize'],
            borderRadius:["0% 0%","0% 0%","0% 0%","0% 0%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            c:[
            {
               id:'mobileHit',
               type:'rect',
               rect:['auto','-32px','119px','119px','-57.9%','auto'],
               fill:["rgba(36,36,36,0.00)"],
               stroke:[1,"rgb(220, 220, 220)","none"]
            }]
         }],
         symbolInstances: [
         {
            id:'timelinePlay',
            symbolName:'timelinePlay'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bar}": [
            ["color", "background-color", 'rgba(37,37,37,1.00)'],
            ["style", "top", '416px'],
            ["style", "left", '85px'],
            ["style", "border-style", 'none'],
            ["style", "height", '2px'],
            ["color", "border-color", 'rgba(220,220,220,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "width", '820px']
         ],
         "${_mobileHit}": [
            ["color", "background-color", 'rgba(36,36,36,0.00)'],
            ["style", "top", '-32px'],
            ["style", "border-style", 'none'],
            ["style", "left", 'auto'],
            ["style", "right", '-57.88%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '470px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(219,219,219,1.00)',0],['rgba(45,45,45,1.00)',100]]]],
            ["style", "max-width", 'none'],
            ["style", "width", '1024px']
         ],
         "${_scrubber}": [
            ["color", "background-color", 'rgba(36,36,36,1.00)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '74px'],
            ["style", "top", '390px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "cursor", 'ew-resize'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["color", "border-color", 'rgba(220,220,220,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "right", 'auto']
         ],
         "${_timelinePlay}": [
            ["style", "top", '0px'],
            ["style", "right", 'auto'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"timelinePlay": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bokehBgLg',
      type: 'rect',
      rect: ['-24px','-29','auto','auto','auto','auto']
   },
   {
      id: 'BokehBgSm',
      type: 'rect',
      rect: ['-23px','-34','auto','auto','auto','auto']
   },
   {
      id: 'bokehBgMed',
      type: 'rect',
      rect: ['-23px','-34','auto','auto','auto','auto']
   },
   {
      id: 'imgGroups',
      type: 'group',
      rect: ['-3741px','-6','4078','297','auto','auto'],
      c: [
      {
         id: 'imgCirc2',
         type: 'group',
         rect: ['86px','23px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg2',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img2',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/2.jpg','0px','0px']
         }]
      },
      {
         rect: ['-37px','-37px','241','241','auto','auto'],
         id: 'imgCirc1',
         type: 'group',
         transform: [[0,0],[],[],['0.68964','0.68964']],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/1.jpg','0px','0px']
         }]
      },
      {
         rect: ['477px','-1px','241','241','auto','auto'],
         id: 'imgCirc3',
         type: 'group',
         transform: [[0,0],[],[],['0.82988','0.82988']],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg3',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img3',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/3.jpg','0px','0px']
         }]
      },
      {
         rect: ['608px','77px','241','241','auto','auto'],
         id: 'imgCirc4',
         type: 'group',
         transform: [[0,0],[],[],['0.82988','0.82988']],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg4',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img4',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/4.jpg','0px','0px']
         }]
      },
      {
         id: 'imgCirc5',
         type: 'group',
         rect: ['820px','23px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg5',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img5',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/5.jpg','0px','0px']
         }]
      },
      {
         id: 'imgCirc6',
         type: 'group',
         rect: ['1232px','25px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg6',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img6',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/6.jpg','0px','0px']
         }]
      },
      {
         id: 'imgCirc8',
         type: 'group',
         rect: ['1794px','26px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg8',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img8',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/8.jpg','0px','0px']
         }]
      },
      {
         id: 'imgCirc7',
         type: 'group',
         rect: ['1648px','26px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg7',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img7',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/7.jpg','0px','0px']
         }]
      },
      {
         id: 'imgCirc10',
         type: 'group',
         rect: ['2329px','24px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg10',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img10',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/10.jpg','0px','0px']
         }]
      },
      {
         rect: ['2165px','24px','241','241','auto','auto'],
         id: 'imgCirc9',
         type: 'group',
         transform: [[0,0],[],[],['0.68964','0.68964']],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg9',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img9',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/9.jpg','0px','0px']
         }]
      },
      {
         rect: ['2484px','24px','241','241','auto','auto'],
         id: 'imgCirc11',
         type: 'group',
         transform: [[0,0],[],[],['0.69','0.69']],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg11',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img11',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/11.jpg','0px','0px']
         }]
      },
      {
         id: 'imgCirc12',
         type: 'group',
         rect: ['2961px','24px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg12',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img12',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/12.jpg','0px','0px']
         }]
      },
      {
         rect: ['3348px','58px','241','241','auto','auto'],
         id: 'imgCirc13',
         type: 'group',
         transform: [[0,0],[],[],['0.68964','0.68964']],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg13',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img13',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/13.jpg','0px','0px']
         }]
      },
      {
         rect: ['3458px','-1px','241','241','auto','auto'],
         id: 'imgCirc14',
         type: 'group',
         transform: [[0,0],[],[],['0.68964','0.68964']],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg14',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['21px','21px','200px','200px','auto','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img14',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/14.jpg','0px','0px']
         }]
      },
      {
         id: 'imgCirc15',
         type: 'group',
         rect: ['3837px','23px','241','241','auto','auto'],
         c: [
         {
            rect: ['8px','8px','226px','226px','auto','auto'],
            borderRadius: ['100% 100%','100% 100%','100% 100%','100% 100%'],
            id: 'imgBg15',
            stroke: [0,'rgba(255,0,227,1.00)','solid'],
            type: 'rect',
            fill: ['rgba(171,0,97,1.00)']
         },
         {
            rect: ['auto','21px','200px','200px','20px','auto'],
            borderRadius: ['96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px','96.10546875px 96.10546875px'],
            id: 'img15',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/15.jpg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'BokehBgSm',
      symbolName: 'BokehBgSm'
   },
   {
      id: 'bokehBgLg',
      symbolName: 'bokehBgLg'
   },
   {
      id: 'bokehBgMed',
      symbolName: 'bokehBgMed'
   }   ]
   },
   states: {
      "Base State": {
         "${_imgBg8}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "left", '8px'],
            ["style", "border-width", '0px']
         ],
         "${_imgCirc13}": [
            ["transform", "scaleX", '0.68964'],
            ["style", "top", '58px'],
            ["style", "left", '3348px'],
            ["transform", "scaleY", '0.68964']
         ],
         "${_imgBg3}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_imgBg2}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "left", '8px'],
            ["style", "border-width", '0px']
         ],
         "${_img7}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px']
         ],
         "${_imgCirc2}": [
            ["style", "left", '84px'],
            ["style", "top", '23px']
         ],
         "${_imgBg7}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_imgCirc5}": [
            ["style", "left", '820px'],
            ["style", "top", '23px']
         ],
         "${_img4}": [
            ["style", "top", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_imgCirc7}": [
            ["style", "left", '1647px'],
            ["style", "top", '26px']
         ],
         "${_imgCirc10}": [
            ["style", "left", '2330px'],
            ["style", "top", '24px']
         ],
         "${_img11}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px']
         ],
         "${_imgBg15}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_imgCirc6}": [
            ["style", "left", '1230px'],
            ["style", "top", '25px']
         ],
         "${_img10}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_imgCirc12}": [
            ["style", "left", '2961px'],
            ["style", "top", '24px']
         ],
         "${_imgBg14}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "left", '8px'],
            ["style", "border-width", '0px']
         ],
         "${_imgBg10}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "left", '8px'],
            ["style", "border-width", '0px']
         ],
         "${_imgBg}": [
            ["color", "background-color", 'rgba(171,0,97,1.00)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgba(255,0,227,1.00)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_imgBg9}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_imgBg5}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_imgCirc1}": [
            ["transform", "scaleX", '0.68964'],
            ["style", "left", '-38px'],
            ["transform", "scaleY", '0.68964'],
            ["style", "top", '-37px']
         ],
         "${_imgBg4}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "left", '8px'],
            ["style", "border-width", '0px']
         ],
         "${_imgCirc4}": [
            ["transform", "scaleX", '0.82988'],
            ["style", "top", '77px'],
            ["style", "left", '606px'],
            ["transform", "scaleY", '0.82988']
         ],
         "${_img6}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_img12}": [
            ["style", "top", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '1024px'],
            ["style", "max-width", 'none']
         ],
         "${_imgCirc8}": [
            ["style", "left", '1795px'],
            ["style", "top", '26px']
         ],
         "${_imgGroups}": [
            ["style", "left", '38px'],
            ["style", "top", '34px']
         ],
         "${_imgCirc3}": [
            ["transform", "scaleX", '0.82988'],
            ["style", "top", '-1px'],
            ["style", "left", '477px'],
            ["transform", "scaleY", '0.82988']
         ],
         "${_img13}": [
            ["style", "top", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_img5}": [
            ["style", "top", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_img9}": [
            ["style", "top", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_imgCirc11}": [
            ["transform", "scaleX", '0.69'],
            ["style", "top", '24px'],
            ["style", "left", '2485px'],
            ["transform", "scaleY", '0.69']
         ],
         "${_img8}": [
            ["style", "top", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_img}": [
            ["style", "top", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_imgBg6}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "left", '8px'],
            ["style", "border-width", '0px']
         ],
         "${_imgBg13}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_img15}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", '20px'],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", 'auto']
         ],
         "${_imgCirc9}": [
            ["transform", "scaleX", '0.68964'],
            ["style", "top", '24px'],
            ["style", "left", '2167px'],
            ["transform", "scaleY", '0.68964']
         ],
         "${_img3}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px']
         ],
         "${_img2}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_imgBg12}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "left", '8px'],
            ["style", "border-width", '0px']
         ],
         "${_imgBg11}": [
            ["color", "background-color", 'rgba(171,0,97,1)'],
            ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '226px'],
            ["style", "top", '8px'],
            ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '226px'],
            ["color", "border-color", 'rgb(255, 0, 227)'],
            ["style", "border-width", '0px'],
            ["style", "left", '8px']
         ],
         "${_bokehBgLg}": [
            ["style", "top", '12px'],
            ["style", "left", '-607px']
         ],
         "${_BokehBgSm}": [
            ["style", "left", '-23px'],
            ["style", "top", '6px']
         ],
         "${_imgCirc15}": [
            ["style", "left", '3837px'],
            ["style", "top", '23px']
         ],
         "${_imgCirc14}": [
            ["transform", "scaleX", '0.68964'],
            ["style", "top", '-1px'],
            ["style", "left", '3456px'],
            ["transform", "scaleY", '0.68964']
         ],
         "${_bokehBgMed}": [
            ["style", "left", '-23px'],
            ["style", "top", '6px']
         ],
         "${_img14}": [
            ["style", "top", '21px'],
            ["style", "border-top-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '21px'],
            ["style", "border-bottom-left-radius", [96.10546875,96.10546875], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid18", tween: [ "style", "${_bokehBgLg}", "top", '-29px', { fromValue: '12px'}], position: 0, duration: 2000 },
            { id: "eid15", tween: [ "style", "${_BokehBgSm}", "left", '-1005px', { fromValue: '-23px'}], position: 0, duration: 2000 },
            { id: "eid21", tween: [ "style", "${_imgGroups}", "left", '-3320px', { fromValue: '38px'}], position: 0, duration: 2000 },
            { id: "eid65", tween: [ "style", "${_bokehBgMed}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_bokehBgMed}", "left", '-593px', { fromValue: '-23px'}], position: 0, duration: 2000 },
            { id: "eid17", tween: [ "style", "${_bokehBgLg}", "left", '-24px', { fromValue: '-607px'}], position: 0, duration: 2000 },
            { id: "eid16", tween: [ "style", "${_BokehBgSm}", "top", '-28px', { fromValue: '6px'}], position: 0, duration: 2000 },
            { id: "eid64", tween: [ "style", "${_imgGroups}", "top", '34px', { fromValue: '34px'}], position: 0, duration: 0 }         ]
      }
   }
},
"sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','64px','64px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(192,192,192,1)']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1286,
         autoPlay: false,
         timeline: [
            { id: "eid6", tween: [ "color", "${_Rectangle4}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 1286 }         ]
      }
   }
},
"bokehBgLg": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bl5',
      type: 'image',
      rect: ['-53px','-180px','1200px','795px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bokehLg.png','0px','0px']
   },
   {
      rect: ['724px','-165px','1200px','795px','auto','auto'],
      id: 'bl4',
      transform: [[0,0],['31']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehLg.png','0px','0px']
   },
   {
      rect: ['1894px','-175px','1200px','795px','auto','auto'],
      id: 'bl3',
      transform: [[0,0],['180']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehLg.png','0px','0px']
   },
   {
      rect: ['2998px','-175px','1200px','795px','auto','auto'],
      id: 'bl2',
      transform: [[0,0],['28']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehLg.png','0px','0px']
   },
   {
      rect: ['4090px','-120px','1200px','795px','auto','auto'],
      id: 'bl1',
      transform: [[0,0],['28']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehLg.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bl2}": [
            ["style", "top", '-175px'],
            ["style", "left", '2998px'],
            ["transform", "rotateZ", '28deg']
         ],
         "${_bl4}": [
            ["style", "top", '-165px'],
            ["style", "left", '724px'],
            ["transform", "rotateZ", '31deg']
         ],
         "${_bl1}": [
            ["style", "top", '-120px'],
            ["style", "left", '4090px'],
            ["transform", "rotateZ", '28deg']
         ],
         "${_bl3}": [
            ["style", "top", '-175px'],
            ["style", "left", '1894px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '5201px']
         ],
         "${_bl5}": [
            ["style", "left", '-53px'],
            ["style", "top", '-180px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bokehBgMed": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'bm1',
      stroke: [0,'rgb(255, 0, 227)','solid'],
      rect: ['0px','0px','4248px','411px','auto','auto'],
      fill: ['rgba(255,0,0,1)']
   },
   {
      id: 'bm2',
      type: 'image',
      rect: ['-7px','-29px','900px','457px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bokehMed.png','0px','0px']
   },
   {
      id: 'bm3',
      type: 'image',
      rect: ['830px','-46px','900px','457px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bokehMed.png','0px','0px']
   },
   {
      rect: ['1659px','-55px','900px','457px','auto','auto'],
      id: 'bm4',
      transform: [[0,0],['157']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehMed.png','0px','0px']
   },
   {
      rect: ['2259px','-45px','900px','457px','auto','auto'],
      id: 'bm5',
      transform: [[0,0],['361']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehMed.png','0px','0px']
   },
   {
      rect: ['3107px','-65px','900px','457px','auto','auto'],
      id: 'bm6',
      transform: [[0,0],['516']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehMed.png','0px','0px']
   },
   {
      rect: ['3982px','-50px','900px','457px','auto','auto'],
      id: 'bm7',
      transform: [[0,0],['720']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehMed.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '411px'],
            ["style", "width", '4248px']
         ],
         "${_bm7}": [
            ["style", "top", '-50px'],
            ["style", "left", '3982px'],
            ["transform", "rotateZ", '720deg']
         ],
         "${_bm6}": [
            ["style", "top", '-65px'],
            ["style", "left", '3107px'],
            ["transform", "rotateZ", '516deg']
         ],
         "${_bm4}": [
            ["style", "top", '-55px'],
            ["style", "left", '1659px'],
            ["transform", "rotateZ", '157deg']
         ],
         "${_bm3}": [
            ["style", "left", '830px'],
            ["style", "top", '-46px']
         ],
         "${_bm5}": [
            ["style", "top", '-45px'],
            ["style", "left", '2259px'],
            ["transform", "rotateZ", '361deg']
         ],
         "${_bm1}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(255,0,0,0)'],
            ["style", "left", '0px'],
            ["style", "width", '4248px']
         ],
         "${_bm2}": [
            ["style", "left", '-7px'],
            ["style", "top", '-29px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"BokehBgSm": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-196px','-68px','800px','490px','auto','auto'],
      id: 'bs1',
      transform: [[0,0],[],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['177px','-74px','800px','490px','auto','auto'],
      id: 'bs2',
      transform: [[0,0],[],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['541px','-56px','800px','490px','auto','auto'],
      id: 'bs3',
      transform: [[0,0],['180'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['926px','-74px','800px','490px','auto','auto'],
      id: 'bs4',
      transform: [[0,0],['180'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['3547px','-62px','800px','490px','auto','auto'],
      id: 'bs5',
      transform: [[0,0],[],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['3920px','-68px','800px','490px','auto','auto'],
      id: 'bs6',
      transform: [[0,0],[],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['4284px','-50px','800px','490px','auto','auto'],
      id: 'bs7',
      transform: [[0,0],['180'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['4669px','-68px','800px','490px','auto','auto'],
      id: 'bs8',
      transform: [[0,0],['180'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['1290px','-74px','800px','490px','auto','auto'],
      id: 'bs9',
      transform: [[0,0],['352'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['1670px','-68px','800px','490px','auto','auto'],
      id: 'bs10',
      transform: [[0,0],['378'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['2042px','-52px','800px','490px','auto','auto'],
      id: 'bs11',
      transform: [[0,0],['180'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['2427px','-70px','800px','490px','auto','auto'],
      id: 'bs12',
      transform: [[0,0],['180'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['2791px','-70px','800px','490px','auto','auto'],
      id: 'bs13',
      transform: [[0,0],['352'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   },
   {
      rect: ['3171px','-64px','800px','490px','auto','auto'],
      id: 'bs14',
      transform: [[0,0],['378'],[],['0.51012','0.51012']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bokehSm.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bs1}": [
            ["transform", "scaleX", '0.51012'],
            ["style", "top", '-68px'],
            ["style", "left", '-196px'],
            ["transform", "scaleY", '0.51012']
         ],
         "${_bs14}": [
            ["style", "top", '-64px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '378deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '3171px']
         ],
         "${_bs13}": [
            ["style", "top", '-70px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '352deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '2791px']
         ],
         "${_bs4}": [
            ["style", "top", '-74px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '926px']
         ],
         "${_bs8}": [
            ["style", "top", '-68px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '4669px']
         ],
         "${_bs12}": [
            ["style", "top", '-70px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '2427px']
         ],
         "${_bs2}": [
            ["style", "top", '-74px'],
            ["transform", "scaleY", '0.51012'],
            ["style", "left", '177px'],
            ["transform", "scaleX", '0.51012']
         ],
         "${_bs5}": [
            ["style", "top", '-62px'],
            ["transform", "scaleY", '0.51012'],
            ["style", "left", '3547px'],
            ["transform", "scaleX", '0.51012']
         ],
         "${_bs6}": [
            ["style", "top", '-68px'],
            ["transform", "scaleX", '0.51012'],
            ["transform", "scaleY", '0.51012'],
            ["style", "left", '3920px']
         ],
         "${_bs9}": [
            ["style", "top", '-74px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '352deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '1290px']
         ],
         "${symbolSelector}": [
            ["style", "height", '411px'],
            ["style", "width", '4248px']
         ],
         "${_bs11}": [
            ["style", "top", '-52px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '2042px']
         ],
         "${_bs10}": [
            ["style", "top", '-68px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '378deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '1670px']
         ],
         "${_bs3}": [
            ["style", "top", '-56px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '541px']
         ],
         "${_bs7}": [
            ["style", "top", '-50px'],
            ["transform", "scaleY", '0.51012'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.51012'],
            ["style", "left", '4284px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11346385");
