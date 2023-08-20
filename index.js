
const toastbutton = document.getElementById('toast');
const DurationBar = document.getElementById('range');

const Horizontal = document.getElementById('horizontal-position');
const Vertical = document.getElementById('vertical-position');
const Type     = document.getElementById('type');


const showmsgleft   = document.getElementById('showleft');
const showmsgright  = document.getElementById('showright');
const showmsgtop    = document.getElementById('showtop');
const showmsgbottom = document.getElementById('showbottom');

const Toastmessage = document.getElementById('toastmessage');
const closeToast   = document.getElementById('closetoast');


const EnterMessage   = document.getElementById('message');
const ShowToast = document.getElementById('showtoast');

function showtoast(){
     Hori = Horizontal.value;
     console.log(' Hori -',Hori);
     Verticalvalue = Vertical.value;
     console.log(' verti -',Verticalvalue);
     Typevalue = Type.value;
     console.log(' type -',Typevalue);
}

ShowToast.addEventListener('click', showtoast)









