const n=document.querySelector(".change-lang"),e=["en","ua"];n.addEventListener("change",(function(){let e=n.value;location.href=window.location.pathname+"#"+e,location.reload()})),function(){let o=window.location.hash;o=o.substring(1),e.includes(o)||(location.href=window.location.pathname+"#en",location.reload()),n.value=o;for(let n in langArr)document.querySelector(".lng-"+n).innerHTML=langArr[n][o]}();
//# sourceMappingURL=index.c7d56efc.js.map