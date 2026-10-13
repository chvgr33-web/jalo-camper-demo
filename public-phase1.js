// Public palette scope follows the existing view switch; no private-view behavior changes.
(()=>{const page=document.getElementById('publica');const apply=()=>document.body.classList.toggle('public-mode',!page.classList.contains('hidden'));apply();new MutationObserver(apply).observe(page,{attributes:true,attributeFilter:['class']});})();
