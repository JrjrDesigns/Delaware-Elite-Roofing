document.addEventListener('click',function(e){var b=e.target.closest('.navbtn,.dl-navbtn');if(!b)return;var n=b.closest('nav');var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
document.querySelectorAll('form[method=POST]').forEach(function(f){f.addEventListener('submit',function(){var p=f.querySelector('[name=page]');if(p&&!p.value)p.value=location.href;});});
