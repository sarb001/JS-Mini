
const toastbutton = document.getElementById('toast');
const DurationBar = document.getElementById('range');

const Horizontal = document.getElementById('horizontal-position');
const Vertical = document.getElementById('vertical-position');
const Type     = document.getElementById('type');

const showleftTop   = document.getElementById('showleftTop');
const showrightTop  = document.getElementById('showrightTop');
const showleftBottom    = document.getElementById('showleftBottom');
const showrightBottom = document.getElementById('showrightbottom');


const ToastmessageBox = document.getElementById('toastmessagebox');  // complete box with close btn 
// const Toastmessage = document.getElementById('toastmessage');   // showmsg on click 
const EnterMessage   = document.getElementById('message');      // inputmessge

const closeToast   = document.getElementsByClassName('remove');

const ShowToast = document.getElementById('showtoast');

const toast  = document.getElementById('toast');

function getoastvalues(){
     const message = EnterMessage.value;
     console.log('message -',message);

     HorizontalPosition = Horizontal.value;
     console.log(' Horizontal -',HorizontalPosition);

     VerticalPosition   = Vertical.value;
     console.log(' vertical -',VerticalPosition);

     Typevalue = Type.value;
     console.log(' typevalue -',Typevalue);
     
     Barvalue = DurationBar.value * 1000;
     console.log(' Bar value -',Barvalue);

     showtoast(HorizontalPosition,VerticalPosition,Typevalue,Barvalue,message);
}

function showtoast(horizontalvalue,verticalvalue,typevalue,barvalue,message){
        if(horizontalvalue === "left"){
             if(verticalvalue === "top"){
                 showleftTop.prepend(createToast(message,typevalue,barvalue,horizontalvalue));
            }else{
                 showleftBottom.prepend(createToast(message,typevalue,barvalue,horizontalvalue));
             }
        }else {
            if(verticalvalue === "top"){
                showrightTop.prepend(createToast(message,typevalue,barvalue,horizontalvalue));
           }else{
                showrightBottom.prepend(createToast(message,typevalue,barvalue,horizontalvalue));
            }
        }
}

function createToast(message,typevalue,barvalue,horizontalvalue){
      const toast = ToastmessageBox.content.cloneNode(true);
      toast.querySelector('.toastmessage').textContent = message;
      toast.querySelector('.toast').classList.add(typevalue);
      toast.querySelector('.remove').addEventListener('click' , removetoast);
      const toastE1 = toast.querySelector('.toast');
      setTimeout(removetoast ,Barvalue);
      
      async function removetoast(){
        toastE1.remove();
    } 
    return toast;
}

function enterinputbar(){
    ShowToast.disabled =   EnterMessage.value.length === 0;
}

EnterMessage.addEventListener('input',enterinputbar);
ShowToast.addEventListener('click' , getoastvalues);









