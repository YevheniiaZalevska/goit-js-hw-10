import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as S,i as d}from"./assets/vendor-BbSUbo7J.js";const o=document.querySelector("button[data-start]"),a=document.querySelector("#datetime-picker"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");let r=null,c=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<new Date?(d.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}};S(a,b);o.addEventListener("click",()=>{o.disabled=!0,a.disabled=!0,c=setInterval(()=>{const e=r-new Date;if(e<=0){clearInterval(c),a.disabled=!1,d.success({title:"Success",message:"Countdown finished!"});return}const n=w(e);g(n)},1e3)});function w(t){const u=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:i,minutes:l,seconds:m}}function g({days:t,hours:e,minutes:n,seconds:s}){f.textContent=String(t).padStart(2,"0"),h.textContent=String(e).padStart(2,"0"),p.textContent=String(n).padStart(2,"0"),y.textContent=String(s).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map